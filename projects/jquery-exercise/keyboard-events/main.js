$(function() {
  // Your interactions go here
  /* music 
  $.getScript('https://unpkg.com/tone@13.4.9/build/Tone.js', function() {
  console.log('tone.js is loaded');
});

$(document).on('keypress', function(e) {
  var key = e.key;
  var synth = new Tone.Synth().toMaster();

  console.log('keypress:', key);

  if ( key > 0 && key < 10 ) {
    synth.triggerAttackRelease(('C' + key), '8n');
  }
	*/

  /* images */
  $(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'e' ) {
    img = 'http://leeh779.github.io/projects/jquery-exercise/keyboard-events/assets/elephant.png';
  } else if ( key == 'f' ) {
    img = 'http://leeh779.github.io/projects/jquery-exercise/keyboard-events/assets/fox.png';
  } else if ( key == 'g' ) {
    img = 'http://leeh779.github.io/projects/jquery-exercise/keyboard-events/assets/gorilla.png';
  }  else if ( key == 'h' ) {
    img = 'http://leeh779.github.io/projects/jquery-exercise/keyboard-events/assets/horse.png';
  }

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="color: red; position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});


});
