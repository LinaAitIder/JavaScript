import {products} from "./products.js";
export let cart;
loadFromStorage();

export function loadFromStorage(){
  cart=JSON.parse(localStorage.getItem('cart'));
  if(!cart){
    cart = [{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity : 2,
      deliveryOptionId : '1'
    },{
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity : 2,
      deliveryOptionId : '2'
    }]
  }}
//accessing the variable cart outsied the file
// export helps us determine and hoose the variables in this files that we want to access outside of it , cause for now this variable are only defines in this file , cause we didn;t limk this file with other file uding the script , the only way here , is to ecport variables and giving permission to other files to have access to those variables
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}
export function addToCart(productId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    if(matchingItem){
      matchingItem.quantity +=1;
    } else{
      cart.push({
        productId,
        quantity : 1, // what if the quantity chosen is more than one
        deliveryOptionId : '1' 
      })
    }
    saveToStorage();
}
export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}

export function getTotalItems(){
  let totalItems = 0;
  cart.forEach((cartItem) => {
    totalItems += cartItem.quantity;
  });
  return totalItems;
}


export function loadCart(fun){

  const xhr  =  new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    console.log(xhr.response);
    fun();
  });
  xhr.open('GET' , 'https://supersimplebackend.dev/cart');
  xhr.send();

}