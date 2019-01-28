var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('.form-adiciona');
    //extraindo informações do form do paciente
    var paciente = obtemPacienteDoForm(form);

    //cria tr e td do paciente
    var pacienteTr = montaTr(paciente);

    
    //add paciente na tabela 
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

    form.reset();
});
 
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
    paciente.classList.add('paciente');

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