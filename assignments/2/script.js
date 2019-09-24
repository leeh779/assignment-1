	var myWrapper = document.getElementById("wrapper");

	for (var i = 0; i < 100; i++) {

		var randomNumberHund = Math.random() * 100;
		var randomNumberTen = Math.random() * 10;

		var rotateChange = 50;

		var moduleOneR = 30+i;

		var moduleOneG = 10+(i*2);

		var myModule = `
		  <div class="module" style="
		  width: ${Math.floor(randomNumberHund)}vw;
		  background:rgb(${moduleOneR+(5*i)},${moduleOneG+i},200);
		  margin:${Math.ceil(randomNumberTen)}vh ${Math.ceil(randomNumberTen)}vw ${Math.floor(randomNumberTen)}vh ${Math.ceil(randomNumberTen)}vw;
		  transform: rotate3d(1, 1, 1, ${rotateChange*i}deg);">
		  </div>
		`

		myWrapper.insertAdjacentHTML('afterbegin' , myModule);
	}