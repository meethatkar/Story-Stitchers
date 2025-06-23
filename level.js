var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

var body = document.getElementsByTagName("body");
// console.log(body[0]);
easy.addEventListener("mouseover",()=>{
    body[0].style.backgroundColor = "#ffc4d5"; 
})
easy.addEventListener("mouseleave",()=>{
    body[0].style.backgroundColor = "#ff99ac63";
})
medium.addEventListener("mouseover",()=>{
    body[0].style.backgroundColor = "#faa4bc";
})
medium.addEventListener("mouseleave",()=>{
    body[0].style.backgroundColor = "#ff99ac63";
})
hard.addEventListener("mouseover",()=>{
    body[0].style.backgroundColor = "#ff83a6";
})
hard.addEventListener("mouseleave",()=>{
    body[0].style.backgroundColor = "#ff99ac63";
})