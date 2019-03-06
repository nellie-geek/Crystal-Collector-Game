//array 19-120 to set target score 
var targetScore = Math.floor(Math.random() * 100 - 19)
//player starts at 0
var yourScore = 0; 
//four random values//int to add values from click event - crystals random value
var yourCounter = 0;

var wins = 0;
var losses = 0;
//Values for crystals to randomly be assigned
var crystalNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var increment = yourScore[Math.floor(Math.random())]; 



//Click event on crystal image - will add int to your score based on the random value 
// assigned by function
$(".crystal-image").on("click", function() {

    
    
    
    yourCounter += increment; //add crystal values to your score counter

    //logic to win
    if (yourScore === targetScore) {
        wins++
    }
});