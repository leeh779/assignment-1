	var myWrapper = document.getElementById("myWrapper");

	  	for (var i = 0; i < 110; i++) {
	  		myWrapper.innerHTML += '<div class="patternUnitWrapper"><div class="patternUnitOne" style="transform: rotate('+90*i+'deg)"></div></div>'
	  	}

	var myWrapperTwo = document.getElementById("myWrapperTwo");
	  	for (var j = 0; j < 100; j++) {
	  		myWrapperTwo.innerHTML += '<div class="patternTwoUnitWrapper"><div class="patternTwoUnitOne" style="transform: rotate('+45*j+'deg); border: 1px solid rgb(255,'+ (i*30) +',150);"></div></div>'
	  	}

