var alertTemplate = $('#alertTemplate').html();
var compiledTemplate = Template7.compile(alertTemplate);
var tab1 = compiledTemplate(alertTabData1);
var tab2 = compiledTemplate(alertTabData2);
var tab3 = compiledTemplate(alertTabData3);
$('#tab-all').html(tab1);
$('#tab-me').html(tab2);
$('#tab-comment').html(tab3);
$('.search-board').click(function(){
	$(this).removeClass('center-text').css('width','82%');
	$('.board-search-cancel').css('display','inline-block');
	$('.input-search-icon').css('left','15px');
});
$('.board-search-cancel').click(function(){
	$(this).hide();
	$('.search-board').addClass('center-text').css('width','100%');
	$('.input-search-icon').css('left','146px');
});
$('.search-tab-box').click(function(){
	$(this).removeClass('center-text').css('width','82%');
	$('.tab-search-cancel').css('display','inline-block');
	$('.input-tab-search-icon').css('left','15px');
});
$('.tab-search-cancel').click(function(){
	$(this).hide();
	$('.search-tab-box').addClass('center-text').css('width','100%');
	$('.input-tab-search-icon').css('left','150px');
});
$('.js-popup-cancel').on('click',function(){
	myApp.closeModal();
});
$('.js-add-board').on('click',function(){
	myApp.popup('.popup-add-board');
});