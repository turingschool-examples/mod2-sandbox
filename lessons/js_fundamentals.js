/*
JS Variables & Data Types Examples

To run the code in this file, run the command:
      node lessons/js_fundamentals.js
*/ 
console.log("js_fundamentals.js is running")


var firstName = 'Ben';
var age = 26;
const isNice = true;

const policeSketchDescription = {
  hair: 'blond',
  eyes: 'brown',
  isTall: false,
  visibleTattoos: 1
}

let favoriteFoods = ['pizza', 'blueberries', 'ice cream', 'sushi']

let partnerName = null;
let jobTitle;

// console.log(jobTitle)






/*
JS Concatenation & Interpolation
*/ 

// var quantity = 3;
// var mythicalCreature = " unicorns";
// var creatureCount = quantity + mythicalCreature;

// console.log(creatureCount)








/*
JS Functions
*/ 







/*
JS Conditionals
*/ 

function identifyCookie(cookie) {
  if (cookie === "chocolate chip") {
    console.log("This cookie is a chocolate chip cookie!");
  } else if (cookie === "oatmeal raisin") {
    console.log("This should not even be called a cookie :(");
  } else {
    console.log("I bet you wish you had a chocolate chip cookie");
  }
}

// identifyCookie("chocolate chip")
// identifyCookie("oatmeal raisin")
// identifyCookie("sugar")

function evaluateSleep(hoursOfSleep) {  
  if (hoursOfSleep < 6) {
    console.log('I am groggy.');
  } else {
    console.log('I feel fantastic!');
  }
}

// evaluateSleep(8)
// evaluateSleep(4)







/*
JS For Loops
*/ 

let points = [7, 3, 0, 14];

function calculateTotalPoints() {
  let counter = 0
  for (let i = 0; i < points.length; i++) {
    counter += points[i]
  }
  return counter
}

// console.log(calculateTotalPoints())