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



    for (var i = 1; i < 4; i++) {

      var outputDiv = `
      <div class="gallery-placeholder">
            <img src="assets/imgs/assignments-preview/${i}.jpg">
            <div class="gallery-content" onclick="location.reload();location.href='assignments/${i}/index.html'">
                Assignment ${i}
            </div>
      </div>
    `
      var appendToX = function (id, output) {
        document.getElementById(id).insertAdjacentHTML('afterbegin',output);
      }

      appendToX("gallery", outputDiv);
      
    }


});