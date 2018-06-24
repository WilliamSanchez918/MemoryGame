document.addEventListener('DOMContentLoaded', function () {
    tileSummons.create();
    document.getElementById("begin").volume = 0.2
    document.getElementById("start").addEventListener("click", animators.hideTrans);
;
    
});

//CARD LOCATIONS AND STARTING VALS

const cardLoc = [];
const definedPairs = [];
let pairSize = 0;   
let pairsOverall = 0;
let t = false;
let animationZ = true;
let botTranz = false;
let topTranz = false;
let totalScore = 0;


////////////// FUNCTION DECLARATIONS /////////////

function sizeCalc(y) {
    let x = pairSize;
    let i = 1;
    while (i <= x) {
      y.push(i);
      if (i == 2 || i == 4 || i == 6 || i == 8 || i == 10 || i == 12 || i ==14 || i == 16) {
          let y = i / 2;
          definedPairs.push(y);
      };
      i++;
    }
}
//CARD SORTING //
function tileSort() {
    cardLoc.sort(function(a, b){
       return 0.5 - Math.random();
      });
}

function pairSort() {
    definedPairs.sort(function(a, b){
        return 0.5 - Math.random();
       });
 }

function debufLoop() {
    let x = document.querySelectorAll(".col2").length;
    for (a = 1; a <= x; a++) {
            y=document.getElementById(a);
            console.log(y)
            y.classList.remove("col2");            
    }
}

//PAIR BINDING FUNCTION //
// t false value is passed to unmatched pairs //
// t true value, ele, and element values are passed to matching pairs//

function pairBinding(t, ele, element) {
    animationZ = false;
    if (t == false) {
        let a = document.querySelectorAll(".col").length;
        for (let d = 1; d <= a; d++) {
            let x = d;
            let b = document.getElementById(d);
            b.classList.remove("colShake");
            b.classList.remove("col2")
            console.log("Element ID: " + b);
            if (b.classList.contains("inUse")) {
                b.classList.toggle("inUse");
                if (x == 1 || x == 2) {
                    b.classList.toggle("pairA");
                } else if (x == 3 || x == 4) {
                    b.classList.toggle("pairB");
                } else if (x == 5 || x == 6 ) {
                    b.classList.toggle("pairC");
                } else if (x == 7 || x == 8) {
                    b.classList.toggle("pairD");
                } else if (x == 9 || x == 10) {
                    b.classList.toggle("pairE");
                } else if (x == 11 || x == 12) {
                    b.classList.toggle("pairF");
                } else if (x == 13 || x == 14) {
                    b.classList.toggle("pairG");
                } else if (x == 15 || x == 16) {
                    b.classList.toggle("pairH");
                }
            }
        }
    } else {
        if (element <= 2) {
            let totalCount = cardFinder(1)
                // if total count returns true: a pair is found - ref cardFinder(x) func //
                if (totalCount == 1 ) {
                    audioSets.ding();

                    ele.classList.toggle("pairA");
                    console.log("PAIR FOUND");
                    EventRemoval(1);
                    // PREVENTS RESET
                    return
                }    
                ele.classList.toggle("pairA");
        }
        if (element == 3 || element == 4) {
            let totalCount = cardFinder(2)
                if (totalCount == 1 ) {
                    audioSets.ding();
                    console.log("PAIR FOUND");
                    EventRemoval(2);
                }    
                ele.classList.toggle("pairB"); 
        }
        if (element == 5 || element == 6) { 
            let totalCount = cardFinder(3)
                if (totalCount == 1 ) {
                    audioSets.ding();
                    console.log("PAIR FOUND")
                    EventRemoval(3);
                }    
                ele.classList.toggle("pairC");
        } 
        if (element == 7 || element == 8) {
        let totalCount = cardFinder(4)
                if (totalCount == 1 ) {
                    audioSets.ding();
                    console.log("PAIR FOUND")
                    EventRemoval(4);
                }    
                ele.classList.toggle("pairD");     
        }
        if (element == 9 || element == 10) {
        let totalCount = cardFinder(5)
                if (totalCount == 1 ) {
                    audioSets.ding();
                    console.log("PAIR FOUND")
                    EventRemoval(5);
                }    
                ele.classList.toggle("pairE");
        }
        if (element == 11 || element == 12) {
            let totalCount = cardFinder(6)
            if (totalCount == 1 ) {
                audioSets.ding();
                console.log("PAIR FOUND")
                EventRemoval(6);
            }
            ele.classList.toggle("pairF");
        }
        if (element == 13 || element == 14) {
            let totalCount = cardFinder(7)
                if (totalCount == 1 ) {
                    audioSets.ding();
                    console.log("PAIR FOUND")
                    EventRemoval(7);
                }    
                ele.classList.toggle("pairG"); 
        }
        if (element == 15 || element == 16) {
            let totalCount = cardFinder(8)
            if (totalCount == 1 ) {
                audioSets.ding();
                console.log("PAIR FOUND")
                EventRemoval(8);
            }    
            ele.classList.toggle("pairH");
            }
    }

}

// CARD PAIR TRACKER//
function cardFinder(a) {
    if (a == 1 ) {
        const pair = document.querySelectorAll(".pairA");
        let pairCount = pair.length;
        return pairCount
    } 
    if (a == 2) {
        const pair = document.querySelectorAll(".pairB");
        let pairCount = pair.length;
        return pairCount
    }
    if (a == 3) {
        const pair = document.querySelectorAll(".pairC");
        let pairCount = pair.length;
        return pairCount
    }
    if (a == 4) {
        const pair = document.querySelectorAll(".pairD");
        let pairCount = pair.length;
        return pairCount
    }
    if (a == 5) {
        const pair = document.querySelectorAll(".pairE");
        let pairCount = pair.length;
        return pairCount
    }
    if (a == 6) {
        const pair = document.querySelectorAll(".pairF");
        let pairCount = pair.length;
        return pairCount
    }
    if (a == 7) {
        const pair = document.querySelectorAll(".pairG");
        let pairCount = pair.length;
        return pairCount
    }
    if (a == 8) {
        const pair = document.querySelectorAll(".pairH");
        let pairCount = pair.length;
        return pairCount
    }
}

// CARD CHECKER - Checks if unmatched cards == 2 (if so a reset for both cards is issued) //
function cardChecker(ele) {
    const totalCount = document.querySelectorAll(".inUse");
    let tally = totalCount.length;
    console.log(ele)
    console.log("Tally: " + tally)
    if (tally > 1 ) {
            t = false;
            pairBinding(t);
        }
    }

//REMOVE EVENT LISTENERS FOR PAIRS & Winning Check //
function EventRemoval(a) {
    let b = a * 2 - 1
    for (c = a * 2; c >= b; c--) {
        x = document.getElementById(c);
        x.classList.add("paired");
        x.classList.remove("inUse");
        pairsOverall = pairsOverall + 1;
        x.removeEventListener('click', cardSelect);
        console.log(c)
        //WINNING //
        if (pairsOverall == 16) {
            console.log(pairsOverall);
            alert();
            tileSummons.restart();
        }
    }
}

//Card EVENT LISTENER FUNC -  Select //
function cardSelect() {
    if (animationZ == false) {
        let stopFunc = false;
        let element = this.id;
        console.log(element);
        let ele = document.getElementById(element);
        if (ele.classList.contains("inUse")) {
            return console.log("Card Already Flipped")
        } else {
            ele.classList.toggle("inUse");
            // CHECK 1
            t = true;
            pairBinding(t, ele, element)
            
            // IF NO PAIR IS FOUND ISSUE RESET IF 2 UNMATCHING CARDS ARE SELECTED //
            if (stopFunc == false) {
                animators.cardshaker(ele)
                // setTimeout(function() { cardChecker(ele) }, 2500); //
            } else {
                return;
            }
        }
    }
}
// CARD CREATE
function populate() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < pairSize; i++){
        const newElement = document.createElement('div');
        let tileLoc = cardLoc[i]
        newElement.innerText = '';
        newElement.classList.add("col");
        newElement.classList.add("col2")
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
                            tracker.appendChild(fragment);
                            }
        }
}
//////////////END FUNCTION DECLARATIONS /////////////

////////OBJECTS////////////

//ANIMATIONS
const animators = {
    topTrans : function() {
        if (topTranz == false) {
            document.getElementById("top").style.display = "block";
            let temp = document.getElementById("top")
            temp.classList.add("topTrans");
            temp.classList.remove("hidden");
        } else {
                let temp = document.getElementById("top")
                temp.classList.add("hidden");
                setTimeout(() => {
                temp.classList.remove("topTrans")
                
                }, 3000);
        }
    },
    botTrans : function() {
        if (botTranz == false) {
            document.getElementById("bot").style.display = "block";
            let temp = document.getElementById("bot")
            temp.classList.add("botTrans");
            temp.classList.remove("hidden");
        } else {
            let temp = document.getElementById("bot")
            temp.classList.add("hidden");
            setTimeout(() => {
                temp.classList.remove("botTrans")
                
            }, 3000);
        }
    },
    hideTrans : function() {
        audioSets.pause();

        let x = document.getElementById("card");
        x.classList.add("hidden");
        animationZ = false;
        topTranz = true;
        botTranz = true;
        
        animators.botTrans();
        animators.topTrans();
    
        audioSets.start();

        //card effect loop //
        debufLoop();

    },
    cardshaker: function(ele) {
        const totalCount = document.querySelectorAll(".inUse");
        let tally = totalCount.length;
        if (tally > 1) {
            animationZ = true;
            for (let d = 1; d <= 16; d++) {
                let x = d;
                let b = document.getElementById(d);
                console.log("Element ID: " + b);
                if (b.classList.contains("inUse")) {
                    b.classList.add("colShake");
                    audioSets.buzz();
                    setTimeout(function() { b.addEventListener("animationend", myEndFunction(b, ele))}, 1000);
                    }
                }
            }

    },
    pair: function() {

    }
}

//ROW PlACEMENT
const parentIdNumber = {
    1 : function() {document.getElementById("row1")},
    2 : function() {document.getElementById("row2")},
    3 : function() {document.getElementById("row3")},
    4 : function() {document.getElementById("row4")},
}

//TILE CREATION
const tileSummons = {
    create : function (e) {
        pairSize = 16;
        y = cardLoc;

        //calculates correct tile/pair matching and randomizes tiles //
        if (e == false || e == undefined) {
            sizeCalc(y);
        }
        
        tileSort();
        pairSort();

         // HIDE ELEMENTS BELOW //
         document.getElementById("container").style.display = "none";
         document.getElementById("bot").style.display = "none";
         document.getElementById("top").style.display = "none";

         animators.topTrans();
         animators.botTrans();


        // Tile Population //
        populate(pairSize)

        // REVEAL //
        console.log('the DOM is ready to be interacted with!'); 
        setTimeout(function() { 
            document.getElementById("card").style.display = "block";
            document.getElementById("container").style.display = "block"; 
            audioSets.intro();
            }, 1000);
            
        

        },
        
    restart : function () {
        //VALUE RESET
        audioSets.intro();
        pairsOverall = 0;
        t = false;
        //prevents event handler from firing in standby mode//
        animationZ = true;
        botTranz = false;
        topTranz = false;
        let x = document.getElementById("card");
        x.classList.remove("hidden");
        x = null;

        animators.topTrans();
        animators.botTrans();
        //CYCLING CARDS
        for (a = 1; a <= 16; a++) {
            let d = document.getElementById(a);
            console.log(d);
            d.parentElement.removeChild(d);  
            }
        let e = true;
        setTimeout(function() { tileSummons.create(e); }, 1000);

    }
}

// AUDIO
const audioSets = {
    ding : function () {
        document.getElementById("ding").play();
        document.getElementById("ding").volume = 0.2;
        },
    buzz : function () {
        document.getElementById("buzzer").play();
        },
    intro : function () {
        document.getElementById("intro").play();
        document.getElementById("intro").volume = 0.1;

        },
    start : function () {
        document.getElementById("begin").volume = 0.2
        document.getElementById("begin").play();
        
        },
    pause : function () {
        for (let a = 0; a <= 3; a++) {
            if (a == 1) {
                document.getElementById("ding").pause();
            } else if (a == 2) {
                document.getElementById("buzzer").pause();
            } else if (a == 3) {
                document.getElementById("intro").pause();
            } else {
                document.getElementById("begin").pause();
            }
        }
        }



}


function myEndFunction(b, ele) {
    b.removeEventListener("animationend", myEndFunction);
    console.log("ANIMATION COMPLETE")
    cardChecker(ele);
}
