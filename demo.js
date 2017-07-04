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
		{content:'a'},
		{content:'b'},
		{content:'c'},
		{content:'d'}
		]
	}
	]
};
var alertTabData1 = {
	lists:[
	{
		img:'./image/bob.jpg',
		name:'Aa',
		cardName:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		board:'index',
		content:'Display the alert information.Display the alert information.Display the alert information',
		time:'yesterday at 00:00'
	},
	{
		img:'./image/bob2.png',
		name:'Bb',
		cardName:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
		board:'index',
		content:'Display the alert information',
		time:'yesterday at 10:00'
	},
	{
		img:'./image/bob2.png',
		name:'Cc',
		cardName:'ccccccccccccccccccccccccccccccccccccccccccccccccc',
		board:'index',
		content:'Display the alert information',
		time:'2 days ago at 00:00'
	},
	{
		img:'./image/bob2.png',
		name:'Dd',
		cardName:'ddddddddddddddddddddddddddddddddddd',
		board:'index',
		content:'Display the alert information',
		time:'3 days ago at 03:00'
	},
	{
		img:'./image/bob2.png',
		name:'Ee',
		cardName:'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
		board:'index',
		content:'Display the alert information',
		time:'4 days ago at 07:00'
	}
	]
};
var alertTabData2 = {
	lists:[
	{
		img:'./image/bob.jpg',
		name:'Aa',
		cardName:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
		board:'index',
		content:'Display the alert information.Display the alert information.Display the alert information',
		time:'yesterday at 00:00'
	},
	{
		img:'./image/bob2.png',
		name:'Bb',
		cardName:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
		board:'index',
		content:'Display the alert information',
		time:'yesterday at 10:00'
	},
	]
};
var alertTabData3 = {
	lists:[
	{
		img:'./image/bob2.png',
		name:'Bb',
		cardName:'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
		board:'index',
		content:'Display the alert information',
		time:'yesterday at 10:00'
	},
	{
		img:'./image/bob2.png',
		name:'Cc',
		cardName:'ccccccccccccccccccccccccccccccccccccccccccccccccc',
		board:'index',
		content:'Display the alert information',
		time:'2 days ago at 00:00'
	}
	]
}
var template = $('#newList').html();
var compiledTemplate = Template7.compile(template);
var htmlStrCard = compiledTemplate(data);
$('.swiper-wrapper').prepend(htmlStrCard);
var mySwiper = myApp.swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 10
});
var flag = true;
for(var i=0;i<$('.js-card-content').length;i++){
	calHeight(i,flag);
}
var activityTemplate = $('#activityTemplate').html();
var compiledActivityTemplate = Template7.compile(activityTemplate);
var htmlStrActivity = compiledActivityTemplate(alertTabData1);
$('.activity-content').html(htmlStrActivity);
var cardActivityTemplate = $('#cardActivityTemplate').html();
var compiledCardActivityTemplate = Template7.compile(cardActivityTemplate);
var htmlCardActivity = compiledCardActivityTemplate(alertTabData1);
$('.card-activity-list').html(htmlCardActivity);
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
		mySwiper.updateSlidesSize();
		mySwiper.updatePagination();
		mySwiper.slideTo(mySwiper.slides.length-2);
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
	var alertTemplate = $('#alertTemplate').html();
	var compiledTemplate = Template7.compile(alertTemplate);
	var tab1 = compiledTemplate(alertTabData1);
	var tab2 = compiledTemplate(alertTabData2);
	var tab3 = compiledTemplate(alertTabData3);
	$('#tab1').html(tab1);
	$('#tab2').html(tab2);
	$('#tab3').html(tab3);
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
$(document).on('click','.js-card-content .card',function(){
	myApp.popup('.popup-card-content');
	$('.popup-overlay').hide();
})
$('.js-setting').on('click',function(){
	myApp.popup('.popup-setting');
	$('.popup-overlay').hide();
});
$('.js-power-up').on('click',function(){
	myApp.popup('.popup-power-up');
	$('.popup-overlay').hide();
});
$('.panel-body').on('scroll',function(){
	var top = $(this).scrollTop();
	var memberTitle = $('.member-title');
	var activityTitle = $('.activity-title');
	var memberBlockHeight = $('.member-block')[0].offsetHeight - 7;
	var otherBlockHeight = 46 + $('.member-block')[0].offsetHeight + $('.power-up-block')[0].offsetHeight;
	if(top<=memberBlockHeight) {
		memberTitle[0].style.top = top +'px';
	} else {
		memberTitle[0].style.top = memberBlockHeight +'px';
	}
	if(top>=otherBlockHeight) {
		activityTitle[0].style.top = top +'px';
	} else {
		activityTitle[0].style.top = otherBlockHeight +'px';
	}
});
$('.scroll-part').on('scroll',function(){
	var top = $(this).scrollTop();
	var cardTitle = $('.card-title').text();
	var headerHeight = $('.popup-header')[0].offsetHeight;
	var otherBlockHeight = $('.popup-header')[0].offsetHeight + $('.card-description')[0].offsetHeight; 
	if(top >= headerHeight){
		$('.card-name').text(cardTitle);
	} else {
		$('.card-name').text('');
	}
	if(top >= otherBlockHeight){
		$('.card-activity-title')[0].style.top = top + 'px';
	} else {
		$('.card-activity-title')[0].style.top = otherBlockHeight + 'px';
	}
});
$(document).on('click','.js-activity-setting',function(){
	var buttons1 = [
	{
		text: 'Show All Activity',
	},
	{
		text: 'Show Only Comments',
	}
	];
	var buttons2 = [
	{
		text: 'Cancel',
		bold: true
	}
	];
	var groups = [buttons1, buttons2];
	myApp.actions(groups);
});
$(document).on('click','.js-add-image',function(){
	var buttons1 = [
	{
		text: 'Upload Attachment',
		label: true
	},
	{
		text: 'Use Last Photo',
	},
	{
		text: 'Take Photo',
	},
	{
		text: 'Choose From Library',
	}
	];
	var buttons2 = [
	{
		text: 'Cancel',
		bold: true
	}
	];
	var groups = [buttons1, buttons2];
	myApp.actions(groups);
});
$(document).on('click','.js-add-comment',function(){
	var buttons1 = [
	{
		text: '<img class="add-member-icon add-comment-icon" src="./image/images/add-member.png"></img>Members',
		color: 'black',
		bold: true
	},
	{
		text: '<img class="add-tag-icon add-comment-icon" src="./image/images/add-tag.png"></img>Labels',
		color: 'black',
		bold: true
	},
	{
		text: '<img class="add-time-icon add-comment-icon" src="./image/images/add-time.png"></img>Due Date',
		color: 'black',
		bold: true
	},
	{
		text: '<img class="add-attachment-icon add-comment-icon" src="./image/images/add-attachment.png"></img>Attachment',
		color: 'black',
		bold: true
	},
	{
		text: '<img class="add-list-icon add-comment-icon" src="./image/images/add-list.png"></img>Checklist',
		color: 'black',
		bold: true
	}
	];
	var buttons2 = [
	{
		text: '<img class="add-cancel-icon add-comment-icon" src="./image/images/add-cancel.png"></img>Cancel',
		color: 'red',
		bold: true
	}
	];
	var groups = [buttons1, buttons2];
	myApp.actions(groups);
	$('.actions-modal').addClass('add-comment-action');
});
$(document).on('click','.js-card-ellipsis-icon',function(){
	var cardName = $('.card-title').text();
	var buttons1 = [
	{
		text: cardName,
		label: true
	},
	{
		text: 'Move Card...',
	},
	{
		text: 'Duplicate Card',
	},
	{
		text: 'Copy Link',
	},
	{
		text: 'Subsribe',
	},
	{
		text: 'Archive Card',
	},
	{
		text: 'Send Feedback...',
	},
	{
		text: 'Delete Card',
		color: 'red'
	}
	];
	var buttons2 = [
	{
		text: 'Cancel',
		bold: true
	}
	];
	var groups = [buttons1, buttons2];
	myApp.actions(groups);
});
$(document).on('touchstart','.actions-modal-button',function(){
	$(this).addClass('bg-gray');
});
$(document).on('touchend','.actions-modal-button',function(){
	$(this).removeClass('bg-gray');
});
$(document).on('click','.subscribe-radio',function(){
	var radio = $(this).find('input[name="my-radio"]');
	if(radio.siblings().hasClass('item-inner')){
		radio.siblings().removeClass('item-inner');
	} else {
		radio.siblings().addClass('item-inner');
	}
});


function calHeight(index,flag){
	var cardContent = $('.js-card-content');
	var swiperContent = $('.swiper-slide>.card');
	var maxScreenHeight = document.body.clientHeight;
	if(flag == true){
		cardContent[index].style.maxHeight = maxScreenHeight*0.64+'px';
	} else {
		cardContent[index].style.maxHeight = maxScreenHeight*0.54+'px';
	}
	swiperContent[index].style.height = swiperContent.find('.js-card-content')[index].offsetHeight+swiperContent.find('.card-header')[index].offsetHeight+swiperContent.find('.card-footer')[index].offsetHeight+'px';
}

// var block = $(".card");
  var oW,oH;
  // 绑定touchstart事件
  $(".card").on("touchstart", function(e) {
  	var block = $(this);
   console.log(e);
   var touches = e.touches[0];
   oW = touches.clientX - block.offsetLeft;
   oH = touches.clientY - block.offsetTop;
   //阻止页面的滑动默认事件
   // document.on("touchmove",defaultEvent,false);
  },false)
 
  $(".card").on("touchmove", function(e) {
  	var block = $(this);
   var touches = e.touches[0];
   var oLeft = touches.clientX - oW;
   var oTop = touches.clientY - oH;
   if(oLeft < 0) {
    oLeft = 0;
   }else if(oLeft > document.documentElement.clientWidth - block.offsetWidth) {
    oLeft = (document.documentElement.clientWidth - block.offsetWidth);
   }
   block.style.left = oLeft + "px";
   block.style.top = oTop + "px";
  },false);
   
  $(".card").on("touchend",function() {
   // document.off("touchmove",defaultEvent,false);
  },false);
  function defaultEvent(e) {
   e.preventDefault();
  }