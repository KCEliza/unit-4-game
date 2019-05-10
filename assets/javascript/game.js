var win = 0;
var lose = 0;
var yourScore = 0;






function Random(min, max) {
    return Math.floor(Math.random() * max) + min;
}


var Colors = ["assets/images/Frog.jpg", "assets/images/Snake.jpg", "assets/images/Turtle.jpg", "assets/images/Snail.jpg"];
        






loop();
function loop (){
    var target = [Math.floor(Math.random() * (120 - 19) + 19)];
    $("#compNum").text(target);

for (var i = 0; i < Colors.length; i++) {
    // allGems = [Math.floor(Math.random() * (12-1)+1)];
    var gems = Random(Colors);
    
    var animalsImage = $("<img>");

    animalsImage.addClass("animal-image");

    animalsImage.attr("src", Colors[i]);
    
    animalsImage.attr("data", Random(1, 12));

    $("#animals").append(animalsImage);
}


$(".animal-image").on("click", function () {

    var animalValue = ($(this).attr("data"));
    animalValue = parseInt(animalValue);
    yourScore += animalValue;
    $("#yourScore").text(yourScore);


    if (yourScore == target) {
        win += 1;

        $("#wins").text(win);
        $("#animals").append(animalsImage);
        reset();
    } 
    else if (yourScore > target) {
        lose += 1;
        $("#losses").text(lose);
        reset();
        
    }

})
function reset(){
    
    $("#compNum, #yourScore, #animals").empty();
    yourScore = 0;
    $("#yourScore").text(yourScore);
    loop();
    

}
}