const progress = document.getElementById("progress");
const prev = document.getElementById("pre");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActiveIndexNumber = 1  //---currentActive

next.addEventListener("click",()=>{
    currentActiveIndexNumber ++;
    //---console.log(currentActiveIndex);
    if(currentActiveIndexNumber > circles.length){
        currentActiveIndexNumber = circles.length;
    }
    console.log(currentActiveIndexNumber);
});

prev.addEventListener("click",()=>{
    currentActiveIndexNumber --;
    //---console.log(currentActiveIndex);
    if(currentActiveIndexNumber < 1){
        currentActiveIndexNumber = 1;
    }
    console.log(currentActiveIndexNumber);
})

//----New Fuction Update
function update(){
    
}