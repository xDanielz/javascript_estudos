const btn = document.querySelector('input[value=Verificar]');
btn.onclick = function(){
    
    let ano_atual = new Date().getFullYear();
    ano_atual = Number.parseInt(ano_atual)
    const genero = document.getElementById('genero_res');
    const element_idade = document.getElementById('idade_res');
    const image = document.querySelector('img[alt=pessoa]');
    
    let ano_nascimento = document.getElementById('anonasc');
    ano_nascimento = Number.parseInt(ano_nascimento.value)
    const sexos = document.querySelectorAll('input[name=genero]');
    let valorSelecionado;
    for (const s of sexos){
        if(s.checked){
            valorSelecionado = s.value;
            break;
        }
    }
        if(Boolean(ano_nascimento && valorSelecionado)){
            if(ano_nascimento > 1900 && ano_nascimento <= ano_atual){
                document.getElementById('aviso').style.display = 'none';
                document.getElementById('pessoa').style.display = 'block';
                let idade =  ano_atual - ano_nascimento;
                element_idade.innerText = idade;
                switch(valorSelecionado){
                    case 'f':
                        genero.innerText = 'Mulher ';
                        break;

                    case 'm':
                        genero.innerText = 'Homem ';
                        break;
                }
                let faixa_etaria;
                if(idade > 30){
                    faixa_etaria = 'idoso';
                }
                else if(idade > 18){
                    faixa_etaria = 'adulto';
                }
                else{
                    faixa_etaria = 'crianca';
                }
                image.setAttribute('src', `imagens/${valorSelecionado}_${faixa_etaria}.jpg`);
                return;   
            }
        }
        alert('[ERRO] Verifique os dados e tente novamente!');
    }
//btn.addEventListener('click', analise_idade); outra maneira sem usar função anonima.