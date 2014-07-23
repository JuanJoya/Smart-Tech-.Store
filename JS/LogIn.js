
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
