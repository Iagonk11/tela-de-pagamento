'use strict';

const payAmountBtn = document .querySelector('#payAmount');
const decrementBtn = document .querySelector('#decrement');
const quantityElem = document .querySelector('#quantity');
const incrementBtn = document .querySelector('#increment');
const priceElem = document .querySelector('#price');
const SubtotalElem = document .querySelector('#Subtotal');
const taxaElem = document .querySelector('#taxa');
const totalElem = document .querySelector('#total');




for (let i = 0; i < incrementBtn. lenght; i++) {

incrementBtn[i].addEventListener('click', function (){
    
let increment = Number(this.previousElementSibling.textContent);

increment++;

this.previousElementSibling.textContent = increment;

totalCalc();

} );

decrementBtn[i].addEventListener('click', function (){

let decrement = Number(this.nextElementSibling.textContent);

decrement <= 1 ? 1 : decrement--;

this.nextElementSibling.textContent = decrement;

totalCalc();

});

}

const totalCalc = function() {
    const tax = 0.1;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    for (let i = 0; i < quantityElem.lenght; i++){

        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
    }

    SubtotalElem.textContent = subtotal.toFixed(2);

    totalTax = subtotal * tax;

   taxaElem.textContent = totalTax.toFixed(2);
   
   total = subtotal + totalTax;

   totalElem.textContent = total.toFixed(2);
   payAmountBtn.textContent = total.toFixed(2);

}