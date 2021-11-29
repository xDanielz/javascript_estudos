function count(){
    const result = document.getElementById('result');
    const begin = document.getElementById('begin').value;
    const end = document.getElementById('end').value;
    let step = Number(document.getElementById('step').value);
    let res = '';
    
    if(!(begin && end)){
        result.innerHTML = 'Ímpossivel contar!';
        return;
    }

    if(step < 0){
        step = step * -1;
    }
    else if(!step){
        alert('Passo ínvalido. Considerando passo 1')
        step = 1;
    }

    let i = Number(begin);
    let e = Number(end);

    while(true){
        res += i;
        if(begin < e){
            i += step;
            if(i >= e + step){
                break;
            }
        }
        else{
            i -= step;
            if(i <= e - step){
                break;
            }
        }
        if(!(i + step >= e +  step * 2) || !(i - step <= e - step * 2)){
            res += '&#x1F449;'
        }
    }

    result.innerHTML = res;
}
