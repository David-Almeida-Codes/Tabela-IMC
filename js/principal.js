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

var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('.form-adiciona');
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

})




