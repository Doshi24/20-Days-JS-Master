const cart  = document.getElementById('cart');
const productname = document.getElementById('productName');
const productprice = document.getElementById('productPrice');
const producttax = document.getElementById('productTax');
const subTotal = document.getElementById('subtotal');
const Totalamount = document.getElementById('totalamount');
const cartdiv = document.getElementById('cart-div');
const cartdata = [
    {name :"laptop", price :50000}
]
let totalitem = 0;
let subtotal = 0;
let totaltax = 0;
let totalamount = 0;

cart.addEventListener('click', () => {
cartdiv.style.display = "block";
totalitem+=1;

subtotal= cartdata[0].price * totalitem;
totaltax = (subtotal *18 )/100 ;
totalamount = subtotal+totaltax;
console.log(subtotal);
console.log(totaltax);
console.log(totalamount);

productname.innerHTML =  "your product is : "+cartdata[0].name;
productprice.innerText = "Product price is : "+cartdata[0].price+ "/-"
producttax.textContent = "Tax you need to pay : "+totaltax+ "/-"
subTotal.textContent = "your qunaity is : "+totalitem;
Totalamount.textContent = "Total amount is : "+totalamount+ "/-"


});