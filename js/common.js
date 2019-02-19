$(document).ready(function(){
	$('#menu').click(function() {
		if($('#menu').hasClass('active')) {
            $('#nav').removeClass('response');
            $('#menu').removeClass('active');
		}
		else {
            $('#nav').addClass('response');
            $('#menu').addClass('active');
		}
	});
})
