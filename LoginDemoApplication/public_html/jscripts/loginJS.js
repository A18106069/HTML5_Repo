$(document).ready(function(){//se activa cuando la pag este lista
    $("#login").click(function(){
        
        var user = $("#user").val();
        var clave = $("#clave").val();
        //verificadno campos vacios
        if(user=='' || clave ==''){
            alert("Por favor complete los campos.. !!!!!");
            return false;
        }
        
        
        if(clave.length > 5){
            alert("Tamaño maximo permitido es 5 caracteres");
            return false;
        }
    });
    
});


