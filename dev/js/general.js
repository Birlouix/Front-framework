/**
 * 
 */

"use strict";
var yolo ="";
$(document).ready(function() {
	$('.card-grid.aliments li').on('click',function(){$(this).toggleClass('active')}); 

	$('.next-card-link').on('click',function(){
		var card = $('.card-container .card.active').index();
		$('.card-container .card.active').removeClass('active').addClass('validated');
		setTimeout( function(){
	    	$('.card-container .card.validated').css('display','none');
        },800);
		$('.card-container .card:eq('+(card+1)+')').addClass('active');
	});

	$('.aliments-list .close-button').on('click',function(){
		$(this).parent().hide();
	});
});	