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

        var pesoEhValido = validaPeso(peso);
        var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        console.log('PESO INVALIDO');
        pesoEhValido = false;
        tdpeso.textContent = 'Peso invalido';
        paciente.classList.add('peso-invalido');
    }

    if(!alturaEhValida){
        console.log('ALTURA INVALIDA');
        alturaEhValida = false;
        tdaltura.textContent = 'Altura invalida';
        paciente.classList.add('altura-invalida');
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        tdimc.textContent = imc;//toFixed() é uma funcao para formatar as casas decimais
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;    
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);
    return imc.toFixed(2);
}






