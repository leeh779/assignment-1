var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }


$('.quote1').click(function(){
	console.log('i clicked this', $(this));
	$('.quote2').delay(280).fadeOut(0);
	$('.quote2').delay(1480).fadeIn(1300);
	$('.quote3').delay(380).fadeOut(0);
	$('.quote3').delay(780).fadeIn(1200);
	$('.quote4').delay(80).fadeOut(0);
	$('.quote4').delay(210).fadeIn(1700);
	$('.quote5').delay(580).fadeOut(0);
	$('.quote5').delay(1380).fadeIn(1900);
	$('.quote6').delay(20).fadeOut(0);
	$('.quote6').delay(310).fadeIn(2300);
});


$('.quote6').click(function(){
	console.log('i clicked this', $(this));
	$('.quote7').fadeOut(0);
	$('.quote7').fadeIn(1000);
});

$('.quote7').click(function(){
	console.log('i clicked this', $(this));
	$('.quote8').fadeOut(0);
	$('.quote8').fadeIn(1000);
});

$('.quote8').click(function(){
	console.log('i clicked this', $(this));
	$('.quote9').fadeOut(0);
	$('.quote9').fadeIn(1000);
});

$(".quote8").click(function(){
   $('html').css({"background" : "#000000"});
   $(".quote1, .quote2, .quote3, .quote4, .quote5, .quote6, .quote7").each(function(){
    $(this).fadeOut(1000);
}); 
});

$('.quote9').click(function(){
	console.log('i clicked this', $(this));
   $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
   $('.quote10').fadeOut(0);
   $('.quote10').delay(1680).fadeIn(1100);
   $('.quote11').delay(1420).fadeIn(850);
   $('.quote12').delay(1820).fadeIn(1250);
   $('.quote13').delay(1300).fadeIn(490);
   $('.quote14').delay(1920).fadeIn(150);
   $('.quote15').delay(1490).fadeIn(900);
   $('.quote16').delay(1500).fadeIn(350);
   $('.quote17').delay(1230).fadeIn(850);
   $('.quote18').delay(920).fadeIn(720);
   $('.quote19').delay(1290).fadeIn(1000);
});

$('.quote18').click(function(){
	console.log('i clicked this', $(this));
   $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
   $('.quote8').delay(380).fadeOut(100);
   $('.quote9').delay(680).fadeOut(700);
   $('.quote10').delay(980).fadeOut(400);
   $('.quote11').delay(1420).fadeOut(150);
   $('.quote12').delay(720).fadeOut(350);
   $('.quote13').delay(1300).fadeOut(490);
   $('.quote14').delay(1520).fadeOut(150);
   $('.quote15').delay(590).fadeOut(730);
   $('.quote16').delay(1100).fadeOut(350);
   $('.quote17').delay(1230).fadeOut(550);
   $('.quote19').delay(890).fadeOut(290);
   $('.ladymacbeth').delay(1000).fadeOut(0);
   $('.ladymacbeth').delay(1000).fadeIn(1000);
});

$('.ladymacbeth').click(function(){
   $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
   $('.ladymacbeth').fadeOut(300);
   $('.quote10').fadeOut(0);
   $('.quote10').delay(1680).fadeIn(1100);
   $('.quote11').delay(1420).fadeIn(850);
   $('.quote12').delay(1820).fadeIn(1250);
   $('.quote13').delay(1300).fadeIn(490);
   $('.quote14').delay(1920).fadeIn(150);
   $('.quote15').delay(1490).fadeIn(900);
   $('.quote16').delay(1500).fadeIn(350);
   $('.quote17').delay(1230).fadeIn(850);
   $('.quote18').delay(920).fadeIn(720);
   $('.quote19').delay(1290).fadeIn(1000);
});


$('.quote19').click(function(){
	console.log('i clicked this', $(this));
	$('.quote20').fadeOut(0);
	$('.quote20').fadeIn(2000);
	$('.quote16').delay(800).fadeOut(100);
	$('.quote10').delay(150).fadeOut(650);
});

$(".quote19").click(function(){
   $('html').css({"backgroundColor" : "#000000"});
   $('.quote1').delay(100).fadeOut(300);
   $('.quote2').fadeOut(900);
   $('.quote3').fadeOut(350);
   $('.quote4').fadeOut(100);
   $('.quote5').delay(10).fadeOut(510);
   $('.quote6').fadeOut(480);
   $('.quote7').fadeOut(250);
   $('.quote8').fadeOut(700);
   $('.quote9').fadeOut(420);
   $('.quote10').fadeOut(100);
   $('.quote8').fadeIn(200);
   $('.quote11').delay(40).fadeOut(100);
   $('.quote12').fadeOut(300);
   $('.quote13').fadeOut(100);
   $('.quote3').fadeIn(250);
   $('.quote14').fadeOut(700);
   $('.quote7').fadeIn(650);
   $('.quote15').fadeOut(350);
   $('.quote16').fadeOut(100);
   $('.quote17').fadeOut(200);
   $('.quote9').fadeIn(450);
   $('.quote18').fadeOut(190);
   $('.quote13').fadeIn(220);
   $('.quote19').fadeOut(240);
   $('.quote3').fadeOut(150);
   $('.quote9').fadeOut(190);
   $('.quote13').fadeOut(290);
   $('.quote8').fadeOut(300);
   $('.quote7').fadeOut(250);
   $('.quote20').delay(1000).fadeIn(5000);
   $('.ladymacbeth').fadeOut(300);
   $('.quote21').fadeOut(0);
   $('.quote21').delay(1000).fadeIn(3000);
   $('.quote22').delay(1700).fadeOut(0);
   $('.quote22').delay(2400).fadeIn(3000);
   $('.quote23').delay(3100).fadeOut(0);
   $('.quote23').delay(3800).fadeIn(3000);
}); 

$(".quote23").click(function(){
   $(".quote20, .quote21, .quote22, .quote23").each(function(){
    $(this).fadeOut(2000);
}); 
});



$(document).ready(function () {
    $("#quote7").click(function () {
        $("#quote7-content").fadeOut(function () {
            $("#quote7-content").text(($("#quote7-content").text() == 'What is done is done.') ? 'What is done' : 'What is done is done.').fadeIn();
        })
    })
});