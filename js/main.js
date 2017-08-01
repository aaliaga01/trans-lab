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

	   	var miBip = $("#num-tarjeta").val(); //toma el valor del input
    	localStorage.numBip = miBip; //lo guarda en localStorage
    	var bip = localStorage.getItem("numBip"); 
    	$(".datos-perfil").append("<p id='lista-bip'>" + bip + "</p>");
      });

});// ./termina función ready             

//---------- AJAX
$(document).ready (function(){

	$("#ver-saldo").click(function() {

		// toma el numero de tarjeta introducido en input
			var tarjeta = $("#num-bip").val();

		$.ajax( {
		url: "http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip="+ tarjeta, //se pasa la variable que contiene el llamado a la API + el numero de bip
		type: 'GET',
		dataType: 'JSON',
		})
		.done(function(response) {
			console.log("success2");// para ver si funciona

			//escribe en el ID el valor correspondiente desde la API
			$("#total").text(response.saldoTarjeta);
			
			var saldoOb = response.saldoTarjeta;
			console.log("saldo", saldoOb);//prueba, para ver si llama el saldo de la tarjeta

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	})
});
