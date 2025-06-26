let timerSecond = 0;
let timerMinute = 0;

let selectionCounter = 0;
var randomStoryNumber = 0;

let easyStories = [
    {
        title: "The Silent Ward",

        summary: " a night guard working in an abandoned hospital. His routine check of a desolate isolation wing takes a terrifying turn when strange noises lead him to Room 7. Inside, he discovers unsettling markings on the walls and a single, chilling object, hinting at the unsettling past of the place and the lingering presence of its former inhabitants.",

        hints: ['wing', 'broken', 'spine', 'Room 7', 'bare', 'scratches', 'procelain eyes', 'wishpher'],

        userSelection: [],
        stroy: "The chill in the old hospital's abandoned wing wasn't just from the wishper windows. Liam, the new night guard, felt a prickle down his room u7 as he checked the locked doors of the isolation ward. A faint, rhythmic scratching echoed from Scratches. He hesitated, flashlight beam trembling, before pushing the heavy door open The room was Porcelain eye, save for a single, rusted bed.On the dust- covered wall, hundreds of tiny, parallel broken marred the paint, forming an unsettling pattern.It wasn't just one set; they overlapped, intertwining. As his light swept across the floor, he saw a single, antique doll, its spine staring blankly at the wall. Then, from the darkness behind him, a bare, \"We're still here...",
    },
    {
        title: "The Whispering Woods",

        summary: "\"The Whispering Woods\" plunges players into a camping trip gone wrong. Ignoring local warnings, three friends venture into a foreboding forest. As night falls, unsettling noises and mysterious presences emerge from the darkness, revealing the woods' ancient and terrifying secrets.",

        hints: ['dancing', 'blackwood Forest', 'whispers', 'chill', 'tapping', 'giggle', 'darkness', 'child\'s', 'trees'],
        userSelection: [],
        story: "The campfire crackled, casting dancing shadows among the towering pines. Sarah, Mark, and Emily had ignored the old local's warnings about the Blackwood Forest. Deep in the woods, an unnerving silence fell, broken only by the rustling of leaves and what sounded like faint whispers carried on the wind. Later, huddled in their tents, a chill seeped into their sleeping bags. A rhythmic tapping began, not on their tent, but from within the surrounding trees. It grew louder, accompanied by what sounded like a child's giggle – distorted and far too close. Mark peered through the mesh, seeing nothing but the impenetrable darkness. Then, a single, glowing eye opened in the black, staring back. They didn't scream; they simply froze, listening to the forest breathing."

    },
    {
        title: "The Lady in White's Ride",

        summary: "\"The Lady in White's Ride\" follows Aryan, who encounters a mysterious woman in a white saree while driving on a foggy Delhi road late at night. She suddenly appears in his back seat, filling the car with the scent of flowers. As the temperature drops, a ghostly voice requests a ride to the cemetery, leaving Aryan with a chilling reminder of his spectral passenger.",

        hints: ['headlights', 'home', 'chill', 'mist', 'woman', 'saree', 'flowers', 'ear', 'cemetery'],
        userSelection: [],
        story: "The headlights cut through the dense fog on the Delhi Cantt road. Aryan, driving home late, felt an inexplicable chill despite the warm night. Ahead, a solitary figure emerged from the swirling mist: a woman in a white saree, her back to him. He slowed, wary. As he passed, she was suddenly inside his back seat. Her hair, long and black, obscured her face. A faint scent of old flowers filled the car. Aryan's hands gripped the steering wheel, knuckles white. The temperature inside plummeted. A cold breath ghosted across his ear. \"Drop me at the cemetery,\" a raspy voice whispered. He slammed the brakes, heart hammering, and looked back. The seat was empty, but the faint scent of jasmine lingered, a chilling reminder of his spectral passenger."
    }
]

// RENDER HINT
function renderHints() {
    let hintParent = document.querySelector("#hint-block");
    easyStories[getRandowNumber()].hints.forEach((hint) => {
        let hintDiv = document.createElement("span");
        hintDiv.innerText = hint;
        window.innerWidth > 756 ? hintDiv.classList.add("hint-desktop") : hintDiv.classList.add("hint-btn")
        hintParent.appendChild(hintDiv);
    })
}

// RENDER SUMMARY
function renderSummary() {
    let summaryParent = document.querySelector("#summary");
    let summaryDiv = document.createElement("p");
    summaryDiv.innerText = easyStories[getRandowNumber()].summary;
    window.innerWidth > 765 ? summaryDiv.classList.add("summary-text-desktop") : summaryDiv.classList.add("summary-text");
    summaryParent.appendChild(summaryDiv);
}

// RENDER TITLE
function renderTitle() {
    let titleParent = document.querySelector("#title");
    let titleDiv = document.createElement("h1");
    titleDiv.innerText = easyStories[getRandowNumber()].title;
    window.innerWidth > 765 ? titleDiv.classList.add("story-title-desktop") : titleDiv.classList.add("story-title-mobile");
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
        }, 1000 * i)
    }
}

if (window.innerWidth > 765) {
    let body = document.getElementsByTagName("body");
    body[0].classList.add("body-desktop");
}

//GET RANDOWM NUMBER
function getRandowNumber() {
    console.log("function ", randomStoryNumber);
    
    return randomStoryNumber;
}

window.addEventListener("load", () => {
    randomStoryNumber = Math.floor(Math.random() * easyStories.length);
    console.log(Math.floor(Math.random() * easyStories.length));
    timer();
    renderTitle();
    renderSummary();
    renderHints();
})