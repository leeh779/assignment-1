$(function() {
  // Your interactions go here
  $(document).on('click', function(event) {
  // All javascript event handlers give you information about the event type in the event argument.
  console.log(event);

  // event.preventDefault() will prevent the default click event from happening in the browser.
  // This makes it so that clicking a link doesn't actually go to that link.
  event.preventDefault();

  // You can refer to items on the event object, such as the target, which represents
  // the individual DOM element you clicked.
  var $clickTarget = $(event.target);

  $clickTarget.append('<iframe src="https://giphy.com/embed/74WEv5FQY9w3e" width="480" height="349" frameBorder="0" allowFullScreen></iframe>');
});

$(document).on('click', function(event) {
  event.preventDefault();

  var $clickTarget = $(event.target);

  $clickTarget.css({ transform: 'scale(' + randomNumber(0.5, 1.5) + ')' });

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
});
});
