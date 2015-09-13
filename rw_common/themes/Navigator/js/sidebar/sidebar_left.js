elixir.sidebarLeft = {};
elixir.sidebarLeft = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function sidebarLeftFunction() {
		$('#content_container').addClass('large-push-4 medium-push-4 left_content_container');
		$('#sidebar').addClass('large-pull-8 medium-pull-8 left_sidebar');
	}
	
	$(document).ready(function() {
		sidebarLeftFunction();
	});	
})(elixir.sidebarLeft);

