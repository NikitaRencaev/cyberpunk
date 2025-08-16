$(function() {
    let i = 0
    const hero = $('.hero');
    const imageUrls = [
        'url(./img/hero/hero-background1.png)',
        'url(./img/hero/hero-background2.png)',
        'url(./img/hero/hero-background3.png)'
    ]

    function changeBackground() {
        hero.css('background-image', imageUrls[i])
        i = (i + 1) % imageUrls.length;
    }

    setInterval(changeBackground, 3000)

    changeBackground();
});