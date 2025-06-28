import { getEasyStories } from "../stories.js";

let randomNum = sessionStorage.getItem("randomNumber");


var storyObj = getEasyStories()[randomNum];


let title = storyObj.title;
let summary = storyObj.summary;
let hints = storyObj.hints;
let userSelection = sessionStorage.getItem("userSelectionArr").split(",");              //SPLIT KARNE SE JAB ',' (COMMOM) AAYEGA STRING MAI VHO CUT HOKE EK ARRAY ELEMENT BAN JAYEGA.
let story = storyObj.story;
console.log(storyObj);


function renderStory(){
    let titleDiv = document.querySelector("#ogStory>h1");
    let storyDiv = document.querySelector("#ogStory>p");
    let userSelectionDiv = document.querySelector("#user-selection");

    // title
    titleDiv.textContent = title;
    window.innerWidth<765 ? titleDiv.classList.add("mobile-title"):titleDiv.classList.add("desktop-title")

    // story
    highlightWords();
    storyDiv.innerHTML = story;
    window.innerWidth<765 ? storyDiv.classList.add("mobile-story"):storyDiv.classList.add("desktop-story")
    // console.log(story);
    

    // user selected words
    let wordCount = 1;              //created for prepending number ins user Selected words
    userSelection.forEach((word)=>{
        let wordSpanDiv = document.createElement("span");
        wordSpanDiv.innerText = `${wordCount}. ${word}`;
        window.innerWidth<765 ? wordSpanDiv.classList.add("hint-mobile"):wordSpanDiv.classList.add("hint-desktop")
        userSelectionDiv.appendChild(wordSpanDiv); 
        wordCount++;       
    })
}

function renderUserGeneratedStory(){
    let titleDiv = document.querySelector("#userStory>h1");
    let storyDiv = document.querySelector("#userStory>p");
    let userSelectionDiv = document.querySelector("#original-hint");

    // title
    titleDiv.textContent = title;
    window.innerWidth<765 ? titleDiv.classList.add("mobile-title"):titleDiv.classList.add("desktop-title")

    // story
    highlightWords();
    storyDiv.innerHTML = story;
    window.innerWidth<765 ? storyDiv.classList.add("mobile-story"):storyDiv.classList.add("desktop-story")
    // console.log(story);
    

    // user selected words
    sortArray();
    let wordCount = 1;              //created for prepending number ins user Selected words
    hints.forEach((hint)=>{
        let wordSpanDiv = document.createElement("span");
        wordSpanDiv.innerText = hint;
        window.innerWidth<765 ? wordSpanDiv.classList.add("hint-mobile"):wordSpanDiv.classList.add("hint-desktop")
        userSelectionDiv.appendChild(wordSpanDiv); 
        wordCount++;       
    })
}

//HINT WORDS HIGHLIGHING IN OG STORY
let hintIndexNum = [];          //CREATED TO SORT WORDS BASED ON INDEX NUMBER, FIRST WORDS MUST APPEAR FIRST.  [DONE SO WE CAN HIGHLIGHT HINT WORDS IN OG STORY]
hints.forEach((hint)=>{
    hintIndexNum.push(story.indexOf(" "+hint));
})


// sorting hintIndexNum array
let currNum1 = 0;
let currNum2 = 0;
function sortArray(){
    while(true){
        let checkAll = 0;
        for(let i=0; i<= hints.length; i++){
            if(hintIndexNum[i]>hintIndexNum[i+1]){
                currNum1 = hintIndexNum[i];
                hintIndexNum[i] = hintIndexNum[i+1];
                hintIndexNum[i+1] = currNum1;
                currNum2 = hints[i];
                hints[i] = hints[i+1];
                hints[i+1] = currNum2;
            }
            else{
                checkAll++;
            }
        }
        if(checkAll==8){
            break;
        }
    }
}
sortArray();

//HIGHLIGHTING HINT WORDS IN OG STORY
let highlightStoryArr = [];
let highlightStory = "";
function highlightWords(){
    hints.forEach((hint)=>{
        // temp.replace(hint,"WORD ENCOUNTERED");
        // console.log(story.split(" "+hint), hint);
        story = story.replace(" "+hint,` <u><b>${hint}</b></u>`);
        // console.log(story);  
    })
}

// REVEAL USER"S STORY WARNING SLIDE
window.addEventListener("load",()=>{
    window.innerWidth<765 ? document.querySelector("#story-disclaimer").classList.add("top-[100%]"):document.querySelector("#story-disclaimer").classList.add("translate-x-[100%]");
})

document.querySelector("#revealMyStry").addEventListener("click",()=>{
    // bg-img remove and add black clr
    window.innerWidth<765 ? document.getElementsByTagName("body")[0].classList.remove("mobile-img"):document.getElementsByTagName("body")[0].classList.remove("desktop-img");
    document.getElementsByTagName("body")[0].classList.add("bg-black");
    // document.getElementsByTagName("body")[0].classList.add("overflow-clip");
    // story section
    document.querySelector("#ogStory").style.opacity = "0";
    document.querySelector("#ogStory").style.zIndex = "0";
    // document.querySelector("#ogStory").style.display = "hidden";
    document.querySelector("#story-disclaimer").style.opacity = "1";
    document.querySelector("#story-disclaimer").style.height = "100vh";
    document.querySelector("#story-disclaimer").style.display = "flex";
    //REMOVE
    window.innerWidth<765 ? document.querySelector("#story-disclaimer").classList.remove("top-[100%]"):document.querySelector("#story-disclaimer").classList.remove("translate-x-[100%]");
    // ADD
    window.innerWidth<765 ? document.querySelector("#story-disclaimer").classList.add("top-[0%]"):document.querySelector("#story-disclaimer").classList.add("translate-x-[0%]");
    console.log(document.querySelector("#story-disclaimer"));
    
})

// USER STORY REVEAL SILDE
window.addEventListener("load",function(){
    document.querySelector("#userStory").classList.add("top-[100%]");
    document.querySelector("#userStory").classList.add("z-0");
    document.querySelector("#userStory").classList.add("opacity-0");
    document.querySelector("#userStory").classList.add("hidden");

})
document.querySelector("#warningContinue").addEventListener(("click"),()=>{
    console.log("clieck");
    // REMOVE
    document.querySelector("#userStory").classList.remove("top-[100%]");
    document.querySelector("#userStory").classList.remove("z-0");
    document.querySelector("#userStory").classList.remove("opacity-0");
    document.querySelector("#userStory").classList.remove("hidden");
    // ADD
    document.querySelector("#userStory").classList.add("top-[0%]");
    document.querySelector("#userStory").classList.add("z-10");
    document.querySelector("#userStory").classList.add("opacity-100");
    document.querySelector("#userStory").classList.add("flex");
    document.querySelector("#userStory").classList.add("bg-black");
    document.querySelector("#story-disclaimer").style.display = "hidden";    
    
})
highlightWords();
// console.log("new",story);




// RESPONSIVE FONT 
window.innerWidth<765 ? document.getElementsByTagName("body")[0].classList.add("font-mobile"):document.getElementsByTagName("body")[0].classList.add("font-desktop");

// RESPONSIVE BACKGROUND IMAGE
window.innerWidth<765 ? document.getElementsByTagName("body")[0].classList.add("mobile-img"):document.getElementsByTagName("body")[0].classList.add("desktop-img");

renderStory();
renderUserGeneratedStory();


