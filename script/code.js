function addNumb(numb){
    document.querySelector('#output').innerHTML += numb;
}

function addOp(operator){
    document.querySelector('#output').innerHTML += operator;
}

function addDec(decimal) {
    document.querySelector('#output').innerHTML += decimal;
}

function equal(){
    document.querySelector('#output').innerHTML = eval(document.querySelector('#output').innerHTML);
}

// function reset(clear){
//     document.querySelector('#output').value = ' ';
// }