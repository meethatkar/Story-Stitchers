import { getEasyStories } from "../stories.js";

let randomNum = sessionStorage.getItem("randomNumber");
let wordCount = 1;              //created for prepending number ins user Selected words

var storyObj = getEasyStories()[randomNum];

let title = storyObj.title;
let summary = storyObj.summary;
let hints = storyObj.hints;
let userSelection = sessionStorage.getItem("userSelectionArr").split(",");              //SPLIT KARNE SE JAB ',' (COMMOM) AAYEGA STRING MAI VHO CUT HOKE EK ARRAY ELEMENT BAN JAYEGA.
let story = storyObj.story;


function renderStory(){
    let titleDiv = document.querySelector("#ogStory>h1");
    let storyDiv = document.querySelector("#ogStory>p");
    let userSelectionDiv = document.querySelector("#user-selection");

    // title
    titleDiv.textContent = title;
    window.innerWidth<765 ? titleDiv.classList.add("mobile-title"):titleDiv.classList.add("desktop-title")

    // story
    storyDiv.textContent = story;
    window.innerWidth<765 ? storyDiv.classList.add("mobile-story"):storyDiv.classList.add("desktop-story")

    // user selected words
    userSelection.forEach((word)=>{
        let wordSpanDiv = document.createElement("span");
        wordSpanDiv.innerText = `${wordCount}. ${word}`;
        window.innerWidth<765 ? wordSpanDiv.classList.add("hint-mobile"):wordSpanDiv.classList.add("hint-desktop")
        userSelectionDiv.appendChild(wordSpanDiv); 
        wordCount++;       
    })
}

// RESPONSIVE FONT 
window.innerWidth<765 ? document.getElementsByTagName("body")[0].classList.add("font-mobile"):document.getElementsByTagName("body")[0].classList.add("font-desktop");

// RESPONSIVE BACKGROUND IMAGE
window.innerWidth<765 ? document.getElementsByTagName("body")[0].classList.add("mobile-img"):document.getElementsByTagName("body")[0].classList.add("desktop-img");
renderStory();

