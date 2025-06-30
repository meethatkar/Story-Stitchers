import { getEasyStories } from "./stories.js";

let timerSecond = 0;
let timerMinute = 0;


let mainDiv = document.getElementById("main-story");
let selectionCounter = 0;
var randomStoryNumber = 0;

var stories = [];

// INTRO OR RULES PAGE, APPEAR AT START
var startRulesDiv = document.querySelector("#rules");
var startGameBtn = document.getElementById("startGame");


// getting level and stories
let level = sessionStorage.getItem("level");
// console.log(level);
if (level == "easy") {
    stories = getEasyStories();
    timerSecond = 20;
    timerMinute = 1;
}
else if (level == "medium") {
    timerSecond = 40;
    timerMinute = 1;
}
else if (level == "hard") {
    timerSecond = 59;
    timerMinute = 1;
}


// TIMER
let interval = null;
function timer() {
    let timerDiv = document.querySelector("#timer p");
    let totalSeconds = timerMinute * 60 + timerSecond;
    interval = setInterval(() => {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        timerDiv.innerText = `Timer-${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (totalSeconds <= 0) {
            if(checkHintSelection()){
                showRedirectionBtn();
            }
            else{
                showUserErrorMsg();
            }
            clearInterval(interval);
            return;
        }
        totalSeconds--;
    }, 1000);
}

// CHECKING ALL HINTS SELECTED OR NOT
function checkHintSelection() {
    let hint = stories[randomStoryNumber].hints;
    let selectedWord = stories[getRandomNumber()].userSelection;
    // console.log(hint);
    // console.log("user selection ", stories[getRandomNumber()].userSelection);
    let hintLen = hint.length;
    let selectionLen = selectedWord.length;
    if (hintLen == selectionLen) {
        return true;
    }
    else {
        return false;
    }
}
document.querySelector("#submit-btn button").addEventListener("click", (event) => {
    if (checkHintSelection()) {
        clearInterval(interval);
        setTimeout(() => {
            window.location.href = "./display-story/horror-display.html";
        }, 500);    
    }
    else {
        event.preventDefault();
        // REMOVING MAIN_STORY-DIV
        showUserErrorMsg();
    }
})
// showing user error message, div styling, zindex opacity
function showUserErrorMsg(){
    document.querySelector("#main-story").style.opacity = "0";
        document.querySelector("#main-story").style.zIndex = "-1";
        // ADDING USER ERROR DIV
        let incompleteSelectinMsgDiv = document.querySelector("#incomplete-selection");
        incompleteSelectinMsgDiv.style.zIndex = "10";
        incompleteSelectinMsgDiv.style.opacity = "1";
        incompleteSelectinMsgDiv.style.scale = "1";
}
// DIV THAT DISPLAY WHEN TIMES UP AND ALL WORDS ARE SELECTED.
function showRedirectionBtn(){
    document.querySelector("#main-story").style.opacity = "0";
    document.querySelector("#main-story").style.zIndex = "-1";
    document.getElementById("redirection").style.opacity = "1";
    document.getElementById("redirection").style.scale = "1";
    document.getElementById("redirection").style.zIndex = "10";
}

// CLICKED ON RETRY AFTER SUBMITTING INCOMPLETED OUTPUT.
document.querySelector("#retry").addEventListener(("click"),()=>{
    window.location.reload();
})


// RENDER HINT
function renderHints() {
    let hintParent = document.querySelector("#hint-block");
    stories[getRandomNumber()].hints.forEach((hint) => {
        let hintDiv = document.createElement("span");
        hintDiv.innerText = hint;
        window.innerWidth > 756 ? hintDiv.classList.add("hint-desktop") : hintDiv.classList.add("hint-btn")
        hintParent.appendChild(hintDiv);
    })
}

// checking hints clicked.
function checkHintClicked() {
    let ParentDiv = document.querySelector("#hint-block");
    let hintDivs = ParentDiv.children;
    let hintCounter = 0;

    // USED SPREAD OPERATOR BECAUSE HTMLCollection IS NOT AN ARRAY
    // IT LOOKS LIKE ARRAY CAN WE CAN ACCESS ELEMENT USING INDEX, BUT IT NOT INHERIT ALL METHODS OF ARRAY
    // [...hintDivs] converts HTMLCollection to an array.
    [...hintDivs].forEach((hint) => {
        hint.addEventListener("click", () => {
            console.log("clicked:", hint.tagName);
            if (hint.tagName == "SPAN") {
                if (/\d/.test(hint.textContent.slice(0, 3))) {
                    // If hint already has a number, remove it
                    // console.log(hint.textContent.slice(3,hint.textContent.length));
                    hint.textContent = hint.textContent;
                }
                else {
                    stories[getRandomNumber()].userSelection.push(hint.textContent);
                    sessionStorage.setItem("userSelectionArr", stories[getRandomNumber()].userSelection);
                    hint.classList.add("hint-clicked");
                    // If hint does not have a number, add it
                    hintCounter++;
                    hint.textContent = `${hintCounter}. ${hint.textContent}`;
                }
            }
        })
        // YE IDHAR PALCE KIYA HAI CAUSE NEED TO ACCES HINT-DIVS TO CLEAR HIGHLIGHT
        document.querySelector("#reset-btn").addEventListener("click", () => {
            if (/\d/.test(hint.textContent.slice(0, 3))) {
                // If hint already has a number, remove it
                // console.log(hint.textContent.slice(3,hint.textContent.length));
                hint.tagName == "SPAN" ? hint.classList.remove("hint-clicked") : "";
                hint.textContent = hint.textContent.slice(3, hint.textContent.length);
                stories[getRandomNumber()].userSelection = [];
                hintCounter = 0;
            }
        })
    })
}


// RENDER SUMMARY
function renderSummary() {
    let summaryParent = document.querySelector("#summary");
    let summaryDiv = document.createElement("p");
    summaryDiv.innerText = stories[getRandomNumber()].summary;
    window.innerWidth > 765 ? summaryDiv.classList.add("summary-text-desktop") : summaryDiv.classList.add("summary-text");
    summaryParent.appendChild(summaryDiv);
}

// RENDER TITLE
function renderTitle() {
    let titleParent = document.querySelector("#title");
    let titleDiv = document.createElement("h1");
    titleDiv.innerText = stories[getRandomNumber()].title;
    window.innerWidth > 765 ? titleDiv.classList.add("story-title-desktop") : titleDiv.classList.add("story-title");
    titleParent.appendChild(titleDiv);
}


if (window.innerWidth > 765) {
    mainDiv.classList.add("desktop-img");
}
else {
    mainDiv.classList.add("mobile-img");
}

//GET RANDOWM NUMBER
randomStoryNumber = 0;
function getRandomNumber() {
    // console.log("function ", randomStoryNumber);
    sessionStorage.setItem("randomNumber", randomStoryNumber);
    return randomStoryNumber;
}

// RULE DIV APPEAR
startGameBtn.addEventListener("click", () => {
    window.innerWidth < 765 ? startRulesDiv.style.transform = "translateY(-100%)" : startRulesDiv.style.transform = "translatex(-100%)";
    startRulesDiv.style.zIndex = "-1";
    mainDiv.style.opacity = "1";
    timer();            //GAME TIMER STARTED
})

window.addEventListener("load", () => {
    randomStoryNumber = Math.floor(Math.random() * stories.length);
    console.log("random number: ", randomStoryNumber);

    // console.log(Math.floor(Math.random() * stories.length));
    // checkHintSelection();
    renderTitle();
    renderSummary();
    renderHints();
    checkHintClicked();
})
