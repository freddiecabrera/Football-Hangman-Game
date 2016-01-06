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

// Will give me a random player from our 'playerNames array'
function randomPlayerSelector() {
  return playerNames[Math.floor(Math.random() * playerNames.length + 1)];
}

var pressedKeys = [];
var currentKey;

// jQuery code starts here.
$(function() {

  // Will give us the correct amount of dashes needed needed
  var dashGenerator = function() {
    baller = randomPlayerSelector().replace(/ +/g, "").split('');
    $.each(baller, function(index, val) {
      $('.words').append('<span class="dash' + index +
          '">____   </span>')
        .css(
          'color', "#FFF8DD");
    });
    console.log(baller);
  }



  $(window).keypress(function(e) {
    var key = String.fromCharCode(e.which);
    currentKey = key;
    pressedKeys.push(key);
    console.log(key);
  });

  // Will give us a new 'baller'
  $('button').click(function() {
    $("span").remove();
    dashGenerator();
  });


});
