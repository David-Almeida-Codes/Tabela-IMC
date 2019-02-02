var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('.form-adiciona');
    //extraindo informações do form do paciente
    var paciente = obtemPacienteDoForm(form);

    //cria tr e td do paciente
    

    var erros = validaPaciente(paciente);
    if(erros.length > 0){
       mensagemDeErro(erros);
       return;
    }


    adicionaPacienteNaTabela(paciente);
    
    

    form.reset();
    var mensagemErro = document.querySelector('#mensagem-erro');
    mensagemErro.innerHTML = '';
});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}


function mensagemDeErro(erros){
    var ul = document.querySelector('#mensagem-erro');
    innerHTML = '';
    erros.forEach(function (erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}
 
//função que retorna objeto paciente
function obtemPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

   var nomeTd = montaTd(paciente.nome, 'info-nome');
   var pesoTd = montaTd(paciente.peso, 'info-peso');
   var alturaTd = montaTd(paciente.altura, 'info-altura');
   var gorduraTd = montaTd(paciente.gordura, 'info-gordura');
   var imcTd = montaTd(paciente.imc, 'info-imc');

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);


    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push('insira um nome valido');
    }

    if(!validaPeso(paciente.peso)){
        erros.push('Peso invalido');
    }
    if(!validaAltura(paciente.altura)){
        erros.push('Altura é invalida');
    }
    if(paciente.peso.length == 0){
        erros.push('insira um peso valido');
    }
    if(paciente.altura.length == 0){
        erros.push('insira uma atura valida');
    }
    if(paciente.gordura.length == 0){
        erros.push('insira a % de gordura');
    }
    return erros;
}