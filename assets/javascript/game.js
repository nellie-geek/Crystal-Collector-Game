    //array 19-120 to set target score 
var targetScore = Math.floor(Math.random() * 102) + 19;

    //Game starts with these at 0
var yourScore = 0; 
var wins = 0;
var losses = 0;
$(".your-score-text").text("0");
$("#win").text(wins);
$("#lost").text(losses);

    //Values for crystals to randomly be assigned
var crystalNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
function crystalValue() {
    return (Math.floor(Math.random() * crystalNum.length + 1));

}

var crystal1 = crystalValue(crystalNum);
var crystal2 = crystalValue(crystalNum);
var crystal3 = crystalValue(crystalNum);
var crystal4 = crystalValue(crystalNum);

$(".target-score-text").text(targetScore);

    // Game reset - assign new crystal value, yourscore and targetscore set to 0
function startNew() { 

    crystal1 = crystalValue(crystalNum);
    crystal2 = crystalValue(crystalNum);
    crystal3 = crystalValue(crystalNum);
    crystal4 = crystalValue(crystalNum);
    $(".your-score-text").text("0");
    yourScore = 0;
    targetScore = Math.floor(Math.random() * 102) + 19;
    $(".target-score-text").text(targetScore);

}

    //Click event on crystal image - will add int to your score based on the random value 
    // assigned by function
$(".crystal").on("click", function() {
    var crystalClicked=$(this).attr("id");
    
    if (crystalClicked === "crystal-1") {
        yourScore += crystal1;

    } else if (crystalClicked === "crystal-2") {
        yourScore += crystal2;

    } else if (crystalClicked === "crystal-3") {
        yourScore += crystal3;

    } else if (crystalClicked === "crystal-4") {
        yourScore += crystal4;

    }

        //logic to win
        if (yourScore === targetScore) {
            alert("You win!");
            wins++;
            $("#win").text(wins);
            startNew();
            return;
                
        } else if (yourScore > targetScore) { 
            alert("Too many, try again.");
            losses++;
            $("#lost").text(losses);
            startNew();
            return;
            }
   
    $(".your-score-text").text(yourScore);
    yourScore(increment); 
        //increment will throw an undefined error however, without this my crystals will assign a 
        //different value with every click/will be going over during office hour and with tutor 

    


   

});