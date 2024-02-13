let yesBtn = document.getElementById('yes');
let noBtn = document.getElementById('no');
let btnBlock = document.getElementById('btnBlock');
let text = document.getElementById('text');
let image = document.getElementById('image');

let fontSize = window.getComputedStyle(yesBtn).fontSize;

noBtn.addEventListener('click', function() {
    fontSize = yesBtn.style.fontSize = parseInt(fontSize) + 30 + "px";
    console.log(fontSize);
});

yesBtn.addEventListener('click', function() {
    btnBlock.style.display = "none";
    image.src = 'yehey.gif'
    text.textContent = 'Yeeesssssssss! What time?'
});