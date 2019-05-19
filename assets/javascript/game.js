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

    update();
    counterScore=0;
}


// $(".cowOne").on("click", function(){
//     counter += numberOptions;
//     $("currentNumber").text(counter += numberOptions);
// })

$(".cowTwo").on("click", function(){
    counter += numberOptions;
    $("currentNumber").text(counter += numberOptions);
})

$(".cowThree").on("click", function(){
    counter += numberOptions;
    $("currentNumber").text(counter += numberOptions);
})

$(".cowFour").on("click", function(){
    counter += numberOptions;
    $("currentNumber").text(counter += numberOptions);
})