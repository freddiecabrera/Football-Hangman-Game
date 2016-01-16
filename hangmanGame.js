var playerNames = [
  { name: 'Lionel Messi', hint: 'The best' },
  { name: 'Cristiano Ronaldo', hint: 'The 2nd best' },
  { name: 'Neymar', hint: 'He will collaborate with Jumpman on some 5s' },
  { name: 'Luis Suarez', hint: 'He will bite your ass' },
  { name: 'Robert Lewandowski', hint: 'Coming off the bench, he scored the 5 goals in 9 minutes' },
  { name: 'Thomas Muller', hint: 'He scored a Hat-Trick in the First World Cup Game 2014' },
  { name: 'Zlatan Ibrahimovic', hint: 'Short temper, talks in 3rd person about himself' },
  { name: 'Manuel Neuer', hint: '"The Sweeper Keeper"' },
  { name: 'Sergio Aguero', hint: 'At 15 years and 35 days old, he became the youngest player to play in the Argentine First Division, breaking the record previously held by Diego Maradona.' },
  { name: 'Alexis Sanchez', hint: 'He speaks his spanish with a Tocopillan accent' },
  { name: 'Paul Pogba', hint: "Sir Alex Ferguson's biggest mistake" },
  { name: 'Andres Iniesta', hint: "Barcelona's best mifielder ever" },
  { name: 'Eden Hazard', hint: 'He once walked out of the stadium to eat a burger while his national team were tied 1-1 and in need of a win ' },
  { name: 'Kevin De Bruyne', hint: 'Chlesea should have never sold this guy' },
  { name: 'Arturo Vidal', hint: 'Crashed his 458 Italia while under the influence of alcohol during the Copa America' },
  { name: 'Gareth Bale', hint: 'Fastest dribbler in the world' },
  { name: 'Carlos Tevez', hint: 'He is defined by his burn scars that run down his neck' },
  { name: 'David de Gea', hint: 'Manchester United\'s defense' },
  { name: 'James Rodriguez', hint: 'Golden boot winner of the 2014 World Cup' },
  { name: 'Ivan Rakitic', hint: 'He plays for a club whose lats croatian signing was Robert Prosinecki' },
  { name: 'Philipp Lahm', hint: 'He is possibly the most underrated player and he also wrote an autobiography about himself' },
  { name: 'Arjen Robben', hint: 'No era penal' },
  { name: 'David Alaba', hint: 'He holds Austria\'s record as the youngest player to play for their senior national team' },
  { name: 'Sergio Busquets', hint: 'He looks like Borat and is the most underrated starter at his club' },
  { name: 'Javier Mascherano', hint: 'Little Pitbull' },
  { name: 'Mesut Ozil', hint: 'He is third-generation Turkish-German, of Kurdish descent' },
  { name: 'Aubameyang', hint: 'He was recorded to have ran 30 meters in 3.7 seconds, almost faster than Usain Bolt' },
  { name: 'Antoine Griezmann', hint: 'This Frenchman wears Spongebob Squarepants underwear on matchdays' },
  { name: 'Yaya Toure', hint: 'First Ivorian to win the Champions League, when Barcelona beat Manchester United 2-0 on 27 May 2009' },
  { name: 'David Silva', hint: 'El Mago' },
  { name: 'Luka Modric', hint: 'He was wrong about this quote in the 2014 World Cup. "I think if there\'s someone who\'s knees should be shaking in this moment, it\'s them and not us"' },
  { name: 'Douglas Costa', hint: 'Robben criticized his "lambreta" he pulled againts Bayer Leverkusen' },
  { name: 'Karim Benzema', hint: 'Turned down Algeria to play for France' },
  { name: 'Gianluigi Buffon', hint: 'He has once suffered from depression and had played in Serie B in 2006' },
  { name: 'Toni Kroos', hint: 'Youngest Player to Ever Represent Bayern Munich Professionally' },
  { name: 'Thibaut Courtois', hint: 'Belgium\'s Youngest Ever Keeper' },
  { name: 'Sergio Ramos', hint: 'He used Manchester United to get a payday at Real Madrid' },
  { name: 'Harry Kane', hint: 'He was born 5 miles from White Hart Lane' },
  { name: 'Angel di Maria', hint: 'Targeted by burglars while at Manchester United' },
  { name: 'Diego Godin', hint: 'He was sold from Defensor Sporting to Club Atletico Cerro for $37' },
  { name: 'Thiago Silva', hint: 'This PSG player was almost aborted by his mother do to the rough life in Rio de Janeiro, Brazil' },
  { name: 'Andrea Pirlo', hint: '"The Architect"' },
  { name: 'Marco Verratti', hint: 'He is often compared to his comrade "The Architect"' },
  { name: 'Gerard Pique', hint: 'Little rich kid from Catalunya' },
  { name: 'Jerome Boateng', hint: 'Messi made this "world class" defender look like a fool an created a meme frenzy after' },
  { name: 'Philippe Coutinho', hint: 'Baller for Liverpool but sucks when he plays for Brazil' },
  { name: 'Alvaro Morata', hint: 'Real madrid wished they hadn\' loaned this player out to Juventus during the Chamions League' },
  { name: 'Gonzalo Higuain', hint: 'The most hated Argentine soccer player' },
  { name: 'Xabi Alonso', hint: 'He played for Liverpool from 2004 to 2009 and helped lead the team to an FZ Cup in 2006' },
  { name: 'Marco Reus', hint: 'Injury prone like a M%^&*$ F$%^! and he plays for BVB' },
  { name: 'Diego Costa', hint: 'Most hated forward always getting into altercations' },
  { name: 'Willian', hint: 'Came out of Corinthians and now balls out at Chelsea' },
  { name: 'Blaise Matuidi', hint: 'He is the backbone of PSG' },
  { name: 'Edinson Cavani', hint: 'He was sent off for slapping Chile\'s Gonzalo Jara after he put finger up his arse' },
  { name: 'Miralem Pjanic', hint: 'This Bosnia and Herzegovina player scored three goals and made four assists in nine appearances to help the "Dragons" qualify for their first ever' },
  { name: 'Raphael Varane', hint: 'This baller will soon take Sergio Ramos\'s spot' },
  { name: 'Vincent Kompany', hint: 'You\'d be scred to go up againts this giant Belgium defender' },
  { name: 'Dani Alves', hint: 'During a match in Spain he once ate a banana that was thrown at him by a racist cunt.' },
  { name: 'Hulk', hint: 'This guy is buff and is compared to a Green super hero' },
  { name: 'Wayne Rooney', hint: 'Looks more like a ufc fighter than a footballer' },
  { name: 'Alexandre Lacazette', hint: 'He was winner of the 14-15 player of the year award in Ligue 1' },
  { name: 'Raheem Sterling', hint: 'This baller was born in Kingston, Jamaica but emigrated to England when he was 5' },
  { name: 'Cesc Fabregas', hint: 'This guy dedcided to leave FCB instead of competing with Xavi' },
  { name: 'Yacine Brahimi', hint: 'He helped Algeria reach the round of 16 for the first time at the 2014 FIFA World Cup' },
  { name: 'Carlos Bacca', hint: 'This footballer used to be a fisherman' },
  { name: 'Anthony Martial', hint: 'Always has the same look and was a suprise signing when Manchester United annouced it' },
  { name: 'Keylor Navas', hint: 'Most underrated keeper right now' },
  { name: 'Jamie Vardy', hint: '5 years ago he was playing in the 7th Division of English football' },
  { name: 'Mohamed Salah', hint: 'Fast ass Egyption' },
  { name: 'Koke', hint: 'I bet you don\'t even know his real name' },
  { name: 'Giorgio Chiellini', hint: 'He was bitten by "El Vampiro Luis Suarez"' },
  { name: 'Jordi Alba', hint: 'He was a product of La Masia but he later moved on to Valencia in 2007 but he came back' },
  { name: 'Yevhen Konoplyanka', hint: 'starting salary when he joined the Dnipro Dnipropetrovsk reserve side was 300 dollars, which he bought a grey Mazda with' },
  { name: 'Bastian Schweinsteiger', hint: 'He played for Bayern Munich his whole life until his recent move to Manchester United' },
  { name: 'Mats Hummels', hint: '2014 was his first World Cup for Germany' },
  { name: 'Franck Ribery', hint: 'This guy is considered one of the ugliest footballers, but he is a baller indeed' },
  { name: 'Henrikh Mkhitaryan', hint: 'He was named Armenian player of the year five times (every year since 2009, except 2010)' },
  { name: 'Arda Turan', hint: 'This is Sparta!!!' },
  { name: 'Petr Cech', hint: 'Why does tha keeper wear a helmet' },
  { name: 'Mario Gotze', hint: 'Made Messi sad in the 2015 World Cup' },
  { name: 'Thiago Alcantara', hint: 'Followed Pep Guardiola to Bayern Munich' },
  { name: 'Mauro Icardi', hint: 'This baller look like a light skinned The Weeknd, he balls out for Inter' },
  { name: 'Nolito', hint: 'This player was key when Celta de Vigo beat Barcelona 4-1' },
  { name: 'Claudio Bravo', hint: 'He has the most caps for Chile' },
  { name: 'Javier Pastore', hint: '"El Flaco"' },
  { name: 'Memphis Depay', hint: 'Used to be a rapper but he chose to play football instead' },
  { name: 'Juan Mata', hint: 'He studies sports science and marketing' },
  { name: 'Marcelo', hint: 'He Scored a Goal On His Own Team in the World Cup Opener' },
  { name: 'Alex Teixeira', hint: 'Scored a brace againts Real Madrid in the Chamions League group stage' },
  { name: 'Dimitri Payet', hint: 'He was born in the island of Réunion and plays for West Ham' },
  { name: 'Isco', hint: 'Was let go by Valencia in 2010 to Malaga he now plays for Real Madrid' },
  { name: 'Leonardo Bonucci', hint: 'Italian former midfielder who is usually deployed as ball-playing centre back in a three-man defence' },
  { name: 'Carlos Sanchez', hint: 'The only Aston Villa player on this list' },
  { name: 'Sebastian Giovinco', hint: 'Took the MLS by storm and was criticized for migrating to the USA' },
  { name: 'Santi Cazorla', hint: 'He once rejected Real Madrid when they tried to sign him, he is 5\'5' },
  { name: 'Francesco Totti', hint: 'He has cheated on all his girlfriends with eachother but he has never cheated on Roma and he never will' },
  { name: 'Riyad Mahrez', hint: 'He is one of the main reasons why 	Leicester City is in 2nd place right now' },
  { name: 'Andriy Yarmolenko', hint: 'He Has Played for Dynamo Kiev Since 2007' },
  { name: 'Nemanja Matic', hint: 'He had a great season with Chelsea last year but this year not so much' },
  { name: 'Laurent Koscielny', hint: 'He is a defender but he can freestyle like a Brazilian' }
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
  'http://imgur.com/Gt57FK7.png',
  'http://i.imgur.com/GFe1iWT.png?1'
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
var hint;
var deleted = [];

// jQuery code starts here.
$(function() {

  $('.hangman').hide();
  $('.soccer, .gol').hide();

  // Will give us the correct amount of dashes needed
  var dashGenerator = function() {
    baller = randomPlayerSelector();
    hint = baller.hint;
    $('.hint').append('<span>' + hint + '</span>');
    baller = baller.name.replace(/ +/g, "").split('');
    $.each(baller, function(index) {
      $('.words').append('<span class="dash' + index +
          '">____   </span>')
        .css(
          'color', "#FFF8DD");
    });
    console.log(baller);
  }



  // This will get the user keystrokes and do something with it below.
  $(window).keypress(function(e) {


    // Key will be any letter the user inputs
    var key = String.fromCharCode(e.which);

    // Will store the current key stroke .
    // Will also make the screen blink if you push the same key twice.

    // Will display current key stroke
    $('.current-key span').html('<span>' + key + '<span>');

    // Will display all keystorkes
    $('.pressed-keys').append('<span>' + key + ', <span>');


    pressedKeys.forEach(function(item) {
      if (key === item) {
        $('body').css('background-color', 'black');
        setTimeout(function() {
          $('body').css('background-color', '#3A8B7D');
        }, 300);
      }
    });

    // Will replace the dash with the correctly guessed letter and call our letterDelete function
    baller.forEach(function(item, index) {
      if (item.toUpperCase() === key.toUpperCase()) {
        letterDelete(index);
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

    // Will delete all the correct guesses and call the winner function
    function letterDelete(index) {
      deleted.push(delete baller[index]);
      winner();
    }
    // This checks if you have one the game
    function winner() {
      var ballerLength = baller.length;
      var deletedLength = deleted.length;
      if (ballerLength === deletedLength) {
        goal.play();
        $('.soccer, .gol').show();
        setTimeout(function() {
          $('button').trigger('click');
        }, 5000);
      }
    }

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
    if (hangmanPicture === hangmanImages[8]) {
      setTimeout(function() {
        $('button').trigger('click');
      }, 300);
    }

    // Will push all of our key storkes into our array
    pressedKeys.push(key);
  });

  var goal = $('#goal')[0];


  // Will give us a new 'baller'
  $('button').click(function() {
    $('.soccer, .gol').hide();
    lives = 0;
    hangmanPicture = hangmanImages[lives];
    $('.hangman').show();
    $(".words span").remove();
    $('.hint span').remove();
    $('.current-key span, .pressed-keys span').empty();
    dashGenerator();
    pressedKeys = [''];
    deleted = [];


    $('.hangman').html(
      '<img src="http://i.imgur.com/FrhvF8Y.png" width="200" height="200">'
    ).
    css({
      'text-align': 'center',
      'margin-left': '50px'
    });

  });



});
