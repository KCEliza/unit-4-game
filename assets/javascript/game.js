var win = 0;
var lose = 0;
var target = [Math.floor(Math.random() * (120 - 19) + 19)];
var allGems = [Math.floor(Math.random() * (12 - 1) + 1)];
// var red = [Math.floor(Math.random() * (12-1)+1)];
// var orange = [Math.floor(Math.random() * (12-1)+1)];
// var blue = [Math.floor(Math.random() * (12-1)+1)];
// var green = [Math.floor(Math.random() * (12-1)+1)];
var winHtml = 0
var lossHtml = "";
var yourScore = 0;
$("#compNum").text(target);






function Random(min, max) {
    return Math.floor(Math.random() * max) + min;
}

var Colors = [{
        name: "Red",
        image: "assets/images/star.png",
        value: Random(1, 12)
    },
    {
        name: "Orange",
        image: "assets/images/ruby.png",
        value: Random(1, 12)
    },
    {
        name: "Blue",
        image: "assets/images/star.png",
        value: Random(1, 12)
    },
    {
        name: "Green",
        image: "assets/images/ruby.png",
        value: Random(1, 12)
    }

]



console.log(target);
console.log(allGems);



for (var i = 0; i < Colors.length; i++) {
    // allGems = [Math.floor(Math.random() * (12-1)+1)];
    var gems = Random(Colors);
    // Colors[i].innerHTML = Colors.name + '<img src="'+Colors.image+'">';
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", Colors[i].image);

    imageCrystal.attr("data", Colors[i].value);

    $("#crystals").append(imageCrystal);
}


$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data"));
    crystalValue = parseInt(crystalValue);
    yourScore += crystalValue;
    $("#yourScore").text(yourScore);


    if (yourScore == target) {
        win += 1;
        yourScore = 0;
        $("#wins").text(win);
        Random(1, 12);
        target = [Math.floor(Math.random() * (120 - 19) + 19)];

        console.log(win + "YOU WIN!");
    } 
    else if (yourScore > target) {
        lose += 1;
        yourScore = 0;
        $("#losses").text(lose);
        Random(1, 12);
        target = [Math.floor(Math.random() * (120 - 19) + 19)];
    }

})