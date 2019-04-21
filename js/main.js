$(document).ready(function(){
	popup_var=null;
	
	$('.menu_pic').click(function(){
		$(this).parent('.menu').children('#nav').slideToggle();
		$(this).parent('.menu').toggleClass('active');
	})
// bint div "more" and "sale div"
	$('.open').click(function(){
		$(this).parent().parent().children('.content').slideToggle();
		$(this).children('div').toggleClass('hidden');
	});
///
	 $(".xxx").click(function() {
            $(this).parent().children('.open').trigger( "click" );
      });

	$(' #about_me_div .open').click(function(){
		$(this).parent().children('.text').css('height','auto');
		$(this).css('display','none');
	})
	$(' #otz .open').click(function(){
		$(this).parent('.otziv_div').children('ul').children('.content').css('height','auto');
		$(this).css('display','none');
		$('.shadow').css('display','none');
	})
	$('#photogalery .open').click(function(){
		$(this).parent().children('.photo').css('height','auto');
		$(this).html('');
	})
	$(' .question_answer .question').click(function(){
		$(this).parent().children('.answer_div').slideToggle();
	})
// price 
	$(' #price_div .open').click(function(){
		$(this).parent().children('.price').slideToggle();
	});
	$('.monney_text li').click(function(){
		if(!$(this).hasClass('light select_m')){
			$('.monney_text li').removeClass('light select_m');
			$(this).addClass('light select_m');
		}
		$(".monney_count1").text($(this).attr("data_monney1"));
		$(".monney_count2").text($(this).attr("data_monney2"));
	})
/////
	$('#to_top').click(function(){
		$('body').animate({scrollTop:0},1000);
	})

	$('#back').click(function(){
		window.history.back(-1);
	})
	if($('body').width()<=768)
	{
		rotater_arrows();
	
		$('.languages li:first-child a').text('рус');
		$('.languages li:nth-child(2) a').text('Հայ');
		$('.more_backgr img').attr('src','../img/girl768.png');
		
		 var more_info=('<div class="info">');
			 more_info += $('#more .text').next().html();
			 more_info +=('</div>');
		 $('#more .info').css('display','none');
		 $(more_info).insertAfter( "#more .open" );

		var slider_div_info = ('<div class="info">');
		 	slider_div_info += $('#slider_div .text').next().html();
		 	slider_div_info += ('</div>');
		$('#slider_div .info').css('display','none');
		$(slider_div_info).insertAfter( "#slider_div .slider_desc" );
	}
	if($('body').width()<=480){
		$('.more_backgr img').attr('src','../img/girl480.png');
	}

//////////////language selected////////////////
	 selected_language();

/////////////////scroll animate//////////////
   $('#nav a[href^="#"],.address_cont a[href^="#"],.level_1 a[href^="#"]').click(function () {
            elementClick = $(this).attr("href");
            destination = $(elementClick).offset().top;
            $('body').animate( { scrollTop: destination }, 1000 );
    });
 // tabber////////////////////////////////////
 $(".model_tab_name li:first-child a").addClass("active");
 $(".modeling_taber_box .model_tab:first-child").removeClass("hidden");

	 $(".model_tab_name a").click(function(){

	 	var tab = $(this).parent("li").index()+1;
	 	
	 	$(".model_tab_name li a").removeClass("active");
	 	$(this).addClass("active");
	 	
	 	$(".model_tab").addClass("hidden");
		$('.modeling_taber_box .model_tab:nth-child('+tab+')').removeClass('hidden');

	 })
	 $(".languages li ").click(function(){
	 	$(".languages li ").removeClass("current-lang");
	 	$(this).addClass("current-lang");
	 	
	 	selected_language();
	 })

///////////rotater otzivi////////////////////
	var rotating = false;
$('.rotater .arrow').click(function(){
	if(!rotating){
		rotating = true;
		
		var width = $(this).parent().parent().find('.otziv_div .content').outerWidth(true)+59;		
		var count = $(this).parent().parent().find('.content').size();
		var number = parseInt($(this).parent().parent().find('ul').css('margin-left')) / width;
		if(number < 0){
			number = number * -1;
		}
		if($(this).hasClass('prev')){
			number--;
		}else{
			number++;
		}
		var max = parseInt($('.otziv_div ').width() / width) + 1;
		if(number < 0){
			number = 0;
		}else if(number > count - max){
			number = count - max;
		}
		$('.rotater').find('ul').animate({
			'margin-left': '-' + (number * width) + 'px'
		}, 500 );
		
		setTimeout(function(){
			rotating = false;
		}, 500);
	}
});
/////////////////end//////////
/////////////////////rotater pics///////////////
	var rotate = false;
$('.rotater_pic .arrow_pic').click(function(){

	if(!rotate){
		rotate = true;
		
		var width = $(this).parent().parent().find('.photos_div li').outerWidth(true);
		var count = $(this).parent().parent().find('.photos_div li').size();
		var number = parseInt($(this).parent().parent().find('ul').css('margin-left')) / width;

		if(number < 0){
			number = number * -1;
		}
		
		if($(this).hasClass('prev')){
			number--;
		}else{
			number++;
		}
		var max = parseInt($('.photos_div ').width() / width) + 1;
		if(number < 0){
			number = 0;
		}else if(number > count - max){
			number = count - max;
		}
		$('.rotater_pic').find('ul').animate({
			'margin-left': '-' + (number * width) + 'px'
		}, 500 );
		
		setTimeout(function(){
			rotate = false;
		}, 500);
	}
});

//////////////popup///////////
    function alert_popup(div_id){

        $('#'+div_id).css('display','block');
        $('.popup_2').css({'margin-left':(($(document).width() - $('#'+div_id).children('.inner').width())/2) + 'px', 'margin-top':(( window.innerHeight - $('#'+div_id).children('.inner').height())/2) + 'px'});
    	$('.dialog-overlay').css({height:$(window).height(), width:window.innerWidth}).show();
    	popup_var=div_id;
    }

    $('#sign_in,#sign_in2').click(function(){
        alert_popup('s_mess');
    });
    $('.photo .pics').click(function(){
        alert_popup('s_mess2');
    });

  $(document).on("click",".close,.dialog-overlay",function(){
       $('#s_mess,#s_mess2').css('display','none');
       $('.dialog-overlay').hide();
       popup_var=null;
  });
//////////////////////////////////////////////////////////////////////////////

$(window).resize(function(){

 /////////////dialog_overlay/////////////////////////////////////////////////
	  if (!$('.dialog-overlay').is(':hidden')){ 
         	alert_popup(popup_var);
			$('.dialog-overlay').css({height:$(window).height(), width:window.innerWidth}).show();
        }   	

/////////////////selected language//////////////////////////////////////////////////
	selected_language();

/////////////////body size changing/////////////////////////////////////////////////////////	
	if($('body').width()<=768)
	{
		$('.languages li:first-child a').text('рус');
		$('.languages li:nth-child(2) a').text('Հայ');
			
			if(!$('#more .open').next().hasClass('info'))
			{
				var more_info=('<div class="info">');
				more_info += $('#more .text').next().html();
				more_info +=('</div>');
				$('#more .info').css('display','none');
				$(more_info).insertAfter( "#more .open" );
			}
			if (!$('#slider_div .slider_desc').next().hasClass('info')) {
				var slider_div_info = ('<div class="info">');
		 		slider_div_info += $('#slider_div .text').next().html();
		 		slider_div_info += ('</div>');
				$('#slider_div .info').css('display','none');
				$(slider_div_info).insertAfter( "#slider_div .slider_desc" );
			};
		 $('.more_backgr img').attr('src','../img/girl768.png');
		rotater_arrows();
	}
	else if($('body').width()>=768){
		$('.languages li:first-child a').text('по-русски');
		$('.languages li:nth-child(2) a').text('Հայերէն');
		$('.more_backgr img').attr('src','../img/girl.png');
		$('.rotater .arrows').css({'margin-top':148+'px'});

		$('#more .info, #slider_div .info').css('display','inline-block');
		$( "#more .open,#slider_div .slider_desc" ).next().remove();
	}
	if($('body').width()<=480)
	{	
		$('.more_backgr img').attr('src','../img/girl480.png');
	}
})
function rotater_arrows(){
		var otz_div_height=$('.otziv_div').height()+50;
		$('.rotater .arrows').css({'margin-top':otz_div_height+'px'});
}

function selected_language(){
	var a=$('.languages li.current-lang').offset().left+($('.languages li.current-lang').width()/2+13);
	 $('.selected_language').css('left',a+'px');
}

////////////////////////// to top button////////////////////
$(window).scroll(function(e){

    w_height = window.innerHeight;
    scroll_top = $(window).scrollTop();
    if(scroll_top>400){
        $('#to_top').show();
    }
    else{
        $('#to_top').hide();
    }

})

})