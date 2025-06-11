export let cart;
loadfromstorage();
export function loadfromstorage(){
  cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){cart=[{
  productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2,
  deliveryOptionId:'2'
},{
  productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity:1,
  deliveryOptionId:'1'
}]}
}
export function addtocart(productId){
  let matchitem;
   cart.forEach((item)=>{
    if(productId===item.productId) matchitem=item; });
    if(matchitem){
      matchitem.quantity+=1;
    }
    else {
      cart.push({
        productId:productId,
        quantity:1,
        deliveryOptionId:'1'
      })
    }
    savestorage();
}
export function cartquantity(){
  let cartquantity=0;
cart.forEach((item)=>{
  cartquantity+=item.quantity;
})
document.querySelector('.js-cart-quantity').innerHTML=cartquantity;
  console.log(cart);
}
function savestorage(){
  //this store only string
  localStorage.setItem('cart',JSON.stringify(cart));
}
export function removeitmes(productId){
  const newcart=[];
  cart.forEach((cartItem)=>{
if(productId!==cartItem.productId){
  newcart.push(cartItem)
}
  });
  cart=newcart;
  savestorage();
}
export function updatedeliveryoption(productId,deliveryOptionId){
let matchingitem;
cart.forEach((cartItem)=>{
  if(productId===cartItem.productId){
    matchingitem=cartItem;
  }
});
matchingitem.deliveryOptionId=deliveryOptionId;
savestorage();
}
