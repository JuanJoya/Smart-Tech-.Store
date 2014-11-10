
var $form = $('#login'),
	$user = $('#user'),
	$pass = $('#pass'),
	$button = $('#mostrar-form'),
	$Title = $(".Title_1");

//Animate.css
$Title.addClass("animated bounceInLeft");
/*
$("#caja1").hover(function () {
    $(this).toggleClass("animated bounceInLeft");
});
*/
//Eventos
$button.on('click', function () {

	$form.slideToggle('fast','linear');
	//$form.toggleClass('login-expanded-2');
	return false;
	
});