$(document).ready(function() {
    $(".top-navi-right-hamburger").click(function () {
      $(".top-navi-right-hamburger-inner").slideToggle();
    });

    $(".top-navi-right-hamburger-inner-close").click(function () {
     	$(".top-navi-right-hamburger-inner").slideToggle();
  	});

    $('a').click(function(){
      $(this).toggleClass("visited");
	});

	$('.list-content').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('defaultText', $this.text());
        $this.text("Click to View");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('defaultText'));
    });


	/*NDA Alert*/
	$("#modal").hide();
	$("#prompt").hide();

	$(".open-modal").on("click", function(event){
	  event.preventDefault();
	  event.stopPropagation();
	  $("#modal").show("closed");
	});

	$("button").on("click", function(){
	  $("#modal").fadeOut();
	});

	$(".modal-container").on("click", function(){
	  $("#modal").fadeOut();
	});

});