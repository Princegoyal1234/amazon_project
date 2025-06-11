import {addtocart,cart,loadfromstorage} from '../../data/cart.js'
describe('test suits: add to cart',()=>{
  it('adds and existing product to cart',()=>{
    
  })
  it('adds the new product to cart',()=>{
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([]);
    });
    console.log(localStorage.getItem('cart'));
    loadfromstorage();
addtocart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
expect(cart.length).toEqual(1);
  })
})