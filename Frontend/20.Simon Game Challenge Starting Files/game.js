var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var  randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeToggle().fadeIn();
    var sound = new Audio("sounds/"+randomChosenColor+".mp3");
    sound.play();
}

$(".btn").click(function() {
    var userChosenColour = this.attr("id");
    userClickedPattern.push(userChosenColour);
})

function playSounf(name) {
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}

function animatePress(CurrentColor) {
    $("#"+CurrentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + CurrentColor).removeClass("pressed");
      }, 100);
}
