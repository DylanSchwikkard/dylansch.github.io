$(document).ready(function(){
	$( "#skill-link" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: ($('#Skills').offset().top-59) },500);
    });
    
    $( "#profile-link" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $('#Profile').offset().top }, 500);
	});
	$( "#edu-link" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: ($('#Education').offset().top-59) }, 500);
	});
	$('.navbar-nav>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

});