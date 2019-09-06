/* Simple version
$(function() {
  // Your interactions go here
  $(document).ready(function() {
     $(".toggle-btn").click(function () {
     $(".toggle-p").toggle()
  	});
  });

});



*/ 



/*in class */
$(function() {
  // Your interactions go here
  $(document).ready(function() {
     $(".toggle-btn").click(function () {
     $(".toggle-p").toggleClass('active');
  	});
  });

});





/* Using if statement

$(function() {
	//Your interactions go here
	$('.button').click(function() {
		console.log('i clicked it');

		if ( $('.text').is(":visible") ) {
			$('.text').hide();
		} else {
			$('.text').show();
		}
	})
})

*/