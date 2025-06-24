let btnDivs = document.querySelectorAll(".category-btns");
let wrapper = document.querySelector("#wrapper-div");
let horrorBtn = document.querySelector("#horror");
let thrillerBtn = document.querySelector("#thriller");
let adventureBtn = document.querySelector("#adventure");
let romanceBtn = document.querySelector("#romance");
let comedyBtn = document.querySelector("#comedy");
let scifiBtn =document.querySelector("#scifi");

var isEntered = false;

if(window.innerWidth>765){

    // horrorDESK();
    horrorBtn.addEventListener("mouseenter",()=>{
        horrorDESK();
        isEntered = true;
    })
    horrorBtn.addEventListener("mouseleave",()=>{
        horrorDESK();
        isEntered = false;
    })

    // thriller
    thrillerBtn.addEventListener("mouseenter",()=>{
        thrillerDESK();
        isEntered = true;
    })
    thrillerBtn.addEventListener("mouseleave",()=>{
        thrillerDESK();
        isEntered = false;
    })

    // adventure
    adventureBtn.addEventListener("mouseenter",()=>{
        adventureDESK();
        isEntered = true;
    })
    adventureBtn.addEventListener("mouseleave",()=>{
        adventureDESK();
        isEntered = false;
    })

    // romance
    romanceBtn.addEventListener("mouseenter",()=>{
        romanceDESK();
        isEntered = true;
    })
    romanceBtn.addEventListener("mouseleave",()=>{
        romanceDESK();
        isEntered = false;
    })

    //comedy
    comedyBtn.addEventListener("mouseenter",()=>{
        comedyDESK();
        isEntered = true;
    })
    comedyBtn.addEventListener("mouseleave",()=>{
        comedyDESK();
        isEntered = false;
    })

    // scifi
    scifiBtn.addEventListener("mouseenter",()=>{
        scifiDESK();
        isEntered = true;
    })
    scifiBtn.addEventListener("mouseleave",()=>{
        scifiDESK();
        isEntered = false;
    })
}
else{
    mobileView();
}

function mobileView(){
    wrapper.classList.add("mobile-view");
    btnDivs.forEach((elem)=>{
        elem.classList.add("mobile-view-btn");        
    })
}

// function horrorMOB(){
//     if(!isEntered){
//         wrapper.classList.add("horror-mob");
//     btnDivs.forEach((elem)=>{
//         elem.classList.add("horror-btn-mob");        
//     })
//     }
//     else{
//         wrapper.classList.remove("horror-mob");
//     btnDivs.forEach((elem)=>{
//         elem.classList.remove("horror-btn-mob");        
//     })
//     }
// }
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

// function thrillerMOB(){
//     if(!isEntered){
//         wrapper.classList.add("thriller-mob");
//     btnDivs.forEach((elem)=>{
//         elem.classList.add("thriller-btn-mob");        
//     })
//     }
//     else{
//         wrapper.classList.remove("thriller-mob");
//     btnDivs.forEach((elem)=>{
//         elem.classList.remove("thriller-btn-mob");        
//     })
//     }
// }

// THRILLER
function thrillerDESK(){
    if(!isEntered){
        wrapper.classList.add("thriller-desk");
    btnDivs.forEach((elem)=>{
        elem.classList.add("thriller-btn-desk");        
    })
    wrapper.style.opacity = "1";      
    }
    else{
        wrapper.classList.remove("thriller-desk");
    btnDivs.forEach((elem)=>{
        elem.classList.remove("thriller-btn-desk");        
    })
    }
}

// ADVENTURE 
function adventureDESK(){
    if(!isEntered){
        wrapper.classList.add("adventure");
    btnDivs.forEach((elem)=>{
        elem.classList.add("adventure-btn-desk");        
    })
    wrapper.style.opacity = "1";      
    }
    else{
        wrapper.classList.remove("adventure");
    btnDivs.forEach((elem)=>{
        elem.classList.remove("adventure-btn-desk");        
    })
    }
}

// ROMANCE
function romanceDESK(){
    if(!isEntered){
        wrapper.classList.add("romance");
    btnDivs.forEach((elem)=>{
        elem.classList.add("romance-btn-desk");        
    })
    wrapper.style.opacity = "1";      
    }
    else{
        wrapper.classList.remove("romance");
    btnDivs.forEach((elem)=>{
        elem.classList.remove("romance-btn-desk");        
    })
    }
}

// COMEDY
function comedyDESK(){
    if(!isEntered){
        wrapper.classList.add("comedy");        
    btnDivs.forEach((elem)=>{
        elem.classList.add("comedy-btn-desk");        
    })
    wrapper.style.opacity = "1";      
    }
    else{
        wrapper.classList.remove("comedy");
    btnDivs.forEach((elem)=>{
        elem.classList.remove("comedy-btn-desk");        
    })
    }
}

// SCI-FI
// COMEDY
function scifiDESK(){
    if(!isEntered){
        wrapper.classList.add("sci-fi");        
    btnDivs.forEach((elem)=>{
        elem.classList.add("sci-fi-btn-desk");        
    })
    wrapper.style.opacity = "1";      
    }
    else{
        wrapper.classList.remove("sci-fi");
    btnDivs.forEach((elem)=>{
        elem.classList.remove("sci-fi-btn-desk");        
    })
    }
}