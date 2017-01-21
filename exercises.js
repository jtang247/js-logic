/*
If statements - Evaluates (or checks) a condition. If the condition is true, any statements in the subsequent code block are executed
*/
var today = new Date();

if(today === "Friday"){
  console.log("Let's Party!");
}

/*
If/else statements = Evaluates (or checks) a condition. If the condition is true, the first code block is executed. If the condition is false, the second code block is executed instead.
*/

if(today === "Friday"){
  console.log("Let's Party!");
}else{
  console.log("Get back to coding!");
}


/*
 * #1
 * Function - canVote
 * Create a function named `canVote` which will take a parameter: `age`.
 *
 *  @param Datatype: Number `age`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is equal to or greater than Hawaii's voting age. Console.log your result.
*/

var votingAgeThreshold = 18;

function canVote(age){
  return age>=votingAgeThreshold;
}
console.log(canVote(19));
 
 /*
 * #2
 * Function - login
 * Create a function named `login` which will take a parameter: `password`.
 *
 *  @param Datatype: String `password`
 *  @return Datatype: String
 *
 * The function will return the message: "Login Success!", if the string passed into the function is "test1234"
 * Console.log your result.
*/
var pass = "test1234";

function login(password){
  if(password==="test1234"){
    return "Login Success!";
  }
  else{
    return false;
  }
}
console.log(login(pass));

/*
 * #3
 * Function - isGreaterThan
 * Create a function named `isGreaterThan` which will take two parameters: `first` and `second`
 *
 *  @param Datatype: Number `first`
 *  @param Datatype: Number `second`
 *  @return Datatype: Boolean
 *
 * The function will return true if the first number is greater than the second.
 * Console.log your result.
*/
var num1 = 8;
var num2 = 4;
function isGreaterThan(first, second){
  return first>second;
}
console.log(isGreaterThan(num1,num2));
/*
 * #4
 * Function - mustBeTrue
 * Create a function named `mustBeTrue` which will take a parameter: `boo`.
 *
 *  @param Datatype: Boolean `boo`
 *  @return Datatype: Boolean
 *
 * The function will return true if the value passed into the function is "true".
 * Console.log your result.
*/
function mustBeTrue(boo){
  return boo===true;
}
console.log(mustBeTrue(isGreaterThan(num1,num2)));

/*
 * #5
 * Function - bigBird
 * Create a function named `bigBird` which will take a parameter: `word`.
 *
 *  @param Datatype: String `word`
 *  @return Datatype: String
 *
 * The function will return the message "Word to Big Bird!", if the string passed into the function is a three-letter word. 
 * Console.log your result.
*/
function bigBird(word){
  if (word.length === 3){
  return "Word to Big Bird!" ;
}
}
console.log(bigBird("dog"));

/*
 * #6
 * Function - isEqual
 * Create a function named `isEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are equal, the function will return the message "You look mahvelous!" Otherwise, return the message: "I don't know who you are anymore." 
 * Console.log your result.
*/
function isEqual(first, second){
  if(first===second){
    return "You look mahvelous!";
  }
  else{
    return "I don't know who you are anymore?";
  }


}
console.log(isEqual("Hanz", "Franz"));


/*
 * #7
 * Function - notEqual
 * Create a function named `notEqual` which takes two parameters: `first` and `second`.
 *
 *  @param Datatype: String `first`
 *  @param Datatype: String `second`
 *  @return Datatype: String
 *
 * If the strings are not equal, the function will return the message "Opposites do attract." Otherwise, return the message: "Cause it's like you're my mirror." 
 * Console.log your result.
*/
function notEqual(first, second){
  if (first===second){
    return "Cause it's like you're my mirror.";
  }
  else{
    return "Opposites do attract";
  }

}
console.log(notEqual("hanz", "franz"));

/*
 * #8
 * Function - spareChange
 * Create a function named `spareChange` which takes a parameter: `money`.
 *
 *  @param Datatype: Number `money`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed into the function is greater than 100, otherwise it will return false.
 * Console.log your result.
*/ 
function spareChange(money){
  if(money >100){
    return true;
  }else{
    return false;
  }
}
console.log(spareChange(50));
/*
 * #9
 * Function - dirty30
 * Create a function named `dirty30` which takes three parameters: `one`, `two` and `three`.
 *
 *  @param Datatype: Number `one`
 *  @param Datatype: Number `two`
 *  @param Datatype: Number `three`
 *  @return Datatype: Boolean
 *
 * The function will return true if the sum of all the number values is greater than 30, otherwise it will return false.
 * Console.log your result.
*/ 
function dirty30(one,two,three){
  if(one+two+three>30){
    return true;
  }else{
    return false;
  }
}
console.log(dirty30(2,2,27));

/*
 * #10
 * Function - evenStevens
 * Create a function named `evenStevens` which takes a parameter: `num`.
 *
 *  @param Datatype: Number `num`
 *  @return Datatype: Boolean
 *
 * The function will return true if the number passed in is an even integer, otherwise it will return false.
 * Console.log your result.
*/ 
function evenStevens(num){

  if(num%2===0){
    return true;
  }else{
    return false;
  }
}
console.log(evenStevens(-6));
/*
 * #11
 * Function - daClub
 * Create a function named `daClub` which takes two parameters: `cover` and `age`.
 *
 *  @param Datatype: Number `cover`
 *  @param Datatype: Number `age`
 *  @return Datatype: String
 *
 * If BOTH values are 21 or over, the function will return the message: "Welcome to the Legends Lounge." Otherwise, it will return the message: "Chuck E Cheese is across the street."
 * Console.log your result.
*/ 
function daClub(cover, age){

  if (age&&cover>=21){
    return "Welcome to the Legends Lounge";
  }else{
    return "Chuck E Cheese is across the Street";
  }
}
console.log(daClub(20,21));

/*
 * #12
 * Function - graduation
 * Create a function named `graduation` which takes two parameters: `credits` and `thesis`.
 *
 *  @param Datatype: Number `credit`
 *  @param Datatype: Boolean `thesis`
 *  @return Datatype: String
 *
 * If EITHER the number value is greater than or equal to 120 or the boolean value is true, then the function will return the message: "Congratulations on a job well done." Otherwise, return the message: "See you in summer school."
 * Console.log your result.
*/ 
function graduation(credits, thesis){

  if(credits>=120||thesis===true){
    return "Congratulations on a job well done!";
  }else{
    return "See you in summer school.";
  }
}
console.log("grad "+graduation(111,true));
/*
 * #13
 * Function - moneyTrain
 * Create a function named `moneyTrain` which takes a parameter: `speed`.
 *
 *  @param Datatype: Number `speed`
 *  @return Datatype: String
 *
 * The function will return the message: "You are riding Honolulu's Rail.", if the number value is less than 50, otherwise it will return the message: "You are riding an Amtrak.", if the number value is less than 100, and return the message: "Now you ballin' in the Shinkansen!", if the number value is greater than or equal to 100.
 * Console.log your result.
*/ 
function moneyTrain(speed){
  if(speed<50){
    return "You are riding Honolulu's Rail.";
}else if(speed<100){
  return "You are riding an Amtrak";
}else{
  return "Now you ballin' in the Shinkansen!";
}
}
console.log("Speed 1 "+moneyTrain(26));
console.log("Speed 2 "+moneyTrain(51));
console.log("Speed 3 "+moneyTrain(101));

/*
 * #14
 * Function - buyDoughnut
 * Declare a variable named `budget` and assign it with a number value that is greater than 20.
 * Declare a variable named `doughnutPrice` and assign it with a number value that is greater than 0 but less than 6.
 * Declare a variable named `doughnutBought` and assign it with a number value of 0.
 *
 * Create a function named `buyDoughnut` which takes NO parameters.
 * When the function is invoked, the budget will be decreased by the doughnutPrice and doughnutBought will increase by 1.
 * Console.log budget and doughnutBought.
 * Invoke your function again.
 * Console.log budget and doughnutBought again.
*/ 
  var budget=100;
  var doughnutPrice=5 ;
  var doughnutBought=0;
function buyDoughnut(){
  if(budget>=doughnutPrice){
    budget-+ doughnutPrice ;
    doughnutBought++;
  }
}
buyDoughnut();
console.log("budget = "+budget+" bought = "+doughnutBought);

/*
For loops - A for loop checks a condition a specific number of times and allows us to execute a code block and evaluate a condition to determine if our loop should run again.

The for loop is made up for 3 parts:

1) Initialization (i.e. var i = 0;)
2) Condition (i.e. i<arr.length;)
3) Update (i.e. i++)
*/

var toyotaModels = ["Corolla", "Prius", "4 Runner", "Camry", "Land Cruiser"];

for (var i = 0; i<toyotaModels.length; i++){
   console.log("Toyota " + toyotaModels[i]);
}


/* 
 * #15
 * Create a for loop that will iterate 5 times and console.log the following:
 * "Player: 1"
 * "Player: 2"
 * "Player: 3"
 * "Player: 4"
 * "Player: 5"
*/
var fun=["BBALL", "FBALL", "SOCCER", "BASEBALL", "GOLF" ];

for (var i=0; i<fun.length; i++){
  console.log("Player 1 " +fun[i]);
  console.log("Player 2 " +fun[i]);
  console.log("Player 3 " +fun[i]);
  console.log("Player 4 " +fun[i]);
  console.log("Player 5 " +fun[i]);

}


/* 
 * #16
 * Create a for loop that will iterate and console.log each item in the array below:
*/
  var myFavFoods = ["lemon bar", "carrot cake", "nachos", "bacon cheeseburger", "ramen", "sweet potato fries", "chimichanga"];
for(var i=0; i<myFavFoods.length; i++){
  console.log(myFavFoods[i]);

}

/*
 * #17
 * Function - sumItUp
 * Declare a variable named `numArray` and assign it with an array of 5 random numbers of your choice.
 * Declare a variable named `total` and assign it with a number value of 0.
 * 
 * Create a function named sumItUp which takes a parameter: `arr`.
 * 
 *   @param Datatype: Array `arr`
 *   @return Datatype: Number
 * 
 * The function will loop through and add up all the values in the array that is passed into the function and return the total.
 * Console.log your result.
*/
var numArray=[3,5,7,9,11];
var total=0;
function sumItUp(arr){
  for(var i=0; i<arr.length; i++){
    total+=arr[i];
  }
  return total;
}
console.log(sumItUp(numArray));

/*
 * #18
 * Function - allStars
 * Create a function named `allStars` which takes a parameter: `ballers`.
 *
 *  @param Datatype: Array `ballers`
 *  @return Datatype: Array
 *
 * The function will loop through the players array and will put all the even number indexed players in the `east` array and the rest in the `west` array.
 * Console.log both the east and west arrays.
*/ 

  var players = ["LeBron", "Linsanity", "Kawhi", "Kobe", "Yao Ming", "Bird", "Jordan"];
  var east = [];
  var west = [];

function allStars(ballers){
  for(i=0;i<7;i++){
    if(i%2===0){
      east.push(ballers[i]);
    }
    else { 
      west.push(ballers[i]);
  }
 }
}
allStars(players);
console.log(west);
console.log(east);
/*
 * #19
 * Function - subways
 * Create a function named `subways` which takes a parameter: `special`.
 *
 *  @param Datatype: Array `special`
 *  @return Datatype: Array
 *
 * The function will loop through the array value and replace all the odd numbered indexed items with "Classic Tuna".
 * Console.log your results.
*/ 

  var subOftheDay = ["Teriyaki Chicken", "Spicy Italian", "Turkey", "BMT", "Black Forest Ham", "Meatball Marinara", "Veggie"];

  function subways(special){

    for(var i=0;i<special.length;i++){
      if(i%2===1){
        special[i]= "Classic Tuna";
      }
    }
    return special;
  }
console.log(subways(subOftheDay)+" - Exercise 19");

/*
Final Boss
 * #20
 * Function - removeLetter
 * Create a function named `removeLetter`, which takes a parameter `str`. 
 *
 *   @param Datatype: String `str`
 *   @return Datatype: Array
 *
 *  The function will loop through the string value and put all the letters into an array, except for the letter "A" and "a". We don't want no stinking "A" or "a" in our array. Test your function with the `phrase` below!
*/

  var phrase = "An apple a day keeps Alice feeling awesome"; 

function removeLetter(str){
  var newPhrase=[];
  for(var i=0;i<str.length;i++){
    if(!(str.charAt(i)==="a"||str.charAt(i)==="A")){
      newPhrase.push(str.charAt(i));
  } 
 }
    return newPhrase;
}
console.log(removeLetter(phrase));

// function removeLetter(str) {
//   var newPhrase = [];
//   for (i=0;i<str.length;i++) {
//     if (!(str.charAt(i) === "a" || str.charAt(i) === "A")) {
//       newPhrase.push(str.charAt(i));
//     }
//   }
//   return newPhrase;
// }

// console.log(removeLetter(phrase) + " - Exercise 20");





