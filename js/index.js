
/* label news click to sort */
$('.label-group').click(function (e) { 
    e.preventDefault();

    var _label = $(this).attr('data-sort');
    
    $('.label-group').parent().removeClass('active');
    $(this).parent().addClass('active');

    $.each($('.news-label'), function (indexInArray, valueOfElement) { 
        let _this = $(this);
        if(_label !== 'all'){
            if(!_this.hasClass(_label)){
                _this.parent().hide('slow');
            }
            else{
                _this.parent().show('slow');
            }
        }
        else{
            _this.parent().show('slow');
        }
        
    });
});


//----------scroll-------//
$(window).on('load resize scroll', function(){
	var _scroll = $(window).scrollTop();
	var _toTopButton = $('.to-top-button');
	var _wh = $(window).height();
	//--------to top button
	if(_scroll > 400)
	{
		if(!_toTopButton.hasClass('active')){
			_toTopButton.addClass('active');
		}
	} else{
		_toTopButton.removeClass('active');
	}
	return false;
});

$('.to-top-button').click(function(event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: 0//$($.attr(this, 'href')).offset().top
    }, 'slow', 'linear');
    return false;
});

//----------OPEN MENU-------//
var _menuOpen = 0;
$('.hambuger-button').click(function(){
	let _this = $(this);
    var _menu = $('.header__wrap');
    var _submenu = $('.header__menu');
    var _header = $('.header');

    var _ww = $(window).width();
	if(_menuOpen == 0)
	{
		if(!_this.hasClass('active')){

            _ww < 1025 ? _menu.addClass('active').addClass('bounceInLeft') : _submenu.addClass('active').addClass('bounceInLeft');

            _this.addClass('active');
            _header.addClass('active');
            
			delayF(function(){
				_menuOpen = 1;
                _menu.removeClass('bounceInLeft');
                _submenu.removeClass('bounceInLeft');
            },800)();
		}
	}
	else{
		if(_this.hasClass('active')){

            _ww < 1025 ?_menu.addClass('bounceOutLeft') : _submenu.addClass('bounceOutLeft');
            
			delayF(function(){
                _this.removeClass('active');
                _header.removeClass('active');
                
                _menu.removeClass('active').removeClass('bounceOutLeft');
                _submenu.removeClass('active').removeClass('bounceOutLeft');
				
				_menuOpen = 0;}, 300)();
		}
    }
    return false;
});

//----------delay function-------//
function delayF(func, timed){
	let timeout;
	return function(){
		let _f = func;
		clearTimeout(timeout);
		timeout = setTimeout(_f, timed);
	};
}