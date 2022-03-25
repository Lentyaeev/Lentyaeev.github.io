'use strict';
let i = 1;
let check = true;
window.addEventListener('DOMContentLoaded', () =>{
const circle = document.querySelector("#circle");
circle.addEventListener('touchstart', (event) =>{
    event.preventDefault();
    update();
    check = true;
});
circle.addEventListener('touchend', (event) =>{
    event.preventDefault();
    check = false;
});
function update(){
    var i = document.getElementById('circle').clientWidth;
    let timerId = setInterval(function tick(){
        if(check == true){circle.style.width = i + "px"; 
        i++;
    }
        else {clearInterval(timerId);}
    }, 10);

}
});
