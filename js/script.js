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