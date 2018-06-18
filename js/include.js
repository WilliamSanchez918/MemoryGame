
// DOM READINESS //
document.addEventListener('DOMContentLoaded', function () {
   console.log('the DOM is ready to be interacted with!');   
   myFunction()
});

//CARD LOCATION //
const cardLoc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];    

//CARD SORTING //
function myFunction() {
    cardLoc.sort(function(){
       return Math.random()
      });
   console.log(cardLoc)
}