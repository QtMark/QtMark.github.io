elixir.ecFourEdgeToEdge = {};
elixir.ecFourEdgeToEdge = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function ecFourEdgeToEdgeFunction() {
    $('#extraContent4 > div').removeClass('row').removeClass('width_setting').removeClass('theme_padding');
    $('#extraContent4 > div > div').removeClass('large-12').removeClass('columns');
	}
	
	$(document).ready(function() {
		ecFourEdgeToEdgeFunction();
	});	

	
})(elixir.ecFourEdgeToEdge);