import './style.css'


const matricula = document.querySelector('#matricula');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#button')

botao.addEventListener('click', function(e) {
    if(matricula.value ==''){{
        console.log('Matricula é obrigatoria');
        return;
    }}
});