var playerNames = [
  "Lionel Messi",
  "Cristiano Ronaldo",
  "Neymar",
  "Luis Suarez",
  "Robert Lewandowski",
  "Thomas Muller",
  "Zlatan Ibrahimovic",
  "Manuel Neuer",
  "Sergio Aguero",
  "Alexis Sanchez",
  "Paul Pogba",
  "Andres Iniesta",
  "Eden Hazard",
  "Kevin De Bruyne",
  "Arturo Vidal",
  "Gareth Bale",
  "Carlos Tevez",
  "David de Gea",
  "James Rodriguez",
  "Ivan Rakitic",
  "Philipp Lahm",
  "Arjen Robben",
  "David Alaba",
  "Sergio Busquets",
  "Javier Mascherano",
  "Mesut Ozil",
  "Aubameyang",
  "Antoine Griezmann",
  "Yaya Toure",
  "David Silva",
  "Luka Modric",
  "Douglas Costa",
  "Karim Benzema",
  "Gianluigi Buffon",
  "Toni Kroos",
  "Thibaut Courtois",
  "Sergio Ramos",
  "Harry Kane",
  "Angel di Maria",
  "Diego Godin",
  "Thiago Silva",
  "Andrea Pirlo",
  "Marco Verratti",
  "Gerard Pique",
  "Jerome Boateng",
  "Philippe Coutinho",
  "Alvaro Morata",
  "Gonzalo Higuain",
  "Xabi Alonso",
  "Marco Reus",
  "Diego Costa",
  "Willian",
  "Blaise Matuidi",
  "Edinson Cavani",
  "Miralem Pjanic",
  "Raphael Varane",
  "Vincent Kompany",
  "Dani Alves",
  "Hulk",
  "Wayne Rooney",
  "Alexandre Lacazette",
  "Raheem Sterling",
  "Cesc Fabregas",
  "Yacine Brahimi",
  "Carlos Bacca",
  "Anthony Martial",
  "Keylor Navas",
  "Jamie Vardy",
  "Mohamed Salah",
  "Koke",
  "Giorgio Chiellini",
  "Jordi Alba",
  "Yevhen Konoplyanka",
  "Bastian Schweinsteiger",
  "Mats Hummels",
  "Franck Ribery",
  "Henrikh Mkhitaryan",
  "Arda Turan",
  "Petr Cech",
  "Mario Gotze",
  "Thiago Alcantara",
  "Mauro Icardi",
  "Nolito",
  "Claudio Bravo",
  "Javier Pastore",
  "Memphis Depay",
  "Juan Mata",
  "Marcelo",
  "Alex Teixeira",
  "Dimitri Payet",
  "Isco",
  "Leonardo Bonucci",
  "Carlos Sanchez",
  "Sebastian Giovinco",
  "Santi Cazorla",
  "Francesco Totti",
  "Riyad Mahrez",
  "Andriy Yarmolenko",
  "Nemanja Matic",
  "Laurent Koscielny"
];

// Hangman url's
var hangmanImages = [
  'http://imgur.com/nIFRKNR.png',
  'http://imgur.com/yM4QvRE.png',
  'http://imgur.com/7C3nW1T.png',
  'http://imgur.com/8Q298DQ.png',
  'http://imgur.com/M0RqwQz.png',
  'http://imgur.com/LriCrfw.png',
  'http://imgur.com/4qhBGH5.png',
  'http://imgur.com/Gt57FK7.png'
];


var lives = 0;
var hangmanPicture = hangmanImages[lives];
var currentLetter = '';

// Will give me a random player from our 'playerNames array'
function randomPlayerSelector() {
  return playerNames[Math.floor(Math.random() * playerNames.length + 1)];
}

// Stores our keystrokes and current key stroke
var pressedKeys = [''];
var currentKey;
var baller;

// jQuery code starts here.
$(function() {

  $('.hangman').hide();

  // Will give us the correct amount of dashes needed
  var dashGenerator = function() {
    baller = randomPlayerSelector().replace(/ +/g, "").split('');
    $.each(baller, function(index) {
      $('.words').append('<span class="dash' + index +
          '">____   </span>')
        .css(
          'color', "#FFF8DD");
    });
    console.log(baller);
  }



  // This will turn the user key into a letter store all inputs
  // and store the current key stroke aswell.
  // It will also make the screen blink if you push the same key twice
  $(window).keypress(function(e) {
    var key = String.fromCharCode(e.which);
    $('.current-key span').html('<span>' + key + '<span>');
    $('.pressed-keys').append('<span>' + key + ', <span>');
    pressedKeys.forEach(function(item) {
      if (key === item) {
        $('body').css('background-color', 'black');
        setInterval(function() {
          $('body').css('background-color', '#3A8B7D');
        }, 300);
      }
    });

    // Will replace the dash with the correctly guessed letter
    baller.forEach(function(item, index) {
      if (item.toUpperCase() === key.toUpperCase()) {
        var element = '.dash' + index;
        $(element).html(item)
          .css({
            'font-size': '30px',
            'font-style': "'Lato', sans-serif",
            'font-weight': '100'
          });
        currentLetter = item;
      }
    });

    // This will start hanging our man if we guess the wrong letter
    if (currentLetter.toUpperCase() !== key.toUpperCase()) {
      $('.hangman').html('<img src="' + hangmanPicture +
        '" width="200" height="200">');
      if (lives < hangmanImages.length - 1) {
        lives++;
        hangmanPicture = hangmanImages[lives];
      }
    }


    // This will reset the game after you run out of lives
    if (hangmanImages[7] === hangmanPicture) {
      setTimeout(function() {
        $('button').trigger('click');
      }, 1000);
    }


    pressedKeys.push(key);
  });

  // Will give us a new 'baller'
  $('button').click(function() {

    $('.hangman').show();
    $(".words span").remove();
    $('.current-key span, .pressed-keys span').empty();
    dashGenerator();
    pressedKeys = [''];
    lives = 0;
    hangmanPicture = hangmanImages[lives];

    $('.hangman').html(
      '<img src="http://i.imgur.com/FrhvF8Y.png" width="200" height="200">'
    ).
    css({
      'text-align': 'center',
      'margin-left': '50px'
    });

  });



});
