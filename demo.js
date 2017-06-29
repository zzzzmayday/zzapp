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
		text: '上传附件',
		label: true
	},
	{
		text: '使用最近一张图片',
	},
	{
		text: '拍照',
	},
	{
		text: '从资料库选择',
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

var drag = {
	bindDragEvent: function (isF) {
            var father = $("card-content-inner");//父容器
            var btns = father.find("public-drag-btn");//事件源对象
            var items = father.find("card");//拖拽目标

            for (var i = 0; i < items.length; i++) {
                items[i].index = i;//给拖拽目标加index属性
                if (isF) {//是否是第一次绑定
                	drag.bindTouchEvent(btns[i], items[i], items);
                }else{
                    if (items[i].getAttribute("data-isBind") == "yes") {//如果是需要绑定的再绑定事件
                    	items[i].removeAttribute("data-isBind");
                    	drag.bindTouchEvent(btns[i], items[i], items);
                    }
                }
            }

            /*
            * 1.循环绑定事件
            * 2.用分支绑定是为了避免重复绑定事件 造成重复调用的BUG
            * */
        },
        bindTouchEvent: function (ele, target, items) {
            var dragObj = target;//拖拽目标
            var btn = ele;//事件源对象
            var canMove = true;
            var startY, direction;

            btn.addEventListener("touchstart", touchStart, false);

            function touchStart(event) {
            	dragObj.className = "item draging";
                /*
                 * .draging
                * 当手指触摸时给个 拖拽中的效果
                * transform:scale(0.8,0.8);
                * z-index: 999;
                * transition: all 1s;
                * */

                startY = event.touches[0].clientY;//记录初次触摸位置 用以判断移动方向
                dragObj.addEventListener("touchmove", touchMove, false);//给拖拽目标绑定touchmove 因为要操作拖拽目标
            }


            function touchMove(event) {
                var i = dragObj.index;//用到index
                if (event.touches[0].clientY < startY && canMove) {
                    /*移动<开始  就是向上移动
                     *canMove是在完成效果后禁止再向下移动
                     * 也就是说用户移动一次就确定方向了 禁止先 拖到上方，在拖到下方
                     * */
                    if (i != 0) {//如果不是第一个项
                        direction = 1;//有效1 up
                        dragObj.className = "item draging up";
                        /*
                        * .up
                        *  transform: translate3d(20px,-100%,10px)
                        *  给一个自身向上移动百分百
                        * */
                        items[i - 1].className = "item draging down";
                        /*当前被拖拽目标的上一个项 给一个向下移动的动效
                        * .down
                        *  transform: translate3d(20px,100%,10px)
                        * */
                        canMove = false;
                    }
                }
                else if (event.touches[0].clientY > startY && canMove) {
                    direction = 0;//向下移动
                    dragObj.className = "item draging down";
                    items[i + 1].className = "item draging up";
                    canMove = false;
                }
                dragObj.addEventListener("touchend", touchEnd, false);
            }

            function touchEnd() {
            	var father = document.getElementById("public_theme_list");
                var clone = null;//克隆空对象
                var i = dragObj.index;
                var newItems;
                dragObj.className = "item";//清除拖拽目标移动效果
                clone = dragObj.cloneNode(true);//克隆移动目标
                if (direction) {
                    //向上
                    items[i - 1].className = "item";//当前被拖拽目标的上一个项 给一个向下移动的动效
                    clone.index = i - 1;//给克隆对象index 为当前上一个项index
                    items[i - 1].index = i + 1;//拖拽对象前上一个项index+1

                    clone.setAttribute("data-isBind","yes");//dom 不能克隆事件 所以在递归的时候要给克隆绑定事件

                    father.insertBefore(clone,items[i - 1]);
                    /*将克隆对象插入当前拖拽目标 前一项之前*/
                    newItems = father.getElementsByClassName("item");
                    /*因为新增了项 所以获取新项数组*/
                    father.removeChild(newItems[i + 1]);
                    /*删除当前拖拽项*/
                }
                else {
                	items[i + 1].className = "item";
                	clone.index = i + 1;
                	clone.setAttribute("data-index", i + 1);
                	items[i + 1].index = i;
                	items[i + 1].setAttribute("data-index", i);

                	clone.setAttribute("data-isBind","yes");

                	father.insertBefore(clone, items[i + 2]);
                	newItems = father.getElementsByClassName("item");
                	father.removeChild(newItems[i]);
                }

                drag.bindDragEvent(false);//递归调用
            }
        }
    };

    drag.bindDragEvent(true);
