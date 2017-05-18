var $ = Framework7.$;
var myApp = new Framework7();
var mainView = myApp.addView('.view-main',{
	domCache: true
});
var mySwiper = myApp.swiper('.swiper-container', {
			pagination: '.swiper-pagination'
});
var data = {
	items:[
	{content:'blahblah'},
	{content:'blahblah'},
	{content:'blahblah'},
	{content:'blahblah'}
	]
};
var template = $('#cardItem').html();
var compiledTemplate = Template7.compile(template);
var htmlStr = compiledTemplate(data);
$('.card-content-inner').html(htmlStr);

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
});
$('.js-cancel').on('click',function(){
	$(this).parent(".add-items").hide();
	$(this).parent(".add-items").siblings(".js-add").show();
});
$('.js-confirm').on('click',function(){
	var addContent = $(this).siblings(".item-input").find(".add-item").val();
	$(this).parent(".add-items").hide();
	$(this).parent(".add-items").siblings(".js-add").show();
	$('.card-content-inner').append('<div class="card">'+
    		'<div class="card-content">'+addContent+'</div>'+
    	'</div>');
});
