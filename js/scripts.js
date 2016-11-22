$(document).ready(function(){
	$('#testp').hide();
	$('.btn-more').on('click', function(){
		$('#testp').slideToggle(200);
	});
})