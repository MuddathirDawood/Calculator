let sum = '';
function addNumb(numb){
    document.querySelector('#output').innerHTML += numb;
    sum += numb;
}

function addOp(operator){
    document.querySelector('#output').innerHTML += operator;
    sum += operator;
}

function addDec(decimal) {
    document.querySelector('#output').innerHTML += decimal;
    sum += decimal;
}

function equal(){
    sum = eval(sum)
    document.querySelector('#output').innerHTML = sum;
}

function reset(clear){
    sum = ' ';
    document.querySelector('#output').value = sum;
}