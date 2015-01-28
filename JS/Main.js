
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

ArticleVendor = ($('.seller-section').width() <= 1533  && $('.seller-section').width() >= 1125) ? 3 : 4;	
$('.seller-section article').slice(ArticleVendor,8).hide();		

//Eventos
$buttonLogin.on('click', function () {
	$formLogin.slideToggle('fast','linear');
	//$formLogin.toggleClass('login-expanded-2');
	return false;
});

$LinkShowMore.on('click', function () {
	$('.seller-section article').slice(ArticleVendor,8).slideToggle('fast','linear');
	flag = (flag) ? false : true;
		if (flag) 
		{
			$(this).removeClass('icon-circle-down');
			$(this).addClass('icon-circle-up');
		}
		else
		{
			$(this).removeClass('icon-circle-up');
			$(this).addClass('icon-circle-down');
		}
	return false;
});


$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });
});


/*
$("#caja1").hover(function () {
    $(this).toggleClass("animated bounceInLeft");
});
*/

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab').on('click', function (e) {
  
  e.preventDefault();
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  target = $(this).children().attr('href');
  $('.tab-content > div').not(target).hide();
  $(target).fadeIn(600);
  
});