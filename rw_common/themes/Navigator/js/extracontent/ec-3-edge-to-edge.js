elixir.ecThreeEdgeToEdge = {};
elixir.ecThreeEdgeToEdge = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function ecThreeEdgeToEdgeFunction() {
    $('#extraContent3 > div').removeClass('row').removeClass('width_setting').removeClass('theme_padding');
    $('#extraContent3 > div > div').removeClass('large-12').removeClass('columns');
	}
	
	$(document).ready(function() {
		ecThreeEdgeToEdgeFunction();
	});	

	
})(elixir.ecThreeEdgeToEdge);