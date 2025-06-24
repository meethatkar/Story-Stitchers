let btnDivs = document.querySelectorAll(".category-btns");
let wrapper = document.querySelector("#wrapper-div");
let horrorBtn = document.querySelector("#horror");
let thrillerBtn = document.querySelector("#thriller");
var isEntered = false;

if(window.innerWidth>765){
    // horrorDESK();
    horrorBtn.addEventListener("mouseenter",()=>{
        horrorDESK();
        console.log("mouseentered");
        isEntered = true;
    })
    horrorBtn.addEventListener("mouseleave",()=>{
        horrorDESK();
        isEntered = false;
        console.log("mouse elave");
    })
    // thrillerDESK();
}
else{
    // horrorMOB();
    thrillerMOB();
}

function horrorMOB(){
    if(!isEntered){
        wrapper.classList.add("horror-mob");
    btnDivs.forEach((elem)=>{
        elem.classList.add("horror-btn-mob");        
    })
    }
    else{
        wrapper.classList.remove("horror-mob");
    btnDivs.forEach((elem)=>{
        elem.classList.remove("horror-btn-mob");        
    })
    }
}
function horrorDESK(){
    if(!isEntered){
        wrapper.classList.add("horror-desktop");
    btnDivs.forEach((elem)=>{
        elem.classList.add("horror-btn-desk");  
    })
    wrapper.style.opacity = "1";      
    }
    else{
        wrapper.classList.remove("horror-desktop");
    btnDivs.forEach((elem)=>{
        elem.classList.remove("horror-btn-desk");        
    })
    }
}

function thrillerMOB(){
    if(!isEntered){
        wrapper.classList.add("thriller-mob");
    btnDivs.forEach((elem)=>{
        elem.classList.add("thriller-btn-mob");        
    })
    }
    else{
        wrapper.classList.remove("thriller-mob");
    btnDivs.forEach((elem)=>{
        elem.classList.remove("thriller-btn-mob");        
    })
    }
}
function thrillerDESK(){
    if(!isEntered){
        wrapper.classList.add("thriller-desk");
    btnDivs.forEach((elem)=>{
        elem.classList.add("thriller-btn-desk");        
    })
    }
    else{
        wrapper.classList.remove("thriller-desk");
    btnDivs.forEach((elem)=>{
        elem.classList.remove("thriller-btn-desk");        
    })
    }
}
