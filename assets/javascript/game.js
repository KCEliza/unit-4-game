var win = 0;
var lose = 0;
var allGems = [Math.floor(Math.random() * (12 - 1) + 1)];
// var red = [Math.floor(Math.random() * (12-1)+1)];
// var orange = [Math.floor(Math.random() * (12-1)+1)];
// var blue = [Math.floor(Math.random() * (12-1)+1)];
// var green = [Math.floor(Math.random() * (12-1)+1)];
var yourScore = 0;






function Random(min, max) {
    return Math.floor(Math.random() * max) + min;
}


var Colors = ["assets/images/star.png", "assets/images/ruby.png", "assets/images/star.png", "assets/images/ruby.png"];
        






loop();
function loop (){
    var target = [Math.floor(Math.random() * (120 - 19) + 19)];
    $("#compNum").text(target);

for (var i = 0; i < Colors.length; i++) {
    // allGems = [Math.floor(Math.random() * (12-1)+1)];
    var gems = Random(Colors);
    
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", Colors[i]);
    
    imageCrystal.attr("data", Random(1, 12));

    $("#crystals").append(imageCrystal);
}


$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data"));
    crystalValue = parseInt(crystalValue);
    yourScore += crystalValue;
    $("#yourScore").text(yourScore);


    if (yourScore == target) {
        win += 1;

        $("#wins").text(win);
        $("#crystals").append(imageCrystal);
        reset();
    } 
    else if (yourScore > target) {
        lose += 1;
        $("#losses").text(lose);
        reset();
        
    }

})
function reset(){
    
    $("#compNum, #yourScore, #crystals").empty();
    yourScore = 0;
    $("#yourScore").text(yourScore);
    loop();
    

}
}