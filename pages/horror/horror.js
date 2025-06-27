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

startGameBtn.addEventListener("click",()=>{
    startRulesDiv.style.transform = "translateY(-100%)";
    window.innerWidth<765 ? startRulesDiv.style.transform = "translateY(-100%)":startRulesDiv.style.transform = "translatex(-100%)";
    startRulesDiv.style.zIndex = "-1";
    mainDiv.style.opacity = "1";
    // timer();            //GAME TIMER STARTED
})



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
function timer() {
    let timerDiv = document.querySelector("#timer p");
    let totalSeconds = timerMinute * 60 + timerSecond;
    let interval = setInterval(() => {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        timerDiv.innerText = `Timer-${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (totalSeconds <= 0) {
            clearInterval(interval);
            return;
        }
        totalSeconds--;
    }, 1000);
}


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
function checkHintClicked(){
    let ParentDiv =document.querySelector("#hint-block");
    let hintDivs = ParentDiv.children;
    let hintCounter = 0;

    // USED SPREAD OPERATOR BECAUSE HTMLCollection IS NOT AN ARRAY
    // IT LOOKS LIKE ARRAY CAN WE CAN ACCESS ELEMENT USING INDEX, BUT IT NOT INHERIT ALL METHODS OF ARRAY
    // [...hintDivs] converts HTMLCollection to an array.
    [...hintDivs].forEach((hint)=>{
        hint.addEventListener("click",()=>{
            console.log("clicked:",hint.tagName);
            if(hint.tagName=="SPAN"){
                if(/\d/.test(hint.textContent.slice(0,3))){
                // If hint already has a number, remove it
                // console.log(hint.textContent.slice(3,hint.textContent.length));
                hint.textContent = hint.textContent;      
            }
          else{
            stories[getRandomNumber()].userSelection.push(hint.textContent);            
            hint.classList.add("hint-clicked");
            // If hint does not have a number, add it
            hintCounter++;
            hint.textContent = `${hintCounter}. ${hint.textContent}`;
          }  
            }
        })
        document.querySelector("#reset-btn").addEventListener("click",()=>{
            if(/\d/.test(hint.textContent.slice(0,3))){
                // If hint already has a number, remove it
                // console.log(hint.textContent.slice(3,hint.textContent.length));
                hint.tagName=="SPAN"?hint.classList.remove("hint-clicked"):"";
                hint.textContent = hint.textContent.slice(3,hint.textContent.length);  
                stories[getRandomNumber()].userSelection = [];
                hintCounter=0;            
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
else{
    mainDiv.classList.add("mobile-img");
}

//GET RANDOWM NUMBER
randomStoryNumber = 0;
function getRandomNumber() {
    // console.log("function ", randomStoryNumber);
    return randomStoryNumber;
}

window.addEventListener("load", () => {
    randomStoryNumber = Math.floor(Math.random() * stories.length);
    // console.log(Math.floor(Math.random() * stories.length));
    renderTitle();
    renderSummary();
    renderHints();
    checkHintClicked();
})