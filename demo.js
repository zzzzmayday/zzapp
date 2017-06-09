var $ = Framework7.$;
var myApp = new Framework7();
var mainView = myApp.addView('.view-main',{
	domCache: true
});
var data = {
	lists:[
	{
		listName:"Backlog",
		items:[
		{
			content:'blahblah',
			list:true,
			talk:1,
			img:['./image/bob.jpg','./image/bob2.png']
		},
		{
			content:'blahblah',
			list:false,
			talk:2
		},
		{
			content:'blahblah',
			img:['./image/bob2.png']
		},
		{
			content:'blahblah',
			list:true,
			talk:3
		}
		]
	},
	{
		listName:"Todo",
		items:[
		{content:'1'},
		{content:'2'},
		{content:'3'},
		{content:'4'}
		]
	},
	{
		listName:"Doing",
		items:[
		// {content:'a'},
		// {content:'b'},
		// {content:'c'},
		// {content:'d'}
		]
	}
	]
};
var template = $('#newList').html();
var compiledTemplate = Template7.compile(template);
var htmlStrCard = compiledTemplate(data);
$('.swiper-wrapper').prepend(htmlStrCard);
var mySwiper = myApp.swiper('.swiper-container', {
	pagination: '.swiper-pagination'
});
var flag = true;
for(var i=0;i<$('.js-card-content').length;i++){
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

// add cards
$(document).on('click','.js-add',function(){
	var i = $(this).parents('.swiper-slide').index();
	$(this).hide();
	$(this).siblings(".add-items").show();
	$(this).siblings(".add-items").find(".add-item").val('');
	flag = false;
	calHeight(i,flag);
});
$(document).on('click','.js-cancel',function(){
	var i = $(this).parents('.swiper-slide').index();
	$(this).parent(".add-items").hide();
	$(this).parent(".add-items").siblings(".js-add").show();
	flag = true;
	calHeight(i,flag);
});
$(document).on('click','.js-confirm',function(){
	var addContent = $(this).siblings(".item-input").find(".add-item").val();
	var i = $(this).parents('.swiper-slide').index();
	if(addContent != ""){
		$(this).siblings(".item-input").find(".add-item").val('');
		$(this).parents('.card-footer').siblings('.js-card-content').find('.card-content-inner').append('<div class="card">'+
			'<div class="card-content">'+addContent+'</div>'+
			'</div>');
		calHeight(i,flag);
	} else {
		$(this).parent(".add-items").hide();
		$(this).parent(".add-items").siblings(".js-add").show();
		flag = true;
		calHeight(i,flag);
	}
});

// add lists
$(document).on('click','.js-add-lists',function(){
	$(this).hide();
	$(this).siblings(".add-lists").show();
	$(this).siblings(".add-lists").find(".add-list").val('');
});
$(document).on('click','.js-list-cancel',function(){
	$(this).parent(".add-lists").hide();
	$(this).parent(".add-lists").siblings(".js-add-lists").show();
});
$(document).on('click','.js-list-confirm',function(){
	var i = $(this).parents('.swiper-slide').index();
	var newListName = $(this).siblings(".item-input").find(".add-list").val();
	if(newListName != ""){
		var listTemplate = $('#newListTemplate').html();
		var compiledTemplate = Template7.compile(listTemplate);
		var htmlStrCard = compiledTemplate({newListName:newListName});
		$(this).parents('.swiper-wrapper').append(htmlStrCard);
		$(this).parents('.swiper-wrapper').append('<div class="swiper-slide">'+
			'<div class="card new-list">'+
			'<div class="add-list-button js-add-lists">'+
			'Add List'+
			'</div>'+
			'<div class="add-lists">'+
			'<div class="item-input">'+
			'<input type="text" class="add-list"></input>'+
			'</div>'+
			'<a class="add-cancel-button js-list-cancel">cancel</a>'+
			'<a class="add-confirm-button js-list-confirm">add</a>'+
			'</div>'+
			'</div>'+
			'</div>');
		$(this).parents('.swiper-slide').remove();
		var mySwiper = myApp.swiper('.swiper-container', {
			pagination: '.swiper-pagination'
		});
		calHeight(i,flag);
	} else {
		$(this).parent(".add-lists").hide();
		$(this).parent(".add-lists").siblings(".js-add-lists").show();
	}
});
$(document).on('click','.js-search-icon',function(){
	$('.left,.js-search-icon,.js-alert-icon').hide();
	$('.js-search').show();
});
$(document).on('click','.js-search-cancel',function(){
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
	var cardContent = $('.js-card-content');
	var swiperContent = $('.swiper-slide>.card');
	var maxScreenHeight = screen.height;
	// if(cardContent[index].style.height >=maxScreenHeight*0.92){
		// cardContent[index].style.height = cardContent.parent('.card')[index].height()-cardContent.siblings('.card-header')[index].height()-cardContent.siblings('.card-footer')[index].height()+'px';	
	// } else {
		if(flag == true){
			cardContent[index].style.maxHeight = maxScreenHeight*0.68+'px';
		} else {
			cardContent[index].style.maxHeight = maxScreenHeight*0.60+'px';
		}
		swiperContent[index].style.height = swiperContent.find('.js-card-content')[index].offsetHeight+swiperContent.find('.card-header')[index].offsetHeight+swiperContent.find('.card-footer')[index].offsetHeight+'px';
	// }
}
