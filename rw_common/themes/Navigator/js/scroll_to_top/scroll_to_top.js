elixir.scrollToTopEffect = {};
elixir.scrollToTopEffect = (function() {
    var jQuery = elixir.jQuery;
    var $ = jQuery;
	var $elixir = jQuery.noConflict();

	function scrollToTopEffectFunction() {

        // Scroll to top behavior
        $('#scrollToTopButton').click(function() {

          $('.st-content').animate({ scrollTop: 0 }, 600);

        });

        // Get the headers position from the top of the page, plus its own height
        var startY = 300;

        $('.st-content').scroll(function(){
            checkY();
        });

        function checkY(){
            if( $('.st-content').scrollTop() > startY ){
                $('#scrollToTopButton').fadeIn(300);
            } else {
                $('#scrollToTopButton').fadeOut(300);
            }
        }

        // Do this on load just in case the user starts half way down the page
        checkY();

	}
	
	$(document).ready(function() {
		scrollToTopEffectFunction();
	});	
	
})(elixir.scrollToTopEffect);