const onenumber = document.getElementById("onenumber");
const secondnumber = document.getElementById("secondnumber");

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multi = document.getElementById("multi");
const ans = document.getElementById("Answer");


add.addEventListener("click", () => {
    const num1 = (onenumber.value);
    const num2 = (secondnumber.value);
    const result = num1 + num2;
    // ans.value = result;
    ans.innerHTML = result;
})
minus.addEventListener("click", () => { 
    const num1 = (onenumber.value);
    const num2 = (secondnumber.value);
    const result = num1 - num2;
    ans.textContent = result;
    
})
divide.addEventListener("click",  () => {
    const num1 = (onenumber.value);
    const num2 = (secondnumber.value);
    const result = num1 / num2;
    ans.textContent = result;
})
multi.addEventListener("click", () => {
    const num1 = (onenumber.value);
    const num2 = (secondnumber.value);
    const result = num1 * num2;
    ans.textContent = result;
})
