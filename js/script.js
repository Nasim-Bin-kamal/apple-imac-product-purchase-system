const memory8GB = document.getElementById('btn-8gb');
const memory16GB = document.getElementById('btn-16gb');
const memoryCost = document.getElementById('memory-cost');

const storage256GB = document.getElementById('btn-256gb');
const storage512GB = document.getElementById('btn-512gb');
const storage1TB = document.getElementById('btn-1tb');
const storageCost = document.getElementById('storage-cost');

const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');
const deliveryCost = document.getElementById('delivery-cost');

const productCost = document.getElementById('base-price');
const totalPrice = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');

const promoCode = document.getElementById('input-promo');
const applybutton = document.getElementById('btn-apply');


// calculate total price
function calculatePrice() {
    const product = Number(productCost.innerText);
    const memory = Number(memoryCost.innerText);
    const storage = Number(storageCost.innerText);
    const delivery = Number(deliveryCost.innerText);
    const subTotal = product + memory + storage + delivery;
    totalPrice.innerText = subTotal;
    grandTotal.innerText = subTotal;
}

// calculate grand total price after apply promocode
function promoDiscount() {
    const grandCost = parseFloat(grandTotal.innerText);
    const afterDiscount = grandCost - ((grandCost / 100) * 20);
    grandTotal.innerText = afterDiscount;
}


//handle memory buttons
memory8GB.addEventListener('click', function () {
    memoryCost.innerText = '0';
    calculatePrice();  
});

memory16GB.addEventListener('click', function () {
    memoryCost.innerText = '180';
    calculatePrice();
    
});

//handle storage buttons
storage256GB.addEventListener('click', function () {
    storageCost.innerText = '0';
    calculatePrice();
});
storage512GB.addEventListener('click', function () {
    storageCost.innerText = '100';
    calculatePrice();
});
storage1TB.addEventListener('click', function () {
    storageCost.innerText = '180';
    calculatePrice();
});

// handle delivery buttons
freeDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '0';
    calculatePrice();
});
expressDelivery.addEventListener('click', function () {
    deliveryCost.innerText = '20';
    calculatePrice();
});
// handle promocode button
applybutton.addEventListener('click', function () {
    const inputPromo = promoCode.value;
    const code = 'stevekaku';
    if(inputPromo.toLowerCase() == code.toLowerCase()){
        promoDiscount();
        promoCode.value = '';
    }
});