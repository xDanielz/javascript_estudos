let fundo_página = document.querySelector('body');
let element_hora = document.getElementById('hora'); 
let imagemdodia = document.getElementById('paisagem_agora');
let hora_atual = new Date().getHours();
element_hora.innerHTML = `<strong>${hora_atual}</strong> Horas`;

hora_atual = Number.parseInt(hora_atual);
let new_src_imagem = 'imagens/';
let new_bck_color = '#';

if(hora_atual >= 12 && hora_atual < 19){
    new_src_imagem += 'tarde.jpg';
    new_bck_color += 'BF2604';
}
else if(hora_atual >= 6 && hora_atual < 12){
    new_src_imagem += 'dia.jpg';
    new_bck_color += '809DF2';
}
else{
    new_src_imagem += 'noite.jpg';
    new_bck_color += '142559';
}
imagemdodia.setAttribute('src', new_src_imagem);
fundo_página.style.backgroundColor = new_bck_color;
