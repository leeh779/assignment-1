document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("canvas").addEventListener('click',function(e){
     getPosition(e);
     //validation code to see State field is mandatory.  
    }  ); 
});


document.getElementById("canvas").click(function(e){
     getPosition(e); 
});

var pointSize = 3;

function getPosition(event){
     var rect = canvas.getBoundingClientRect();
     var x = event.clientX - rect.left;
     var y = event.clientY - rect.top;
        
     drawCoordinates(x,y);
}

function drawCoordinates(x,y){	
  	var ctx = document.getElementById("canvas").getContext("2d");


  	ctx.fillStyle = "#ff2626"; // Red color

    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
}