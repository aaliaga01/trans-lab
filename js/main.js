/* Holiii acá va tu código también */

$(document).ready(function(){

		 var mail = $("#user-email").val();
		 var pass = $("#user-pass").val();

    	localStorage.correo = mail;
    	localStorage.cont = pass;

    $("#iniciar-sesion").click(function() {

    	var claveCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    	var clavePass = /^[a-z][a-z]*/;

        if ( claveCorreo.test(localStorage.correo) && clavePass.test(localStorage.cont)) {
             window.location.href = 'menu.html'
        } else {
            alert("Inténtalo nuevamente");
        }
    });

})// ./termina función ready

	