var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");
var body = document.querySelector("#levels-section");

// font for mobile
window.innerWidth < 765 ? document.getElementsByTagName("body")[0].classList.add("mobile-font") : "";


function levelBtnEffects(){
    // console.log(body[0]);
    easy.addEventListener("mouseover", () => {
        body.style.backgroundColor = "#ffc4d5";
    })
    easy.addEventListener("mouseleave", () => {
        body.style.backgroundColor = "#ffe7ec";
    })
    medium.addEventListener("mouseover", () => {
        body.style.backgroundColor = "#faa4bc";
    })
    medium.addEventListener("mouseleave", () => {
        body.style.backgroundColor = "#ffe7ec";
    })
    hard.addEventListener("mouseover", () => {
        body.style.backgroundColor = "#ff83a6";
    })
    hard.addEventListener("mouseleave", () => {
        body.style.backgroundColor = "#ffe7ec";
    })
    // levels message effects
    if(window.innerWidth>765){
        let easyLevelDiv =   document.querySelector("#easy-msg");
        let hardLevelDiv =   document.querySelector("#hard-msg");
        let mediumLevelDiv =   document.querySelector("#medium-msg");
        console.log(easyLevelDiv, mediumLevelDiv, hardLevelDiv);
        easy.addEventListener("mouseover", () => {
            easyLevelDiv.style.scale = "1.07";
        })
        easy.addEventListener("mouseleave", () => {
            easyLevelDiv.style.scale = "1";
        })
        medium.addEventListener("mouseover", () => {
            mediumLevelDiv.style.scale = "1.07";
        })
        medium.addEventListener("mouseleave", () => {
            mediumLevelDiv.style.scale = "1";
        })
        hard.addEventListener("mouseover", () => {
            hardLevelDiv.style.scale = "1.07";
        })
        hard.addEventListener("mouseleave", () => {
            hardLevelDiv.style.scale = "1";
        })
    }
    else{

    }
}

levelBtnEffects();


// Level logic
var levelSelected = "";
easy.addEventListener("click",()=>{
    sessionStorage.setItem("level", "easy");
    levelSelected = "easy";
})
medium.addEventListener("click",()=>{
    sessionStorage.setItem("level","medium");
    levelSelected = "medium";
    // alert("Coming sooonnn....")
})
hard.addEventListener("click",()=>{
    // sessionStorage.setItem("level","hard");
    // levelSelected = "hard";
    alert("Coming sooonnn....")
})

// function getSelectedLevel(){
//     console.log(levelSelected);
//     return levelSelected;
// }


// start game logic
function startGame() {
    let homeDiv = document.getElementById("home-section");
    let levelsDiv = document.getElementById("levels-section");
    levelsDiv.style.opacity = "1";
    if(window.innerWidth<760){
        homeDiv.style.transform = "translatey(-150%)";
    }
    else{
        homeDiv.style.transform = "translatex(-150%)";
    }
}

var startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
    startGame();
});


// LOADER LOGIC
var loader = document.querySelector("#main-loader");
window.addEventListener("load",()=>{
    setTimeout(()=>{
        loader.style.opacity = "0";
        loader.style.zIndex = "-1";
        document.querySelector("#home-section").style.opacity = "1";
        document.querySelector("#home-section").style.zIndex = "2";
    },5500)
})

