$(function() {

    var endpoints = [
        "https://kquea402.github.io/api.json",
        "https://glics998.github.io/api.json",
        "https://colindharrington.github.io/api.json",
        "https://hoant626.github.io/api.json",
        "https://karla772.github.io/api.json",
        "https://leeh779.github.io/api.json",
        "https://lis874.github.io/api.json",
        "https://phoebechloee.github.io/api.json",
        "https://luw779.github.io/api.json",
        "https://mullg389.github.io/api.json",
        "https://pana005.github.io/api.json",
        "https://raos130.github.io/api.json",
        "https://samsj948.github.io/api.json",
        "https://shaha129.github.io/api.json",
        "https://Mwedd9.github.io/api.json",
        "https://zhenx804.github.io/api.json"
    ];

    $('.button').click(function() {
        console.log( $(this) );
        var url = $(this).data('url');
        console.log(url);

        $.get('url', function(data) {
          console.log(data);

              $('.word-adjective-1').html(data.adjective1);
              $('.word-adjective-2').html(data.adjective2);
              $('.word-artSupply').html(data.artSupply);
              $('.word-computerSoftware').html(data.computerSoftware);
              $('.word-websiteName').html(data.websiteName);
              $('.word-artistName').html(data.artistName);
              $('.word-celebrityName').html(data.celebrityName);
              $('.word-noun1').html(data.noun1);
              $('.word-noun2').html(data.noun2);
              $('.word-pluralNoun1').html(data.pluralNoun1);
              $('.word-pluralNoun2').html(data.pluralNoun2);
              $('.word-pluralNoun3').html(data.pluralNoun3);
              $('.word-verbEndingInIng').html(data.verbEndingInIng);
              $('.word-placeInNewYork').html(data.placeInNewYork);
              $('.word-bodyPart').html(data.bodyPart);
              $('.word-numbers').html(data.numbers);
              $('.word-foods').html(data.foods);  
    
    }).fail(function(error) {
                console.log('Error in GET request. Handle the error generously.')
                console.warn(error.statusText);
       });
    });


    $('.randomizer').click(function() {
        var randomEndpoint = endpoints[ Math.floor(Math.random()*endpoints.length) ];
        console.log(randomEndpoint);

        $.get(randomEndpoint, function(data) {
          console.log(data);

          $('.word-adjective-1').html(data.adjective1);
          $('.word-adjective-2').html(data.adjective2);
          $('.word-artSupply').html(data.artSupply);
          $('.word-computerSoftware').html(data.computerSoftware);
          $('.word-websiteName').html(data.websiteName);
          $('.word-artistName').html(data.artistName);
          $('.word-celebrityName').html(data.celebrityName);
          $('.word-noun1').html(data.noun1);
          $('.word-noun2').html(data.noun2);
          $('.word-pluralNoun1').html(data.pluralNoun1);
          $('.word-pluralNoun2').html(data.pluralNoun2);
          $('.word-pluralNoun3').html(data.pluralNoun3);
          $('.word-verbEndingInIng').html(data.verbEndingInIng);
          $('.word-placeInNewYork').html(data.placeInNewYork);
          $('.word-bodyPart').html(data.bodyPart);
          $('.word-numbers-1').html(data.numbers[0]);
          $('.word-numbers-2').html(data.numbers[1]);
          $('.word-foods-2').html(data.foods[1]);

          $('html').css({ background: '', color:''});
        }).fail(function(error) {
          $('html').css({ background: 'black', color: 'pink'});
        });
    });
});
