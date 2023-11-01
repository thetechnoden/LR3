const orderList = document.getElementById('orderList');
const totalAmountElement = document.getElementById('totalAmount');
const checkoutForm = document.getElementById('checkoutForm');

const products = [
    { name: 'Бакет дует гострий', price: 10 },
    { name: 'Стріпси оригінальні', price: 8 },
];


function updateTotalAmount() {
    const orderItems = orderList.getElementsByTagName('li');
    let totalAmount = 0;
    for (const item of orderItems) {
        const quantity = item.querySelector('.quantity').value;
        const price = item.querySelector('.price').textContent;
        totalAmount += parseFloat(price) * parseInt(quantity);
    }
    totalAmountElement.textContent = totalAmount.toFixed(2);
}

for (const product of products) {
    const li = document.createElement('li');
    const itemName = document.createElement('span');
    itemName.textContent = product.name;
    const itemPrice = document.createElement('span');
    itemPrice.className = 'price';
    itemPrice.textContent = product.price.toFixed(2);
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.className = 'quantity';
    quantityInput.value = 1;
    quantityInput.addEventListener('input', updateTotalAmount);
    li.appendChild(itemName);
    li.appendChild(itemPrice);
    li.appendChild(quantityInput);
    orderList.appendChild(li);
}

updateTotalAmount();

checkoutForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const orderItems = orderList.getElementsByTagName('li');
    const orderDetails = [];

    for (const item of orderItems) {
        const itemName = item.querySelector('span').textContent;
        const quantity = item.querySelector('.quantity').value;
        orderDetails.push({ name: itemName, quantity: quantity });
    }

    console.log('Ім\'я: ' + name);
    console.log('Адреса доставки: ' + address);
    console.log('Замовлення:');
    for (const detail of orderDetails) {
        console.log(detail.name + ' x' + detail.quantity);
    }
    alert('Замовлення відправлено!');
});