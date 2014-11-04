
var $form = $('#login'),
	$user = $('#user'),
	$pass = $('#pass'),
	$button = $('#mostrar-form');

// Eventos
$button.click( mostrarFormulario );

function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

/*$("#caja1").hover(function () {
    $(this).toggleClass("animated bounceInLeft");
});*/

$("#caja1").addClass("animated bounceInLeft");