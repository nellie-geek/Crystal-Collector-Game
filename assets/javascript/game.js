var targetScore = ["19", "20", "21", "22", "23", "24", "25"]   //random value assigned - gotta be a better way
var yourScore   //four random values 
var yourCounter = 0;  //int to add values from click event - crystals random value
var wins = 0;
var losses = 0;
var crystalNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var increment = targetScore[Math.XXXX(Math.random())]; //office hours demo used round????



//Click event on crystal image - will add int to your score based on the random value 
// assigned by function
$(".crystal-image").on("click", function() {

    yourCounter += increment; //add crystal values to your score counter

    //logic to win
    if (yourScore === targetScore) {
        wins++
    }
});