var pacientes = document.querySelectorAll('.paciente');

    pacientes.forEach(function(pacientes){
        pacientes.addEventListener('dblclick', function(){
            this.remove();
        });
    });