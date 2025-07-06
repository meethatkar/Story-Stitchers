import { getEasyStories } from "../stories.js";

let randomNum = sessionStorage.getItem("randomNumber");


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

let titleDiv = document.querySelector("#userStory>h1");
let storyDiv = document.querySelector("#userStory>p");
let userSelectionDiv = document.querySelector("#original-hint");
function renderUserGeneratedStory(){

    // title
    titleDiv.textContent = title;
    window.innerWidth<765 ? titleDiv.classList.add("mobile-title"):titleDiv.classList.add("desktop-title")

    // story
    highlightWords();
    storyDiv.innerHTML = story;
    window.innerWidth<765 ? storyDiv.classList.add("mobile-story"):storyDiv.classList.add("desktop-story")
    // console.log(story);
    

    // user selected words
    // sortArray();
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
function sortArray() {
  let currNum1 = 0;
  let currNum2 = "";
  while (true) {
    let checkAll = 0;
    for (let i = 0; i < hints.length - 1; i++) {
      if (hintIndexNum[i] > hintIndexNum[i + 1]) {
        // Swap in hintIndexNum
        currNum1 = hintIndexNum[i];
        hintIndexNum[i] = hintIndexNum[i + 1];
        hintIndexNum[i + 1] = currNum1;

        // Swap in hints
        currNum2 = hints[i];
        hints[i] = hints[i + 1];
        hints[i + 1] = currNum2;

        // Since swap happened, do NOT increase checkAll
      } else {
        // No swap, increase checkAll
        checkAll++;
      }
    }

    // ✅ When all pairs were already sorted, checkAll will be hints.length - 1
    if (checkAll === hints.length - 1) {
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

// window.addEventListener("load",()=>{
// })

document.querySelector("#revealMyStry").addEventListener("click",()=>{
    swapWords();
    // bg-img remove and add black clr [deone cause bg-img was visible at  bottom
    window.innerWidth<765 ? document.getElementsByTagName("body")[0].classList.remove("mobile-img"):document.getElementsByTagName("body")[0].classList.remove("desktop-img");
    document.getElementsByTagName("body")[0].classList.add("bg-black");
    // document.getElementsByTagName("body")[0].classList.add("overflow-clip");
    // story section
    storyDiv.innerHTML = story;
    document.querySelector("#ogStory").style.opacity = "0";
    document.querySelector("#ogStory").style.zIndex = "0";
    // DISPLAY HIDDEN --> FLEX (MOBILE ONLY)
    document.querySelector("#story-disclaimer").style.display = "flex";
    requestAnimationFrame(()=>{
        //REMOVE
        window.innerWidth<765 ? document.querySelector("#story-disclaimer").classList.remove("slide-mobile"):document.querySelector("#story-disclaimer").classList.remove("slide-desktop");
        // ADD
        window.innerWidth<765 ? document.querySelector("#story-disclaimer").classList.add("slide-mobile-reveal"):document.querySelector("#story-disclaimer").classList.add("slide-desktop-reveal");
    })
    
})

window.addEventListener("load",function(){
    // USER STORY REVEAL SILDE
    this.window.innerWidth<765 ? document.querySelector("#userStory").classList.add("top-[100%]"):document.querySelector("#userStory").classList.add("-right-[100%]");
    document.querySelector("#userStory").classList.add("z-0");
    
    
    // REVEAL USER"S STORY WARNING SLIDE
    window.innerWidth<765 ? document.querySelector("#story-disclaimer").classList.add("slide-mobile"):document.querySelector("#story-disclaimer").classList.add("slide-desktop");


    // AUDIO
    thrillerBgm.currentTime = 0;
    thrillerBgm.play();

})
document.querySelector("#warningContinue").addEventListener(("click"),()=>{
    document.querySelector("#userStory").style.display = "flex"; 
    document.querySelector("#story-disclaimer").style.display = "none"; 
    requestAnimationFrame(()=>{
    // REMOVE
        window.innerWidth<765 ? document.querySelector("#userStory").classList.remove("top-[100%]"):document.querySelector("#userStory").classList.remove("-right-[100%]");
        document.querySelector("#userStory").classList.remove("z-0");
    // ADD
        window.innerWidth<765 ? document.querySelector("#userStory").classList.add("top-[0%]"):document.querySelector("#userStory").classList.add("right-[0%]");
        document.querySelector("#userStory").classList.add("z-10");
        window.innerWidth<765 ? document.querySelector("#story-disclaimer").style.top = "100%":document.querySelector("#story-disclaimer").style.right = "-100%";
    }) 
    // bg-img remove and add black clr [deone cause bg-img was visible at  bottom
    window.innerWidth<765 ? document.getElementsByTagName("body")[0].classList.add("mobile-img"):document.getElementsByTagName("body")[0].classList.add("desktop-img");
    document.getElementsByTagName("body")[0].classList.remove("bg-black");
})
highlightWords();
// console.log("new",story);

// FUNCTION TO SWAP USER SELECTED WORDS WITH OG WORDS
function swapWords(){
    console.log(hints);
    console.log(userSelection);
    console.log(story);
    
    hints.forEach((hint,index)=>{
        console.log("index: ",index,"word:",hint);
        
        story = story.replace("<u><b><u><b><u><b>"+hint+"</b></u></b></u></b></u>","<b><u>"+userSelection[index]+"</u></b>");
        console.log("og: ",hint,"user",userSelection[index]);
    })
}


// RESPONSIVE FONT 
window.innerWidth<765 ? document.getElementsByTagName("body")[0].classList.add("font-mobile"):document.getElementsByTagName("body")[0].classList.add("font-desktop");

// RESPONSIVE BACKGROUND IMAGE
window.innerWidth<765 ? document.getElementsByTagName("body")[0].classList.add("mobile-img"):document.getElementsByTagName("body")[0].classList.add("desktop-img");

var thrillerBgm = new Audio('./sciFi-bgm.wav');
thrillerBgm.addEventListener('ended',()=>{
    thrillerBgm.currentTime = 0;
    thrillerBgm.play();
})
thrillerBgm.preload = 'auto';
thrillerBgm.volume = 0.8;

// audio adding [horror bgm]
// window.addEventListener("load",()=>{

// })
document.querySelector("#replay").addEventListener(("click"),()=>{
    thrillerBgm.pause();
})

renderStory();
renderUserGeneratedStory();


