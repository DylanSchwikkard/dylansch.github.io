$(document).ready(function(){
	$( "#skill-link" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $('#Skills').offset().top },500);
    });
    
    $( "#profile-link" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $('#Profile').offset().top }, 500);
	});
});