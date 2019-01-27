var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente'); //variavel paciente recebe conteudo do id#primeiro-paciente

for(i = 0; i < pacientes.length; i++){
    
        var paciente = pacientes[i];

        var tdpeso = paciente.querySelector('.info-peso');
        var peso = tdpeso.textContent;

        var tdaltura = paciente.querySelector('.info-altura');
        var altura = tdaltura.textContent;

        var tdimc = paciente.querySelector('.info-imc');

        var pesoEhValido = true;
        var alturaEhValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log('PESO INVALIDO');
        pesoEhValido = false;
        tdpeso.textContent = 'Peso invalido';
        paciente.classList.add('peso-invalido');
    }

    if(altura <= 0 || altura >= 3.00){
        console.log('ALTURA INVALIDA');
        alturaEhValida = false;
        tdaltura.textContent = 'Altura invalida';
        paciente.classList.add('altura-invalida');
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / (altura * altura);
        tdimc.textContent = imc.toFixed(2);//toFixed() é uma funcao para formatar as casas decimais
    }
}






