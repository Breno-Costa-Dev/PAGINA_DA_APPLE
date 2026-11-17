var btn01 = document.querySelector('#one');
var btn02 = document.querySelector('#two');
var btn03 = document.querySelector('#three');
var btn04 = document.querySelector('#for');
var btn05 = document.querySelector('#five');

var imagemiphone = document.querySelector('.iphone-image');

btn01.addEventListener('click',iphoneverde);
btn02.addEventListener('click',iphoneprata);
btn03.addEventListener('click',iphonedourado);
btn04.addEventListener('click',iphonegrafite);
btn05.addEventListener('click',iphoneazul);

function iphoneverde(){
    imagemiphone.style.backgroundImage = 'url(img/iphone_green.jpg)';
    btn01.style.border = '5px solid #3056ff';
    btn02.style.border = '5px solid #ffffff';
    btn03.style.border = '5px solid #ffffff';
    btn04.style.border = '5px solid #ffffff';
    btn05.style.border = '5px solid #ffffff';
}
function iphoneprata(){
    imagemiphone.style.backgroundImage = 'url(img/iphone_silver.jpg)';
    btn02.style.border = '5px solid #3056ff';
    btn01.style.border = '5px solid #ffffff';
    btn03.style.border = '5px solid #ffffff';
    btn04.style.border = '5px solid #ffffff';
    btn05.style.border = '5px solid #ffffff';
}
function iphonedourado(){
    imagemiphone.style.backgroundImage = 'url(img/iphone_golden.jpg)';
    btn03.style.border = '5px solid #3056ff';
    btn01.style.border = '5px solid #ffffff';
    btn02.style.border = '5px solid #ffffff';
    btn04.style.border = '5px solid #ffffff';
    btn05.style.border = '5px solid #ffffff';
}
function iphonegrafite(){
    imagemiphone.style.backgroundImage = 'url(img/iphone_grafite.jpg)';
    btn04.style.border = '5px solid #3056ff';
    btn01.style.border = '5px solid #ffffff';
    btn02.style.border = '5px solid #ffffff';
    btn03.style.border = '5px solid #ffffff';
    btn05.style.border = '5px solid #ffffff';
}
function iphoneazul(){
    imagemiphone.style.backgroundImage = 'url(img/iphone_blue.jpg)';
    btn05.style.border = '5px solid #3056ff';
    btn01.style.border = '5px solid #ffffff';
    btn02.style.border = '5px solid #ffffff';
    btn03.style.border = '5px solid #ffffff';
    btn04.style.border = '5px solid #ffffff';
}