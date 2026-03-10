let text = document.querySelector('.input-textarea')
let symbols = document.querySelector('.symbols')
let specSymbols = document.querySelector('.spec-symbols')
let nums = document.querySelector('.nums')

text.addEventListener('input', function () {
    symbols.textContent = text.value.length;
    specSymbols.textContent = (text.value.match(/[^a-zA-Z0-9а-яА-ЯёЁ\s]/g) || []).length;
    nums.textContent = (text.value.match(/[0-9\s]/g) || []).length;
})