const slider = document.querySelector('.slider');
const input = document.querySelector('.input');
const password = document.getElementById('password-text');
const button = document.querySelector('.generator__button');
const numbersCheckbox = document.getElementById('numbersCheckbox');
const symbolCheckbox = document.getElementById('symbolsCheckbox');
const popup = document.querySelector(".popup");


function generateRandomString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if (numbersCheckbox.checked) characters += '0123456789';
    
    if (symbolCheckbox.checked) characters += `!"#$%&()*+,-./:;<=>?@[]^_{|}~`;
    
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    
    return result;
}


slider.addEventListener('input', () => {
    input.value = slider.value;
});

input.addEventListener('input', () => {
    let value = parseInt(input.value, 10);

    if (Number.isNaN(value)) value = '';
    if (value < 1) value = '';
    if (value > 50) value = 50;

    input.value = value;
    slider.value = value;
});


button.addEventListener('click', function () {
    password.textContent = generateRandomString(input.value)
    const length = parseInt(input.value, 10);

    if (input.value > 40) {
        password.style.fontSize = '14px';
    } else if (input.value > 30) {
        password.style.fontSize = '16px';
    } else if (input.value > 20) {
        password.style.fontSize = '22px';
    } else {
        password.style.fontSize = '27px';
    }
})

password.addEventListener('click', (event) => {
    const textToCopy = password.textContent;
    navigator.clipboard.writeText(textToCopy);

    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 1500);


});