var idade = 30;
var res = '';

console.log(`Você tem ${idade} anos.`);

if(idade <= 15){
    res += 'Não Vota';
}
else if(idade < 18 || idade >= 65){
    res += 'Voto opcional';
}
else{
    res += 'Voto Obrigátorio';
}

console.log(res);