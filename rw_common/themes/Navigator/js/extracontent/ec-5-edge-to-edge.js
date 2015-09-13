elixir.ecFiveEdgeToEdge = {};
elixir.ecFiveEdgeToEdge = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function ecFiveEdgeToEdgeFunction() {
    $('#extraContent5 > div').removeClass('row').removeClass('width_setting').removeClass('theme_padding');
    $('#extraContent5 > div > div').removeClass('large-12').removeClass('columns');
	}
	
	$(document).ready(function() {
		ecFiveEdgeToEdgeFunction();
	});	

	
})(elixir.ecFiveEdgeToEdge);