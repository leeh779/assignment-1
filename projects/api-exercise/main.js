$(function() {
  // All javascript event handlers give you information about the event type in the event argument.
  console.log('hello');

  var url = 'https://api.openweathermap.org/data/2.5/weather?zip=10011,us&appid=5e354627f0a96016aa286212514a73e4'

  $.get(url, function(data) {
    // The get request fires a callback function when the API request finishes
    console.log(data);
    // The data object contains all the information returned in the API
    
    var humidity = data.main.humidity;
    console.log('humidity',humidity);
    // In this case, the most interesting bit of data is in the weather key
    // Now do something interesting with the data!
    if (humidity < 50) {
        $('.humidity').append('Dry :(');
    }
    else if (humidity >= 50) {
        $('.humidity').append('Too Humid :(');
    }
    else if (humidity >= 40 & humidity <= 50) {
        $('.humidity').append('Nice Humidity! :)');
    }

    var wind = data.wind.speed;
    console.log('wind',wind);
    $('.wind').append(wind);

    var pressure = data.main.pressure;
    console.log('pressure',pressure);
    $('.pressure').append(pressure);
  });


});
