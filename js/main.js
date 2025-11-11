let i = 0
const hero = document.querySelector('.hero');
const imageUrls = [
    'url(./img/hero/hero-background1.png)',
    'url(./img/hero/hero-background2.png)',
    'url(./img/hero/hero-background3.png)'
]

function changeBackground() {
    hero.style.backgroundImage = imageUrls[i];
    i = (i + 1) % imageUrls.length;
}

changeBackground();

setInterval(changeBackground, 3000)