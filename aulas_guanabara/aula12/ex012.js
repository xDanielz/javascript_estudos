var agora = new Date();
var hora = agora.getHours();
var res = '';

if(hora >= 6 && hora < 12){
res = 'Bom dia';
}
else if(hora >= 12 && hora < 18){
    res = 'Boa tarde';
}
else if(hora > 23){
    res = 'Horario ínvalido'
}
else{
    res = 'Boa noite';
}

console.log(res);
