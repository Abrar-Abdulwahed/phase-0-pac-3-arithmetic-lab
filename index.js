function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}
function increment(num){
    return ++num;
}
function decrement(num){
    return --num;
}
function makeInt(n, radix=10){
    return parseInt(n, radix);
}
function preserveDecimal(n){
    return parseFloat(n);
}