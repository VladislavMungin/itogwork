document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-img');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.1) / 8) + 'px,' + ((event.clientY * 0.2) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.2 * window.pageYOffset) + 'px';
})

document.getElementById('main-action').onclick = function(){
    document.getElementById('cars').scrollIntoView({behavior:"smooth"});
}



document.getElementById('price-button').onclick = function(){
    if(document.getElementById('name').value ===''){
        alert("Заполните поле имя");
    }
    else if(document.getElementById('phone').value ===''){
        alert("Заполните поле телефон");
    }
    else if(document.getElementById('car').value ===''){
        alert("Заполните поле машина");
    } else {
        alert("Спасибо за заявку, мы свяжемся с вами чуть похже")
    }
}
});