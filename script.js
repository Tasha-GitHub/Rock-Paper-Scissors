

var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer Choice: " + computerChoice);

var compare = function (choice1, choice2)
{if (choice1 === choice2)
    {return("The result is a tie!");}
       
     else if (choice1 === "rock") {
         if (choice2==="scissors")
          {return("rock wins");}
          else  
        {return("paper wins");}}  
            
      
      else if (choice1 === "paper") {
          if (choice2==="rock")    
     {return("paper wins");}     
      else            
     {return("scissors wins");}}
     
    
    
     else if (choice1 === "scissors"){
         if (choice2==="rock")
    {return("rock wins");}
     else       
     {return("scissors wins");}}
     
           
        };



document.getElementById( "rckimg" ).onclick = function(uchoice) {
var userChoice= "rock"
 var result = compare(userChoice,computerChoice)
  alert("Computer choice was: " + computerChoice + ", your choice was: " + userChoice + ", " + result)
  console.log(userChoice)

};
document.getElementById( "pprimg" ).onclick = function(uchoice) {
var userChoice= "paper"
  var result = compare(userChoice,computerChoice)
  alert("Computer choice was: " + computerChoice + ", your choice was: " + userChoice + ", " + result)
  console.log(userChoice)
};
document.getElementById( "scsimg" ).onclick = function(uchoice) {
var userChoice= "scissors"
var result = compare(userChoice,computerChoice)
  alert("Computer choice was: " + computerChoice + ", your choice was: " + userChoice + ", " + result)
  console.log(userChoice)
};


