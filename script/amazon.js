// const amazonproduct=[{
//   img:"images/products/athletic-cotton-socks-6-pairs.jpg",
//   name:'Black and Gray Athletic Cotton...',
//   rating:{
//     stars:4.5,
//     count:87
//   },
//   pricecents:1090,},{
//     img:"images/products/intermediate-composite-basketball.jpg",
//   name:'Intermediate Size Basketball',
//   rating:{
//     stars:4,
//     count:127
//   },
//   pricecents:2095,
//   },
// {
//   img:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//   name:'Adult Plain Cotton T-shirt -2 pack',
//   rating:{
//     stars:4.5,
//     count :56
//   },
//   pricecents:799,
// },{
//   img:"images/products/black-2-slot-toaster.jpg",
//   name:'2 Slot Toaster - Black',
//   rating:{
//     stars:5,
//     count:2197
//   },
//   pricecents:1899,
// }
// ]
// const cart=[];
import {cart,addtocart,cartquantity} from '../data/cart.js';
import {products} from '../data/products.js';
let producthtml="";
products.forEach((product)=>{
  producthtml+=`<div class=product-container">
  <div class="product-image-container">
    <img class="product-image"src=" ${product.image}">
  </div>

  <div class="product-name limit-text-to-2-lines">
   ${product.name}
  </div>

  <div class="product-rating-container">
    <img class="product-rating-stars"
      src="images/ratings/rating-${product.rating.stars*10}.png">
    <div class="product-rating-count link-primary">
      ${product.rating.count}
    </div>
  </div>

  <div class="product-price">
    $${(product.priceCents/100).toFixed(2)}
  </div>

  <div class="product-quantity-container">
    <select>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart">
    <img src="images/icons/checkmark.png">
    Added
  </div>

  <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
    Add to Cart
  </button>
</div>`

})
console.log(producthtml)
document.querySelector('.js-product-grid').innerHTML=producthtml;
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
   const productId= button.dataset.productId;
 addtocart(productId);
cartquantity();
  })
})

