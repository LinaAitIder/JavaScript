import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import {loadProducts , loadProductsFetch} from '../data/products.js';
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
async function loadPage(){
  try{
   // throw 'error1';
    await loadProductsFetch();

    await new Promise((resolve , reject)=>{
      //throw 'error2';
      loadCart(()=>{
        //reject('error3');
        resolve('value3');
      });
    });
  } catch(error){
    console.log('Unexpected error.Please try again later.');
    console.log(error);
  }

  renderOrderSummary();
  renderPaymentSummary();
  
}

 loadPage()
 //.then((value) =>{
//   console.log('next step');
//   console.log(value);
// });

/*

Promise.all([
 loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();

})
  */
/*
new Promise((resolve)=>{
  loadProducts(()=>{
  resolve('value1');
   });

}).then((value)=>{
  console.log(value);
    return new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
      });
    });

}).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*

loadProducts(() => {
    loadCart(()=>{

      renderOrderSummary();
      renderPaymentSummary();
    });
});
*/
