// Slick Nav
jQuery(document).ready(function($){
	$('.sf-menu').slicknav({
		prependTo:'.sf-responsive'
	});
});

// Flex Slider
jQuery(document).ready(function($) {
  $('.flexslider').flexslider({
    animation: "slide",
	controlNav: false,
	pauseOnHover: true,
	animationLoop: true,
	slideshowSpeed: 2000,
	animationSpeed: 200
  });
});

// Easy Tabs
jQuery(document).ready(function($) {
	$('#tab-container').easytabs();
});

// Cute Slider
var slider = new Cute.Slider();
slider.setup("slider" , "wrapper");

// Fit Vids
jQuery(document).ready(function($) {
    $(".single-video").fitVids();
});

jQuery(document).ready(function($) {
    $(".video-iframe").fitVids();
});

jQuery(document).ready(function($) {
    $(".textwidget").fitVids();
});