$(function() {
  // Your interactions go here
  $(document).ready(function() {
	  $( ".seagull" ).click(function() {
		  $( ".seagull" ).animate({
		    marginLeft: "5in"
		  }, 1000, function() {
		    console.log('i flew');
		  });
	  });
  });

});
