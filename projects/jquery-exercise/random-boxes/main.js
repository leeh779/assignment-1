$(function() {
  // Your interactions go here
	
	/*1st
	$(".textbox").click(function () {
		  var i = Math.floor((Math.random()*5));
		  $('#flexdisplay-boxes').children().removeClass('fillbg','purpletext');
		  $('#flexdisplay-boxes').children().eq(i).addClass('fillbg','whitetext');
	});
	*/

	/*2nd
	$(".textbox").click(function () {
	    var div = $("#flexdisplay-boxes");
	    var items = div.find(".box");
	    var number = items.length;
	    var random = Math.floor((Math.random() * number));
	    items.removeClass("fillbg");
	    items.eq(random).addClass("fillbg");

	      if ( items.hasClass("fillbg") ) {
	      	$(items).addClass("whitetext")
	      } else {
	      	$(items).removeClass("purpletext")
	      }`	
	});
	*/
	
	
	/*3rd
	$(".textbox").click(function () {
		  var i = Math.floor((Math.random()*5));
		  $('#flexdisplay-boxes').children().eq(i).css( {'background-color':'purple', 'color':'#fff'} );
	});
	*/

	/*4th*/
	$('.textbox').click(function(){
	  var i = Math.floor((Math.random()*5));
	  $('#flexdisplay-boxes').children().removeClass('fillbg');
	  $('#flexdisplay-boxes').children().eq(i).addClass('fillbg');
	});

  //

});
