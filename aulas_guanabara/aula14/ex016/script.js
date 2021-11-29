const btn = document.querySelector('input[type=button]');
btn.addEventListener('click', timestables);

function timestables(){
    const table = document.getElementsByTagName('table')[0];
    let number = Number(document.getElementById('number').value);

    if(number > 100000){
        alert('[ERRO!]Valor máximo permitido: 100000')
        return;
    }

    if(table.childElementCount){
        create_times_table(table);
    }

    const tds = document.getElementsByTagName('td');
    let operators = ['&plus;', '&minus;', '&times;', '&divide;'];
    let result = 0; let o = 0; let n = 1; 
    for(let t of tds){
        switch(o){
            case 0:
                result = number + n;
                break;
            case 1:
                result = number - n;
                break;
            case 2:
                result = number * n;
                break;
            case 3:
                result = number / n;
                result = result.toFixed(2);
                break;      
        }
        t.innerHTML = `${number} <strong>${operators[o]}</strong> ${n} &equals; <span class=res>${result}</span>`;
        o = (o + 1) % 4;
        if(o == 0){
            n = (n + 1) % 11;
        }
    } 
}

function create_times_table(table){

    for(let l = 1; l < 11; l++){
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for(let c = 0; c < 4; c++){
            const td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}
