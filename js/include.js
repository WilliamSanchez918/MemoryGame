document.addEventListener('DOMContentLoaded', function () {
    tileSummons.create();
    let x = document.getElementById("win");
    console.log("X =" + x);
    document.getElementById("win").style.display = "none";
    document.getElementById("intro").volume = 0.2
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
let setTime = 0;
let m = 0;
let s = 0;
let points = 0;
let totalMoves = 0;
let restart = false;
let rating = "A+";


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
                    ele.classList.toggle("pairA");
                    console.log("PAIR FOUND");
                    // PREVENTS RESET
                    EventRemoval(1);
                    stats.points(20);
                    return
                }    
                ele.classList.toggle("pairA");
        }
        if (element == 3 || element == 4) {
            let totalCount = cardFinder(2)
                if (totalCount == 1 ) {
                    console.log("PAIR FOUND");
                    EventRemoval(2);
                    stats.points(20);
                }    
                ele.classList.toggle("pairB"); 
        }
        if (element == 5 || element == 6) { 
            let totalCount = cardFinder(3)
                if (totalCount == 1 ) {
                    console.log("PAIR FOUND")
                    EventRemoval(3);
                    stats.points(20);
                }    
                ele.classList.toggle("pairC");
        } 
        if (element == 7 || element == 8) {
        let totalCount = cardFinder(4)
                if (totalCount == 1 ) {
                    console.log("PAIR FOUND")
                    EventRemoval(4);
                    stats.points(20);
                }    
                ele.classList.toggle("pairD");     
        }
        if (element == 9 || element == 10) {
        let totalCount = cardFinder(5)
                if (totalCount == 1 ) {
                    console.log("PAIR FOUND")
                    EventRemoval(5);
                    stats.points(20);
                }    
                ele.classList.toggle("pairE");
        }
        if (element == 11 || element == 12) {
            let totalCount = cardFinder(6)
            if (totalCount == 1 ) {
                console.log("PAIR FOUND")
                EventRemoval(6);
                stats.points(20);
            }
            ele.classList.toggle("pairF");
        }
        if (element == 13 || element == 14) {
            let totalCount = cardFinder(7)
                if (totalCount == 1 ) {
                    console.log("PAIR FOUND")
                    EventRemoval(7);
                    stats.points(20);
                }    
                ele.classList.toggle("pairG"); 
        }
        if (element == 15 || element == 16) {
            let totalCount = cardFinder(8)
            if (totalCount == 1 ) {
                console.log("PAIR FOUND")
                EventRemoval(8);
                stats.points(20);
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
        animators.pair(x);
        pairsOverall = pairsOverall + 1;
        x.removeEventListener('click', cardSelect);
        console.log(c)
        //WINNING //
        if (pairsOverall == 16) {
            console.log(pairsOverall);
            let ratingX = rating;
            let pointsX = points;
            let timeX = setTime;
            document.getElementById("restart").style.display = "none";
            setTimeout(function() {winVals(ratingX,pointsX,timeX)}, 4000);
            audioSets.win();
            document.getElementById("win").style.display = "block";
            
            tileSummons.restart();

        } else {
            audioSets.ding();
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
            stats.moves(1);
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

//button click //prompt on restart - simple display = none for #yes, #win .zcard. - or generate elements via func
function showWin() {
    document.getElementById('winRating').textContent = "Rating";
    document.getElementById('winRating').classList.toggle("shake");
    document.getElementById('winPoints').textContent = "Points";
    document.getElementById('winPoints').classList.toggle("shake");
    document.getElementById('winTime').classList.toggle("shake");
    document.getElementById('winTime').textContent = "Time";
    
}

function winVals(ratingX,pointsX,timeX) {
    console.log("Rating:" + ratingX + ". winPoints:" + pointsX + ". Time:" + time)
    document.getElementById('winRating').textContent = ratingX;
    document.getElementById('winRating').classList.toggle("shake");
    document.getElementById('winPoints').textContent = pointsX;
    document.getElementById('winPoints').classList.toggle("shake");
    document.getElementById('winTime').textContent = timeX;
    document.getElementById('winTime').classList.toggle("shake");
    
}

function hideWin() {
    document.getElementById("win").style.display = "none";
    audioSets.intro();
}
// CARD CREATE
function populate(pairSize, softR) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < pairSize; i++){
        let newElement = document.createElement('div');
        let tileLoc = cardLoc[i]
        newElement.innerText = '';
        newElement.classList.add("col");
        if (softR == false) {
            newElement.classList.add("col2")
        }
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
        fragment = null;
}
//////////////END FUNCTION DECLARATIONS /////////////

////////OBJECTS////////////
const stats = {
    timeDefault : function() {
        document.getElementById("time").remove()
        let a = document.getElementById("timeBox");
        let node = document.createElement("H2");
        let text = document.createTextNode(setTime + " T ");
        node.classList.add("text-center", "dropdown", "font-weight-bold", "bg-light");
        node.appendChild(text);
        a.appendChild(node);
        node.id = "time";
        setTime = 0;
        if (animationZ == false) {
            var x = document.getElementById("time").textContent;
            console.log(x);
            }
        
   
    },
    startTime : function(n) {
            setTime = setTime +1;
            let x = setTime;
            if (x == 60) {
                setTime = 0;
                m = m + 1;
            }
            if (x < 10) {
                document.getElementById('time').textContent = m + ":0" + x;
            } else {
                document.getElementById('time').textContent = m + ":" + x;
            }
            document.getElementById('points').classList.add('bg-light')
            document.getElementById('points').classList.remove('combo')
            if (restart == true) {
                window.clearInterval(t)
            } else {
                let t = setTimeout(stats.startTime, 1000);
            }

    },
    points : function(x) {
        points = points + x;
        document.getElementById('points').textContent = points;
        document.getElementById('points').classList.remove('bg-light');
        document.getElementById('points').classList.remove('bg-light');
        document.getElementById("scoreCard").classList.remove('fadein');
        document.getElementById('points').classList.add('combo');
        return points;
    },
    moves : function(x) {
        totalMoves = totalMoves + x;
        document.getElementById('moves').textContent = totalMoves;
        stats.rating(totalMoves);
    },
    rating: function(totalMoves) {
        let x = totalMoves;
        if (x <= 32) {
            rating = "A+";
        } else if (x <= 48) {
            rating = "B+";
        } else if (x <= 64) {
            rating = "B-";
        } else if (x <= 80) {
            rating = "C-";
        } else rating = "F--"
        document.getElementById('rating').textContent = rating;

    }
}
//ANIMATIONS
const animators = {
    topTrans : function() {
        if (topTranz == false) {
            document.getElementById("top").style.display = "block";
            let temp = document.getElementById("top")
            temp.classList.add("topTrans");
            document.getElementById("card").classList.add("glow");
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
        let roundPoints = points;
        audioSets.pause();
        let x = document.getElementById("card");
        x.classList.toggle("glow");
        x.classList.add("hidden");
        animationZ = false;
        topTranz = true;
        botTranz = true;
        document.getElementById("restart").style.display = "block";
        
        animators.botTrans();
        animators.topTrans();
        stats.timeDefault();
        animators.stats();
    
        audioSets.start();

        //card effect loop //
        debufLoop();

        //win screen default
        showWin()

    },
    cardshaker: function(ele) {
        const totalCount = document.querySelectorAll(".inUse");
        let tally = totalCount.length;
        if (tally > 1) {
            animationZ = true;
            for (let d = 1; d <= 16; d++) {
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
    pair: function(x) {
        let a = x;
        console.log("PAIR: A VAL: " + a)
        let fragment = document.createDocumentFragment();
        let newElement = document.createElement('div');
        let newH2 = document.createElement('h2');
        newH2.classList.add("text-primary")
        newH2.innerText = '+10!';
        newElement.appendChild(newH2);
        newElement.classList.add("like", "font-weight-bold");
        newElement.id = 00;
        fragment.appendChild(newElement);
        a.appendChild(fragment);
    },
    stats: function() {
        setTimeout(function() { 
            document.getElementById("scoreCard").classList.remove("hidden");
            document.getElementById("scoreCard").classList.add("fadein");
            document.getElementById("points").classList.add("statusBox1");
            document.getElementById("time").classList.add("statusBox1");
            stats.startTime();
            }, 1000);
        setTimeout(function() {
            document.getElementById("scoreCard").classList.remove("fadein")
        }, 2000);

    },
    statsToggle: function(){
        document.getElementById("scoreCard").classList.add("hidden");
        document.getElementById("scoreCard").classList.remove("fadein");
        document.getElementById("points").classList.remove("statusBox1");
        document.getElementById("time").classList.remove("statusBox1");
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
    create : function (e,) {
        pairSize = 16;
        y = cardLoc;
        restart = false;
        totalMoves = 0;
        rating = "A+";

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
        softR = false;

        // REVEAL //
        console.log('the DOM is ready to be interacted with!'); 
        setTimeout(function() { 
            document.getElementById("card").style.display = "block";
            document.getElementById("container").style.display = "block"; 
            }, 1000);
            
        

        },
        
    restart : function () {
        setTime = 0;
        document.getElementById("win").style.display = "block";
        m = 0;
        s = 0;
        restart = true;
        //VALUE RESET
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
        animators.statsToggle();
        //CYCLING CARDS
        for (a = 1; a <= 16; a++) {
            let d = document.getElementById(a);
            console.log(d);
            d.parentElement.removeChild(d);  
            }
        let e = true;
        setTimeout(function() { tileSummons.create(e); }, 1000);

    },
    softReset : function () {
        document.getElementById('time').textContent = "0:00";
        document.getElementById('rating').textContent = "A++";
        document.getElementById('moves').textContent = "0";
        setTime = 0;
        m = 0;
        s = 0;
        pairsOverall = 0;
        restart = true;
        t = false;
        x = null;
 
        softR = true
        for (a = 1; a <= 16; a++) {
            let d = document.getElementById(a);
            console.log(d);
            d.parentElement.removeChild(d);  
            }
        let e = true;
        tileSummons.create(e, softR)

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
        document.getElementById("begin").volume = 0.2;
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
        },
    win : function () {
        document.getElementById("winning").volume = .2;
        document.getElementById("winning").play();
    }



}


function myEndFunction(b, ele) {
    b.removeEventListener("animationend", myEndFunction);
    console.log("ANIMATION COMPLETE")
    cardChecker(ele);
}
