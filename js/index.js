
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