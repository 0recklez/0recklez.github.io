
let button = document.getElementById('button')
let colorText = document.getElementById('colorText')
const box = document.getElementById('colorBox');
const style = window.getComputedStyle(box);



function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener('click', function () {
    box.style.backgroundColor = getRandomColor();
    colorText.textContent = box.style.backgroundColor;
})

colorText.addEventListener('click', (event) => {
    const textToCopy = colorText.textContent;
    navigator.clipboard.writeText(textToCopy);
    colorText.textContent = '✓ скопировано';
});
