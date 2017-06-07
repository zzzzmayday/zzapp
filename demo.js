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
var swiperContent = $('.swiper-slide>.card');
var flag = true;
for(var i=0;i<cardContent.length;i++){
	calHeight(i,flag);
}
// $('.js-list').on('click',function(){
// 	if($('input[name="username"]').val()=='zz' && $('input[name="password"]').val()=='123'){
// 		myApp.closeModal();
// 		mainView.router.load({page: 'index'});
// 	} else {
// 		myApp.alert('wrong!','attention');
// 	}
// }); 

$('.js-add').on('click',function(){
	var i = $(this).parents('.swiper-slide').index();
	$(this).hide();
	$(this).siblings(".add-items").show();
	$(this).siblings(".add-items").find(".add-item").val('');
	flag = false;
	calHeight(i,flag);
});
$('.js-cancel').on('click',function(){
	var i = $(this).parents('.swiper-slide').index();
	$(this).parent(".add-items").hide();
	$(this).parent(".add-items").siblings(".js-add").show();
	flag = true;
	calHeight(i,flag);
});
$('.js-confirm').on('click',function(){
	var addContent = $(this).siblings(".item-input").find(".add-item").val();
	var i = $(this).parents('.swiper-slide').index();
	if(addContent != ""){
		$(this).siblings(".item-input").find(".add-item").val('');
		$(this).parents('.card-footer').siblings('.js-card-content').find('.card-content-inner').append('<div class="card">'+
			'<div class="card-content">'+addContent+'</div>'+
			'</div>');
		calHeight(i,flag);
	}
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

function calHeight(index,flag){
	var maxScreenHeight = screen.height;
	// if(cardContent[index].style.height >=maxScreenHeight*0.92){
		// cardContent[index].style.height = cardContent.parent('.card')[index].height()-cardContent.siblings('.card-header')[index].height()-cardContent.siblings('.card-footer')[index].height()+'px';	
	// } else {
		if(flag == true){
			cardContent[index].style.maxHeight = maxScreenHeight*0.72+'px';
		} else {
			cardContent[index].style.maxHeight = maxScreenHeight*0.65+'px';
		}
		swiperContent[index].style.height = swiperContent.find('.js-card-content')[index].offsetHeight+swiperContent.find('.card-header')[index].offsetHeight+swiperContent.find('.card-footer')[index].offsetHeight+'px';
	// }
}
