elixir.siteTitleAnimation = {};
elixir.siteTitleAnimation = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function siteTitleAnimationFunction() {
    $('#site_title').addClass('fadeInDown');
    $('#trigger_button').addClass('fadeInDown');
	}

	$(document).ready(function() {
		siteTitleAnimationFunction();
	});	

	
})(elixir.siteTitleAnimation);



