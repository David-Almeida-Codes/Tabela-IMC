var botaoAdd = document.querySelector('#buscar-pacientes');

botaoAdd.addEventListener('click', function(){
	console.log('clcado');

	var xhr = new XMLHttpRequest();

	xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener('load', function(){

		if( xhr.status == 200){
			var resp = xhr.responseText;
			console.log(resp);

			var pacientes = JSON.parse(resp);

			pacientes.forEach(function(paciente){
				adicionaPacienteNaTabela(paciente);
			});
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
		}

		

	});
	xhr.send();

});
