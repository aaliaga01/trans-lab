/* Holiii acá va tu código también */

$(document).ready(function(){

    $("#iniciar-sesion").click(function() {

    	//toma los datos ingresados
    	var mail = $("#user-mail").val();
    	var pass = $("#user-pass").val();

    	//los guarda en locastorage
    	localStorage.correo = mail;
    	localStorage.cont = pass;

    	//validaciones 
    	var claveCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    	var clavePass = /^([0-9])*$/;
		
		//condicion que revisa las validaciones para poder logearse y ver el menu
        if (claveCorreo.test(mail) && clavePass.test(pass) && pass.length == 8){
             window.location.href = 'menu.html'
        } else {
            alert("Debes completar todos los campos");
        }

    });

	//-------- Mostrar email del usuario/
		
    	var eMail = localStorage.getItem("correo");      
    	$("#usuario-email span").text(eMail);


	//-------- ingresar y mostrar Nº BIP/
	$(".ag-tarjeta").click(function() {

	   	var miBip = $("#num-tarjeta").val();
    	localStorage.numBip = miBip;

    	var bip = localStorage.getItem("numBip");      
    	$(".datos-perfil").append("<p id='lista-bip'>" + bip + "</p>");
    });

})// ./termina función ready             

