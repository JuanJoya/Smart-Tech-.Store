
var $form = $('#login'),
	$user = $('#user'),
	$pass = $('#pass'),
	$button = $('#mostrar-form');

// Eventos
/*
$button.click( mostrarFormulario );

function mostrarFormulario(){
	$form.slideToggle('fast','linear');
	return false;
}
*/

$button.on('click', function () {
	if($form.width()>500)
	{
		$form.toggleClass('login-expanded');
	}
	else
	{
		$form.toggleClass('login-expanded-2');
	}
    
});
/*
$("#caja1").hover(function () {
    $(this).toggleClass("animated bounceInLeft");
});
*/

$("#Title_1").addClass("animated bounceInLeft");
$("#Title_2").addClass("animated bounceInLeft");