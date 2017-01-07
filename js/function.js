 $(window).scroll(function(){
    var wScroll=$(this).scrollTop();
    $('#hero_img h1').css({
        'transform' : 'translate(0px, -'+ wScroll /5 +'%)'
    });
    
});
// smooth scrolling 
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
 $(document).ready(function(){
   var src = $('.open_box').children('iframe').attr('src');
    $(".open_box").click(function(){
       
    	$('.open_box').addClass('section');
        
    	var panelId=$(this).attr('data-panelid');
    	$('#'+panelId).fadeIn(200);
         
    	
});
   


 $('.close').click(function(){
    	 
    var closeId=$(this).attr('data-panelid');
    $('#'+closeId).fadeOut(200);
   
    $('.open_box').removeClass('section');
       $('#player')[0].pause();
  
    
     
});

    
});

   

    $("button").click(function(){
        $("#hide_cont").fadeToggle(1000);
        $(this).text($(this).text() == 'See less' ? 'See more' : 'See less'); // <- HERE
    return false;
    });
$('#hero_img h1').animate({paddingTop:'20%'},1000)
 