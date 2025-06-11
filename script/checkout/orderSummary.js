import{cart,removeitmes,updatedeliveryoption} from '../../data/cart.js';
import{products,getProduct} from '../../data/products.js';
import { formatcurrancy } from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions,getdeliveryOption} from '../../data/deliveryOption.js';
import {renderpaymentsummary} from './paymentsummary.js'
// const today=dayjs();
// const deliverydate=today.add(7,'days');
// console.log(deliverydate.format('dddd,MMMM D'));
export function renderordersummary(){

let summary='';
cart.forEach((cartItem)=>{
 const productId=cartItem.productId;
 let matchingitem=getProduct(productId);
console.log(matchingitem);
const deliveryOptionId=cartItem.deliveryOptionId;
let deliveryOption=getdeliveryOption(deliveryOptionId);

const today=dayjs();
  const deliverydate=today.add(deliveryOption.deliverydays,'days');
  const deliverystring=deliverydate.format('dddd,MMMM D');
summary+=
  `
            <div class="cart-item-container js-cart-item-container-${matchingitem.id}">
            <div class="delivery-date">
              Delivery date: ${deliverystring}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src=${matchingitem.image}>

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingitem.name}
                </div>
                <div class="product-price">
                  $${formatcurrancy(matchingitem.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-quantity" data-product-id="${matchingitem.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionhtml(matchingitem,cartItem)}
              </div>
            </div>
            
  `;})
function deliveryOptionhtml(matchingitem,cartItem){
  let html;
  deliveryOptions.forEach((deliveryOption)=>{
  const today=dayjs();
  const deliverydate=today.add(deliveryOption.deliverydays,'days');
  const deliverystring=deliverydate.format('dddd,MMMM D');
  const Pricestring=deliveryOption.priceCents===0 ?'FREE':`$${formatcurrancy(deliveryOption.priceCents)}`;
  const ischecked =deliveryOption.id===cartItem.deliveryOptionId;
html+=
  `<div class="delivery-option js-delivery-option" data-product-id="${matchingitem.id}" data-delivery-option-id="${deliveryOption.id}">
  <input type="radio" ${ischecked ? 'checked':''}
    class="delivery-option-input"
    name="delivery-option-${matchingitem.id}">
  <div>
    <div class="delivery-option-date">
      ${deliverystring}
    </div>
    <div class="delivery-option-price">
       ${Pricestring}-Shipping
    </div>
  </div>
  </div>`
  })
  return html;
}
  console.log(summary);
  document.querySelector('.js-order-summary').innerHTML=summary;
  document.querySelectorAll('.js-delete-quantity').forEach((link)=>{
    link.addEventListener('click',()=>{
      let  productId=link.dataset.productId;
      console.log(productId)
      removeitmes(productId);
      const button=document.querySelector(`.js-cart-item-container-${productId}`);
      // console.log(button)
      button.remove();
      renderpaymentsummary();
       });
  })
  document.querySelectorAll('.js-delivery-option').forEach((element)=>{
    // console.log(element)
    element.addEventListener('click',()=>{
      const{productId,deliveryOptionId}=element.dataset;
      updatedeliveryoption(productId,deliveryOptionId);
      renderordersummary();
      renderpaymentsummary();
    })
  })}
