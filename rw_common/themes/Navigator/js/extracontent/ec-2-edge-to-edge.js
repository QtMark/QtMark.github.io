elixir.ecTwoEdgeToEdge = {};
elixir.ecTwoEdgeToEdge = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function ecTwoEdgeToEdgeFunction() {
    $('#extraContent2 > div').removeClass('row').removeClass('width_setting').removeClass('theme_padding');
    $('#extraContent2 > div > div').removeClass('large-12').removeClass('columns');
	}
	
	$(document).ready(function() {
		ecTwoEdgeToEdgeFunction();
	});	

	
})(elixir.ecTwoEdgeToEdge);