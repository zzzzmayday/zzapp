var $ = Framework7.$;
var myApp = new Framework7();
var mainView = myApp.addView('.view-main',{
	domCache: true
});
var mySwiper = myApp.swiper('.swiper-container', {
			pagination: '.swiper-pagination'
});
var data1 = {
	items:[
	{content:'blahblah'},
	{content:'blahblah'},
	{content:'blahblah'},
	{content:'blahblah'}
	]
};
var data2 = {
	items:[
	{content:'1'},
	{content:'2'},
	{content:'3'},
	{content:'4'}
	]
};
var data3 = {
	items:[
	{content:'a'},
	{content:'b'},
	{content:'c'},
	{content:'d'}
	]
};
var template = $('#cardItem').html();
var compiledTemplate = Template7.compile(template);
var htmlStrCard1 = compiledTemplate(data1);
var htmlStrCard2 = compiledTemplate(data2);
var htmlStrCard3 = compiledTemplate(data3);
$('.card1').find('.card-content-inner').html(htmlStrCard1);
$('.card2').find('.card-content-inner').html(htmlStrCard2);
$('.card3').find('.card-content-inner').html(htmlStrCard3);
var cardContent = $('.js-card-content');
calHeight();
// $('.js-list').on('click',function(){
// 	if($('input[name="username"]').val()=='zz' && $('input[name="password"]').val()=='123'){
// 		myApp.closeModal();
// 		mainView.router.load({page: 'index'});
// 	} else {
// 		myApp.alert('wrong!','attention');
// 	}
// }); 

$('.js-add').on('click',function(){
	$(this).hide();
	$(this).siblings(".add-items").show();
	$(this).siblings(".add-items").find(".add-item").val('');
	calHeight();
});
$('.js-cancel').on('click',function(){
	$(this).parent(".add-items").hide();
	$(this).parent(".add-items").siblings(".js-add").show();
	calHeight();
});
$('.js-confirm').on('click',function(){
	var addContent = $(this).siblings(".item-input").find(".add-item").val();
	$(this).parent(".add-items").hide();
	$(this).parent(".add-items").siblings(".js-add").show();
	$(this).parents('.card-footer').siblings('.js-card-content').find('.card-content-inner').append('<div class="card">'+
    		'<div class="card-content">'+addContent+'</div>'+
    	'</div>');
	calHeight();
});
$('.js-search-icon').on('click',function(){
	$('.left,.js-search-icon,.js-alert-icon').hide();
	$('.js-search').show();
});
$('.js-search-cancel').on('click',function(){
	$('.js-search').hide();
	$('.left,.js-search-icon,.js-alert-icon').show();
});
$('.js-alert-icon').on('click',function(){
	myApp.popup('.popup-alert');
	$('.popup-overlay').hide();
});
$('.js-popup-cancel').on('click',function(){
	myApp.closeModal();
});
$('.js-star').on('click',function(){
	var src = this.src;
	if(src == 'https://zzapp.herokuapp.com/image/star.png'){
		src = 'https://zzapp.herokuapp.com/image/blue-star.png';
	} else {
		src = 'https://zzapp.herokuapp.com/image/star.png';
	}
});
$('.js-setting').on('click',function(){
	myApp.popup('.popup-setting');
	$('.popup-overlay').hide();
});

function calHeight(){
	cardContent[0].style.height = cardContent.parent('.card').height()-cardContent.siblings('.card-header').height()-cardContent.siblings('.card-footer').height()+'px';	
}
