var targetNumber = Math.floor(Math.random() * 120);
var counterScore = 0;
// var numberOptions = Math.floor(Math.random() *12);
var cowOneValue;
var cowOneImage = document.getElementsByClassName(".cowOneImage");
var cowTwoValue;
var cowTwoImage = document.getElementsByClassName(".cowTwoImage");
var cowThreeValue;
var cowThreeImage = document.getElementsByClassName(".cowThreeImage");
var cowFourValue;
var cowFourImage = document.getElementsByClassName(".cowFourImage");
var wins = 0;
var losses = 0;

$("#targetNumber").text(targetNumber);

// function id(){
//     var cowOneImage = document.getElementsByClassName(".cowOneImage")
// }

function reset() {
    cowOneValue=Math.floor(Math.random() *12) + 1;
        console.log(cowOneValue);
    cowTwoValue=Math.floor(Math.random() *12) + 1;
        console.log(cowTwoValue);
    cowThreeValue=Math.floor(Math.random() *12) + 1;
        console.log(cowThreeValue);
    cowFourValue=Math.floor(Math.random() *12) + 1;
        console.log(cowFourValue);

    // update();
    // counterScore=0;

    cowOneImage.attr("data-cowOneValue", cowOneValue);
    cowTwoImage.attr("data-cowTwoValue", cowTwoValue);
    cowThreeImage.attr("data-cowThreeValue", cowThreeValue);
    cowFourImage.attr("data-cowFourValue", cowFourValue);
};


$(".cowOneImage").on("click", function(){
    counterScore += cowOneValue;
    $("#currentNumber").text(counterScore);
    if (counterScore === targetNumber){
        wins ++;
        reset();
    }
    else if (counterScore >= targetNumber){
        losses++;
        reset();
    }
});

$(".cowTwoImage").on("click", function(){
    counterScore += cowTwoValue;
    $("#currentNumber").text(counterScore);
    if (counterScore === targetNumber){
        wins ++;
        reset();
    }
    else if (counterScore >= targetNumber){
        losses++;
        reset();
    }
});

$(".cowThreeImage").on("click", function(){
    counterScore += cowThreeValue;
    $("#currentNumber").text(counterScore);
    if (counterScore === targetNumber){
        wins ++;
        reset();
    }
    else if (counterScore >= targetNumber){
        losses++;
        reset();
    }
});

$(".cowFourImage").on("click", function(){
    counterScore += cowFourValue;
    $("#currentNumber").text(counterScore);
    if (counterScore === targetNumber){
        wins ++;
        reset();
    }
    else if (counterScore >= targetNumber){
        losses++;
        reset();
    }
});

function update () {
    $("#currentNumber").text(counterScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
}