import {cart ,getTotalItems} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import {formatCurrency} from '../utils/money.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { renderOrderSummary } from './orderSummary.js';
import { addOrder  } from '../../data/orders.js';
export function renderPaymentSummary(){
  let productsPriceCents = 0;
  let shippingPriceCents = 0;
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let product = getProduct(productId); 
    productsPriceCents += product.priceCents * cartItem.quantity;
    let deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;

  });
  const totalBeforTaxCents= shippingPriceCents + productsPriceCents;
  const taxCents = totalBeforTaxCents * 0.1;
  const totalCents = totalBeforTaxCents + taxCents;
  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${getTotalItems()}):</div>
      <div class="payment-summary-money">$${formatCurrency(productsPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforTaxCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
          `;
    document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
    document.querySelector('.js-place-order').addEventListener('click', async () =>{
      try{
      const response = await fetch('https://supersimplebackend.dev/orders',{
        method: 'POST',
        headers :{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          cart : cart,
        })
      });

      const order = await response.json(); // await cause this is also a promise
      console.log(order);  
      addOrder(order);
    } catch(error){
      console.log("Unexpected error , try again later!");
    }
    });

    window.location.href="../orders.html";
}