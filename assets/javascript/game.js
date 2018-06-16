var randChoice;
var crystalOneRndm;
var crystalTwoRndm;
var crystalThreeRndm;
var crystalFourRndm;

//plug in the variable, spits out random number for it
function randNum(differentRand){
   differentRand = Math.ceil(Math.random()*50);
   return differentRand;


}
//assigns random numbers to all the variables
function game(){
randChoice = randNum(randChoice);
crystalOneRndm = randNum(crystalOneRndm);
crystalTwoRndm = randNum(crystalTwoRndm);
crystalThreeRndm = randNum(crystalThreeRndm);
crystalFourRndm = randNum(crystalFourRndm);


}
game();
console.log(randChoice);

$('#randomNum').text(randChoice);
