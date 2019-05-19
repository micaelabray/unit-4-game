var targetNumber = Math.floor(Math.random() * 120);
var counterScore = 0;
// var numberOptions = Math.floor(Math.random() *12);
var cowOneValue;
var cowOneImage;
var cowTwoValue;
var cowTwoImage;
var cowThreeValue;
var cowThreeImage;
var cowFourValue;
var cowFourImage;
var wins = 0;
var losses = 0;

$("#targetNumber").text(targetNumber);
// $("#currentNumber").text(numberOptions);

// for (var i=0; i < numberOptions.length; i++) {
//     $(".cowOne").attr(numberOptions);
//     $(".cowTwo").attr(numberOptions);
//     $(".cowThree").attr(numberOptions);
//     $(".cowFour").attr(numberOptions);
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
};


$(".cowOne").on("click", function(){
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

$(".cowTwo").on("click", function(){
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

$(".cowThree").on("click", function(){
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

$(".cowFour").on("click", function(){
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