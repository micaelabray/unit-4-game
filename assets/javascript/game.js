$(document).ready(function(){

    var targetNumber = Math.floor(Math.random() * 120);
    var counterScore = 0;
    var cowOneValue;
    var cowOneImage = $(".cowOneImage");
    var cowTwoValue;
    var cowTwoImage = $(".cowTwoImage");
    var cowThreeValue;
    var cowThreeImage = $(".cowThreeImage");
    var cowFourValue;
    var cowFourImage = $(".cowFourImage");
    var wins = 0;
    var losses = 0;

    $("#targetNumber").html(targetNumber);

    //Gives randomized value to each image
    cowOneValue=Math.floor(Math.random() *12) + 1;
        console.log(cowOneValue);
    cowTwoValue=Math.floor(Math.random() *12) + 1;
        console.log(cowTwoValue);
    cowThreeValue=Math.floor(Math.random() *12) + 1;
        console.log(cowThreeValue);
    cowFourValue=Math.floor(Math.random() *12) + 1;
        console.log(cowFourValue);
    
        
    function reset() {    
    cowOneValue=Math.floor(Math.random() *12) + 1;
        console.log(cowOneValue);
    cowTwoValue=Math.floor(Math.random() *12) + 1;
        console.log(cowTwoValue);
    cowThreeValue=Math.floor(Math.random() *12) + 1;
        console.log(cowThreeValue);
    cowFourValue=Math.floor(Math.random() *12) + 1;
        console.log(cowFourValue);
    counterScore=0;
    targetNumber = Math.floor(Math.random() * 120);
    $("#targetNumber").html(targetNumber);
    };


    $(".cowOneImage").on("click", function(){
        counterScore += cowOneValue;
        $("#currentNumber").html(counterScore);
        if (counterScore === targetNumber){
            wins ++;
            counterScore=0;
            $("#wins").html(wins);
            reset();
        }
        else if (counterScore >= targetNumber){
            losses++;
            counterScore=0;
            $("#losses").html(losses);
            reset();
        }
    });

    $(".cowTwoImage").on("click", function(){
        counterScore += cowTwoValue;
        $("#currentNumber").html(counterScore);
        if (counterScore === targetNumber){
            wins ++;
            counterScore=0;
            $("#wins").html(wins);
            reset();
        }
        else if (counterScore >= targetNumber){
            losses++;
            counterScore=0;
            $("#losses").html(losses);
            reset();
        }
    });

    $(".cowThreeImage").on("click", function(){
        counterScore += cowThreeValue;
        $("#currentNumber").html(counterScore);
        if (counterScore === targetNumber){
            wins ++;
            counterScore=0;
            $("#wins").html(wins);
            reset();
        }
        else if (counterScore >= targetNumber){
            losses++;
            counterScore=0;
            $("#losses").html(losses);
            reset();
        }
    });

    $(".cowFourImage").on("click", function(){
        counterScore += cowFourValue;
        $("#currentNumber").html(counterScore);
        if (counterScore === targetNumber){
            wins ++;
            counterScore=0;
            $("#wins").html(wins);
            reset();
        }
        else if (counterScore >= targetNumber){
            losses++;
            counterScore=0;
            $("#losses").html(losses);
            reset();
        }
    });

    console.log("this is the counterScore " + counterScore);

    function update () {
        $("#currentNumber").html(counterScore);
        $("#wins").html(wins);
        $("#losses").html(losses);
    }

});