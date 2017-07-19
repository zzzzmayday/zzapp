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
			img:[
			{imgSrc:'./image/bob.jpg',id:1},
			{imgSrc:'./image/bob2.png',id:2}
			],
			description:'Just have a try'
		},
		{
			content:'blahblah',
			list:false,
			talk:2
		},
		{
			content:'blahblah',
			img:[{imgSrc:'./image/bob2.png',id:2}]
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
		img:'./image/bob3.jpg',
		name:'Cc',
		cardName:'ccccccccccccccccccccccccccccccccccccccccccccccccc',
		board:'index',
		content:'Display the alert information',
		time:'2 days ago at 00:00'
	},
	{
		img:'./image/bob4.jpg',
		name:'Dd',
		cardName:'ddddddddddddddddddddddddddddddddddd',
		board:'index',
		content:'Display the alert information',
		time:'3 days ago at 03:00'
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
		img:'./image/bob3.jpg',
		name:'Cc',
		cardName:'ccccccccccccccccccccccccccccccccccccccccccccccccc',
		board:'index',
		content:'Display the alert information',
		time:'2 days ago at 00:00'
	}
	]
}
var members = {
	member:[
	{
		name:'Aa',
		img:'./image/bob.jpg',
		id:1
	},
	{
		name:'Bb',
		img:'./image/bob2.png',
		id:2
	},
	{
		name:'Cc',
		img:'./image/bob3.jpg',
		id:3
	},
	{
		name:'Dd',
		img:'./image/bob4.jpg',
		id:4
	},
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
	$(this).siblings(".add-items").find(".add-item").val('').focus();
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
			'<div class="card-content">'+
			'<div class="content-card-title">'+addContent+'</div>'+
			'</div>'+
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
	var domain = window.location.host;
	if($(this).hasClass('white-star')){
		$(this).attr('src','http://'+ domain + '/image/images/blue-star.png');
		$(this).removeClass('white-star');
	} else {
		$(this).attr('src','http://'+ domain + '/image/images/star.png');
		$(this).addClass('white-star');
	}
});
$(document).on('click','.js-card-content .card',function(){
	var cardTitle = $(this).find('.content-card-title').text();
	var cardPlace = $(this).parents('.card-content').siblings('.card-header').find('.list-name').text();
	var headImg = $(this).find('.head-img');
	var memberId = $(this).find('.img-id');
	var showMemberArray = [];
	var swiperIndex = $(this).parents('.swiper-slide').index();
	var cardIndex = $(this).index();
	var cardDescription = $(this).find('.card-description-not-display').val();
	myApp.popup('.popup-card-content');
	$('.swiper-index').val(swiperIndex);
	$('.card-index').val(cardIndex);
	// $('.popup-overlay').hide();
	$('.card-member-img-list').html('');
	if(cardDescription){
		$('.card-description-input').hide();
		$('.card-description-content').show().text(cardDescription);
	} else {
		$('.card-description-input').show();
		$('.card-description-content').hide().text("");
	}
	if(headImg.length>0){
		$('.card-member').show();
		for(var i=0;i<headImg.length;i++){
			showMemberArray.push({src:headImg[i].src,id:memberId[i].value});
		}
		showMemberImg(showMemberArray);
	}
	$('.card-title').text(cardTitle);
	$('.card-place').text('In List '+cardPlace);
})
$('.js-setting').on('click',function(){
	myApp.popup('.popup-setting');
	$('.popup-overlay').hide();
});
$('.js-power-up').on('click',function(){
	myApp.popup('.popup-power-up');
	$('.popup-overlay').hide();
});
$('.js-archive').on('click',function(){
	myApp.popup('.popup-archive');
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
	var otherBlockHeight;
	if($('.card-member')[0].offsetHeight>0){
		otherBlockHeight = $('.popup-header')[0].offsetHeight + $('.card-description')[0].offsetHeight + $('.card-member')[0].offsetHeight+20; 
	} else {
		otherBlockHeight = $('.popup-header')[0].offsetHeight + $('.card-description')[0].offsetHeight+10; 
	}
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
		bold: true,
		onClick:function (){
			addMember();
		}
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
$(document).on('click','.js-list-name',function(){
	var listName = $(this).text();
	$(this).parents('.card-header').css('padding','5px');
	$(this).hide();
	$(this).siblings('.more').hide();
	$(this).siblings('.list-name-input').show().val(listName).focus();
});
$('.list-name-input').blur(function(){
	var listName = $(this).val();
	$(this).hide();
	$(this).parents('.card-header').css('padding','10px');
	$(this).siblings('.js-list-name,.more').show();
	$(this).siblings('.js-list-name').text(listName);
});
$(document).on('click','.js-card-member',function(){
	addMember();
});
$('.js-popup-content-cancel').on('click',function(){
	var memberIdArray = [];
	var choosedSrc = $('.member-head-img');
	var choosedId = $('.card-member-id');
	var swiperIndex = $('.swiper-index').val();
	var cardIndex = $('.card-index').val();
	var cardDescription = $('.card-description-content').text();
	$('.card-member').hide();
	myApp.closeModal();
	$('.swiper-slide').eq(swiperIndex).find('.card-information').eq(cardIndex).find('span').remove();
	for(var i=0;i<choosedId.length;i++){
		$('.swiper-slide').eq(swiperIndex).find('.card-information').eq(cardIndex).append('<span><img class="head-img fr" src='+choosedSrc[i].src+'><input class="img-id" type="hidden" value='+choosedId[i].value+'></span>');
	}
	$('.swiper-slide').eq(swiperIndex).find('.card-information').eq(cardIndex).find('.card-description-not-display').val(cardDescription);
	calHeight(swiperIndex,flag);
});
$('.js-popup-member-cancel').on('click',function(){
	var memberIdArray = [];
	var choosedId = $('.member-info-background').find('.member-id');
	var choosedSrc = $('.member-info-background').find('.member-img');
	for(var i=0;i<choosedId.length;i++){
		memberIdArray.push({src:choosedSrc[i].src,id:choosedId[i].value});
	}
	myApp.closeModal('.popup-card-add-member');
	showMemberImg(memberIdArray);
});
$(document).on('click','.member-info',function(){
	$(this).toggleClass('member-info-background');
});
$(document).on('click','.card-description',function(){
	var cardDescription = $('.card-description-content').text();
	myApp.popup('.popup-card-description');
	var descriptionInputArea = $('.description-input-area');
	descriptionInputArea.focus();
	if(cardDescription){
		descriptionInputArea.val(cardDescription);
	} else {
		descriptionInputArea.val("");
	}
});
$(document).on('click','.js-cancel-description',function(){
	myApp.closeModal('.popup-card-description');
});
$(document).on('click','.js-finish-description',function(){
	var inputDescription = $(this).parent().siblings('.description-input-area').val();
	myApp.closeModal('.popup-card-description');
	if(inputDescription){
		$('.card-description-input').hide();
		$('.card-description-content').show().text(inputDescription);
	} else {
		$('.card-description-input').show();
		$('.card-description-content').hide().text("");
	}
});
$(document).on('click','.js-privacy-chosen',function(){
	var changeTitle = $(this).find('.privacy-list-title').text();
	if(!$(this).hasClass('privacy-chosen')){
		$(this).addClass('privacy-chosen').css('padding-right' ,'55px');
		$(this).parent('li').siblings().find('.js-privacy-chosen').removeClass('privacy-chosen').css('padding-right' ,'15px');
		$('.privacy-setting').text(changeTitle);
		var domain = window.location.host;
		if(changeTitle == 'Public'){
			$('.lock-icon').attr('src','http://'+ domain + '/image/images/public-grey.png');
		} else {
			$('.lock-icon').attr('src','http://'+ domain + '/image/images/lock.png');
		}
	}
});
$(document).on('click','.search-bar-buttons .button',function(){
	var tapText = $(this).text();
	$(this).parents().siblings('.archive-search').find('.archive-search-input').attr('placeholder','Filter '+tapText+' by name...');
	$('.archive-search-input').focus();
});
$('.archive-search-input').focus(function(){
	$('.archive-search-input').css({'width':'70%','padding':'0 20px'}).removeClass('center-text');
	$('.archive-search-cancel').css('display','inline-block');
	$('.search-input-icon').css('left','15px');
});
$('.archive-search-cancel').click(function(){
	$(this).hide();
	$('.archive-search-input').css({'width':'99%','padding':'0'}).addClass('center-text');
	$('.search-input-icon').css('left','100px');
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

function addMember(){
	var cardMemberID = $('.card-member-id');
	var addMemberTemplate = $('#addMemberTemplate').html();
	var compiledMemberTemplate = Template7.compile(addMemberTemplate);
	var htmlStrMember = compiledMemberTemplate(members);
	myApp.popup('.popup-card-add-member');
	$('.popup-overlay').hide();
	$('.add-member-list').html(htmlStrMember);
	var memberId = $('.member-id');
	memberId.each(function(){
		for(var j=0;j<cardMemberID.length;j++){
			if($(this).val() == cardMemberID[j].value){
				$(this).parent('.member-info').addClass('member-info-background');
			}
		}
	});
}

function showMemberImg(memberIdArray){
	$('.card-member-img-list').html('');
	if(memberIdArray.length>0){
		$('.card-member').show();
		for(var i=0;i<memberIdArray.length;i++){
			$('.card-member-img-list').append('<span><img class="member-head-img" src='+memberIdArray[i].src+'><input class="card-member-id" type="hidden" value='+memberIdArray[i].id+'></span>');
		}
	} else {
		$('.card-member').hide();
	}
}

// // var block = $(".card");
//   var oW,oH;
//   // 绑定touchstart事件
//   $(".card").on("touchstart", function(e) {
//   	var block = $(this);
//    console.log(e);
//    var touches = e.touches[0];
//    oW = touches.clientX - block.offsetLeft;
//    oH = touches.clientY - block.offsetTop;
//    //阻止页面的滑动默认事件
//    // document.on("touchmove",defaultEvent,false);
//   },false)

//   $(".card").on("touchmove", function(e) {
//   	var block = $(this);
//    var touches = e.touches[0];
//    var oLeft = touches.clientX - oW;
//    var oTop = touches.clientY - oH;
//    if(oLeft < 0) {
//     oLeft = 0;
//    }else if(oLeft > document.documentElement.clientWidth - block.offsetWidth) {
//     oLeft = (document.documentElement.clientWidth - block.offsetWidth);
//    }
//    block.style.left = oLeft + "px";
//    block.style.top = oTop + "px";
//   },false);

//   $(".card").on("touchend",function() {
//    // document.off("touchmove",defaultEvent,false);
//   },false);
//   function defaultEvent(e) {
//    e.preventDefault();
//   }