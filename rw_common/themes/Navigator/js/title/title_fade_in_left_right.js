elixir.siteTitleAnimation = {};
elixir.siteTitleAnimation = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function siteTitleAnimationFunction() {
    $('#site_title').addClass('fadeInRight');
    $('#trigger_button').addClass('fadeInLeft');
	}

	$(document).ready(function() {
		siteTitleAnimationFunction();
	});	

	
})(elixir.siteTitleAnimation);



