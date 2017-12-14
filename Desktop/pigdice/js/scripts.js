//backend
function rollDice() {
  var diceNumber = Math.floor((Math.random() * 6) + 1);
  if (diceNumber === 1) {

  document.getElementById("score").innerHTML = diceNumber;
  alert("You rolled a one! Your turn has ended.");
  this.score = 0;
  } else {
    this.score += diceNumber;
    document.getElementById("score").innerHTML = diceNumber;
    document.getElementById("player1score").innerHTML = this.score;

  }
  console.log(diceNumber);
}

function Player(turn) {

    this.roll = (0)
    this.score = (0)
    this.totalscore = (0)
    this.turn = (turn)
    this.playerName;
}





function holdDice() {

 $("#player1nameturn").toggle();

 $("#player2nameturn").toggle();
}








//userend
$(document).ready(function() {
  $("form#username-form").submit(function(event) {
    event.preventDefault();

    var player1 = $("input#username").val();
    var player2 = $("input#username2").val();
    $(".wellwellwell").hide();
    $(".player1").show();
    $(".player2").show();
    $(".dice").show();

    $("#player2nameturn").toggle();

    $("h3#player1name").append(player1);
    $("h3#player2name").append(player2);
    $("h2#player1nameturn").append(player1);
    $("h2#player2nameturn").append(player2);

  $("")


  });
});
