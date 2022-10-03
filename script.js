$(document).ready(function(){
	$('body').css('background','#aaffff55');
	$('.tabel').css({
		'border-spacing': '1px',
		'margin': '15px',
		'width': '100%',
		'max-width': '600px', 
		'background': 'linear-gradient(#ccffcc88,#ffffcc88)',
	});
	$('.tr').css({
		'color': 'red',
		'padding': '79px',
		'cursor': 'pointer',
		'transition': '.2s', 
	});
	$('.td').mouseenter(function(){
		$(this).css({
		'padding': '5px',
		'cursor': 'pointer',
		'transition': '.2s',
		'background':'linear-gradient(#666,#226666)', 
		});
	});
	$('.td').mouseleave(function(){
		$(this).css({
		'padding': '5px',
		'cursor': 'pointer',
		'transition': '.2s', 
		'background': 'linear-gradient(#ccffcc88,#ffffcc88)',
		});
	});
	
});
// $(document).ready(function(){
// 	$('.td').hover(function(){
// 		$(this).css({
// 			'background':'linear-gradient(#666,#226666)',
// 			'letter-spacing': '1px',
// 		});
// 	});
// });
	
