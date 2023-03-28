const plusins = document.querySelector('.js-plus');
const inputins = document.querySelector('.js-input');

console.log(plusins)
console.log(inputins)

const Add = (cipars1, cipars2) => {
return cipars1 + cipars2
}

const subtract = (cipars1, cipars2) => {
    return cipars1 - cipars2
}

const multiply = (cipars1, cipars2) => {
    return cipars1 * cipars2
}

const divide = (cipars1, cipars2) => {
    return cipars1 / cipars2
}

plusins.addEventListener('click', ()=> {
    console.log('mani nospieda')
})