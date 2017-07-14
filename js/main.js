/* Holiii acá va tu código también */

$(document).ready(function(){

    $("#iniciar-sesion").click(function() {
    	var mail = $("#user-mail").val();
    	var pass = $("#user-pass").val();

    	localStorage.correo = mail;
    	localStorage.cont = pass;

    	var claveCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    	var clavePass = /^([0-9])*$/;
		
        if (claveCorreo.test(mail) && clavePass.test(pass) && pass.length == 8){
             window.location.href = 'menu.html'
        } else {
            alert("Debes completar todos los campos");
        }
    });

})// ./termina función ready

	