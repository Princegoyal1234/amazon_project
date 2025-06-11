import {cart} from '../../data/cart.js'
import {getProduct} from '../../data/products.js'
import{getdeliveryOption} from '../../data/deliveryOption.js'
import{formatcurrancy} from '../utils/money.js'
import { renderordersummary } from './orderSummary.js';
export function  renderpaymentsummary(){
  let productpricecents=0;
  let shippingpricecents=0;
  cart.forEach((cartitem) => {
    const product=getProduct(cartitem.productId)
    // console.log(product.id)
    productpricecents+=(product.priceCents)*cartitem.quantity;
    const deliveryOption= getdeliveryOption(cartitem.deliveryOptionId);
    console.log(deliveryOption);
    shippingpricecents+=deliveryOption.priceCents;
  });
  console.log(productpricecents);
  console.log(shippingpricecents);
  const totalbeforeconstcents=productpricecents+shippingpricecents;
  const taxCents=totalbeforeconstcents*0.1;
  const totalCents=totalbeforeconstcents+taxCents;
  console.log(totalCents)
  const paymentsummary=`
  <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3)):</div>
            <div class="payment-summary-money">$${formatcurrancy(productpricecents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatcurrancy(shippingpricecents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatcurrancy(totalbeforeconstcents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatcurrancy(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatcurrancy(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
  `
  document.querySelector('.js-payment-summary').innerHTML=paymentsummary;
}