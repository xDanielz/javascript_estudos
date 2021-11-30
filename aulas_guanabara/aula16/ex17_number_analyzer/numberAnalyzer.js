const add = document.querySelector('input[value=Adicionar]');
const clear = document.querySelector('input[value=Limpar]');
const number_list = document.getElementById('number_list');
const result = document.getElementById('result');
const numb = document.getElementById('num');

add.addEventListener('click', addnumber);
clear.addEventListener('click', clear_list);

var numbers = [];

function addnumber(){
    let num = Number(numb.value);

    if(num < 1 || num > 100){
        alert('[ERRO!] Número apenas entre 0 e 100.');
        return;
    }
    alert(numbers.indexOf(num) != -1);
    if(num in numbers){
        alert(`[ERRO!] Número ${num} Já está na lista.`);
        return;
    }

    numbers.push(num);

    let option = document.createElement('option');
    option.innerHTML = `Número: ${num}`;
    number_list.appendChild(option);

    calcresult();

    numb.value = '';
    numb.focus();
}

function calcresult(){
    let max = numbers[0];
    let min = numbers[0];
    let summation = 0;
    let len = numbers.length;
    for(n of numbers){
        summation += n;
        if(n > max){
            max = n;
            continue;
        }
        if (n < min){
            min = n;
        }
    } 
    let average = summation/len;
    result.innerHTML = `
                        <p>Ao todo, temos ${len} número/s cadastrado/s.</p>
                        <p>O maior valor informado foi ${max}.</p>
                        <p>O menor Valor informado foi ${min}.</p>
                        <p>Somando todos os valores, temos ${summation}.</p>
                        <p>A média dos valores digitados é ${average}.</p>
                        `;
}

function clear_list(){
    numbers = [];
    number_list.innerHTML = '';
    result.innerHTML = '';
}
