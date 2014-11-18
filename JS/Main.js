
var $formLogin = $('#login'),
	$user = $('#user'),
	$pass = $('#pass'),
	$buttonLogin = $('#show-login'),
	$buttonSignUp = $('#show-signup'),
	$LinkShowMore = $('#showMore'),
	$Title = $(".Title_1"),
	flag = false
	ArticleVendor = 0;

//Animate.css
$Title.addClass("animated bounceInLeft");

ArticleVendor = ($('.vendedores').width() <= 1533  && $('.vendedores').width() >= 1125) ? 3 : 4;	
$('.vendedores article').slice(ArticleVendor,8).hide();		

//Eventos
$buttonLogin.on('click', function () {
	$formLogin.slideToggle('fast','linear');
	//$formLogin.toggleClass('login-expanded-2');
	return false;
});

$LinkShowMore.on('click', function () {
	$('.vendedores article').slice(ArticleVendor,8).slideToggle('fast','linear');
	status = (flag) ? 'Ver Mas' : 'Ver Menos';
	flag = (flag) ? false : true;
	$(this).text(status);
	return false;
});

/*
$("#caja1").hover(function () {
    $(this).toggleClass("animated bounceInLeft");
});
*/