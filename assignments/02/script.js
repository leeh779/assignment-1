	var myWrapper = document.getElementById("myWrapper");

	  	for (var i = 0; i < 100; i++) {
	  		for (var j = 0; j < 4; j++) {
	  			myWrapper.innerHTML += '<div id="myPatternOneWrapper" class="myPatternOneWrapper" style="background:URL(assets/bgpattern-'+ j +'.png) repeat);"><div class="patternUnitOne" style="transform:rotate('+ 90*i +'deg)"></div></div>'	
	  		}
	  	}