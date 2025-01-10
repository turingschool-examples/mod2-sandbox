/*
  node practice_sessions/scope.js
*/ 
console.log("scope.js is running")




//Example 1
const hungriestDog = 'Tess';

function begForTreats(seconds) {
  const result = seconds * 2;

  if (result > 5) {
    return 'This human is rude, not giving me treats. Onto the next one.';
  } else {
    return 'Yum, human food!';
  }
}

let beggingTime = 1;

let beg = begForTreats(beggingTime);

beggingTime = 4;
console.log(beg)










//Example 2
/*
function buildLaser () {  
  var message = 'Laser Built';  
  console.log(message);
}

function buildMoonBase () {  
  var message = 'Moon Base Built';  
  buildLaser();
  console.log(message);
}

function ransomTheWorld () {
  buildMoonBase();  
}

ransomTheWorld();
*/









//Example 3
/*
const moo = mooLikeACow();

function mooLikeACow() {
  return 'Moooo!';
}

console.log('Animal Sound: ', moo);

*/ 






// Example 4
/*
var modTwoTeachers = ['Hannah', 'Nik', 'Leta'];

function calculateEvals (teachers, classSize) {
  return classSize / teachers.length;
}

var numEvals = calculateEvals(modTwoTeachers, currentCohort);

var currentCohort = 33;
console.log(numEvals);

let modTwoTeachers = ['Hannah', 'Nik', 'Leta'];

function calculateEvals (teachers, classSize) {
  return classSize / teachers.length;
}

let numEvals = calculateEvals(modTwoTeachers, currentCohort);

let currentCohort = 33;
console.log(numEvals);
*/