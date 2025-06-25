let timerSecond = 0;
let timerMinute = 0;

let selectionCounter = 0;
let randomStoryNumber = 0;

let easyStories = [
    {
        title: "The Silent Ward",

        summary: " a night guard working in an abandoned hospital. His routine check of a desolate isolation wing takes a terrifying turn when strange noises lead him to Room 7. Inside, he discovers unsettling markings on the walls and a single, chilling object, hinting at the unsettling past of the place and the lingering presence of its former inhabitants.",

        hints: ['wing', 'broken', 'spine', 'Room 7', 'bare', 'scratches', 'procelain eyes', 'wishpher'],

        userSelection: [],
        stroy: "The chill in the old hospital's abandoned wing wasn't just from the wishper windows. Liam, the new night guard, felt a prickle down his room u7 as he checked the locked doors of the isolation ward. A faint, rhythmic scratching echoed from Scratches. He hesitated, flashlight beam trembling, before pushing the heavy door open The room was Porcelain eye, save for a single, rusted bed.On the dust- covered wall, hundreds of tiny, parallel broken marred the paint, forming an unsettling pattern.It wasn't just one set; they overlapped, intertwining. As his light swept across the floor, he saw a single, antique doll, its spine staring blankly at the wall. Then, from the darkness behind him, a bare, \"We're still here...",
    },
]

// RENDER HINT
function renderHints() {
    let hintParent = document.querySelector("#hint-block");
    easyStories[randomStoryNumber].hints.forEach((hint) => {
        let hintDiv = document.createElement("span");
        hintDiv.innerText = hint;
        hintDiv.classList.add("hint-btn");
        hintParent.appendChild(hintDiv);
    })
}

// RENDER SUMMARY
function renderSummary(){
    let summaryParent = document.querySelector("#summary");
    let summaryDiv = document.createElement("p");
    summaryDiv.innerText = easyStories[randomStoryNumber].summary;   
    summaryDiv.classList.add("summary-text"); 
    summaryParent.appendChild(summaryDiv);
}

// RENDER TITLE
function renderTitle(){
    let titleParent = document.querySelector("#title");
    let titleDiv = document.createElement("h1");
    titleDiv.innerText = easyStories[randomStoryNumber].title;
    titleDiv.classList.add("story-title");
    titleParent.appendChild(titleDiv);
}

// TIMER
function timer() {
    timerSecond = 60;
    let timerDiv = document.querySelector("#timer p");
    for (let i = 0; i <= timerSecond; i++) {
        setTimeout(() => {
            timerDiv.innerText = `00:${timerSecond}`;
            timerSecond--;
        }, 1000*i)
    }
}
// timer();
renderTitle();
renderSummary();
renderHints();