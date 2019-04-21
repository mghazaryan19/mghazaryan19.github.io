	var direction="";
    var iScrollPos="";
    var width_cont=0;
    var bint_margin=0;

$(window).scroll(function(e){

	if(isElementInViewport($('#more')))
	{ 

 		scroll=scrollDirection();

		if(scroll=='+' && direction!=scroll)
		{
			direction=scroll;
				$('.bint_roll').stop(true);
				$('.more_backgr').queue( "fx", [] ).stop();
			
			var content_width=$('.content_max_width').width();
			switch(content_width){
				case 1200:
					width_cont=1056;
    			 	bint_margin=898;
    			 break;
    			case 980:
    				width_cont=926;
    			 	bint_margin=818;
    			 break;
    			case 768:
    				width_cont=656;
    			 	bint_margin=580;
    			 break;
    			case 480:
    				width_cont=420;
    			 	bint_margin=290;
    			 break;
			}		
				$('.more_backgr').animate({'width': width_cont + 'px'}, 1000);
	            $('.bint_roll').animate({'margin-left': bint_margin + 'px'},1000, function () {
	            $('.xxx').css('display', 'block');})
		}
			else if(direction!=scroll){
				
				direction=scroll;
				$('.more_backgr').queue( "fx", [] ).stop();
				$('.bint_roll').stop(true);
				$('.xxx').css('display', 'none');
				
				if(width_cont>480){	
		
					$('.more_backgr').animate({'width':306+'px'},1000);
					$('.bint_roll').animate({'margin-left':190+'px'},1000);	
				}
				else{
					$('.more_backgr').animate({'width':180+'px'},1000);
					$('.bint_roll').animate({'margin-left':130+'px'},1000);
				}				
		}
	}

})	
	
function isElementInViewport (el) {

   //special bonus for those using jQuery
   if (typeof jQuery === "function" && el instanceof jQuery) {
       el = el[0];
   }
		var rect = el.getBoundingClientRect();

   return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
       rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
   );
}
function scrollDirection(){
	var iCurScrollPos = $(this).scrollTop();
		    if (iCurScrollPos > iScrollPos) {
		        scroll='+';

		    } else {
		        scroll='-';
		    }
	     iScrollPos = iCurScrollPos;
	     return scroll;

}