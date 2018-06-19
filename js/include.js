
// DOM READINESS //
document.addEventListener('DOMContentLoaded', function () {
    // SORT CALL //
    tileSort()
   document.getElementById("container").style.display = "none";
   const fragment = document.createDocumentFragment();
   
   // Tile Creation //
   for (let i = 0; i < 16; i++){
       const newElement = document.createElement('div');
       let tileLoc = cardLoc[i]
       newElement.innerText = '';
       newElement.classList.add("col");
       newElement.id = tileLoc;
       
       //EVENT LISTENERS //
       newElement.addEventListener("click", cardSelect)
       fragment.appendChild(newElement);
       if (i < 4) {
        const tracker = document.querySelector('#row1');
        //APPEND TO BODY //
        tracker.appendChild(fragment)  
       } else if (i < 8) {
        const tracker = document.querySelector('#row2');
        tracker.appendChild(fragment)
       } else if (i < 12) {
        const tracker = document.querySelector('#row3');
        tracker.appendChild(fragment)
       } else {
        const tracker = document.querySelector('#row4');
        tracker.appendChild(fragment)
       }
    }
    document.getElementById("container").style.display = "block";
    console.log('the DOM is ready to be interacted with!');
});



//CARD LOCATION
const cardLoc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];   
const pairsLoc = [1, 2, 3, 4]


//CARD SORTING //
function tileSort() {
    cardLoc.sort(function(a, b){
       return 0.5 - Math.random();
      });
   console.log(cardLoc);
}

//Card Select //
function cardSelect() {
    let element = this.id;
    let ele = document.getElementById(element);
    if (element <= 2 ) {
        ele.classList.toggle("pairA");
    } else if (element <= 4) {
        ele.classList.toggle("pairB");
    } else if (element <= 6) {
        ele.classList.toggle("pairC");
    } else if (element <= 8) {
        ele.classList.toggle("pairD");
    } else if (element <= 10) {
        ele.classList.toggle("pairE");
    } else if (element <= 12) {
        ele.classList.toggle("pairF");
    } else if (element <= 14) {
        ele.classList.toggle("pairG");
    } else ele.classList.toggle("pairH");
    return console.log(element);
}