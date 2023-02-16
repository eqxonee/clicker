let h1id = document.getElementById('h1');
let buttonId = document.getElementById('button');
let counter = 0;
let reset = document.getElementById('reset');

buttonId.addEventListener('click',function (){
    counter++;
    h1id.textContent = 'Кликов сделано:' + counter;

});

reset.onclick = function(){
    counter = 0;
    h1id.textContent = 'Кликов сделано: ' + counter;
}