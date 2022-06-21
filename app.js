const progress = document.getElementById("progress");
const prev = document.getElementById("pre");
const next = document.getElementById("next");
var circles = document.querySelectorAll(".circle");

let currentActiveIndexNumber = 1  //---currentActive

next.addEventListener("click",()=>{
    currentActiveIndexNumber ++;
    //---console.log(currentActiveIndex);
    if(currentActiveIndexNumber > circles.length){
        currentActiveIndexNumber = circles.length;
    }
    update();
    console.log(currentActiveIndexNumber);
});

prev.addEventListener("click",()=>{
    currentActiveIndexNumber --;
    //---console.log(currentActiveIndex);
    if(currentActiveIndexNumber < 1){
        currentActiveIndexNumber = 1;
    }
    update();
    console.log(currentActiveIndexNumber);
})

//----New Fuction Update
function update(){
    circles.forEach((circle,idx)=>{
        if(idx<currentActiveIndexNumber){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    });
    const actives = document.querySelectorAll(".active");
    progress.style.width = (actives.length -1)/(circles.length - 1) * 100 + "%";
    if(currentActiveIndexNumber ===1){
        prev.disabled = true;
    }else if(currentActiveIndexNumber === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}