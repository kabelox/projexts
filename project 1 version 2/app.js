const colors = ["red","blue","purple","maroon","pink","rgb(211,222,111)","#444","green","greenyellow"];
const btn = document.getElementById("btn");
const colorMe = document.querySelector(".colorMe");

btn.addEventListener("click",function(){
    const colorAdder = getNumber();
    document.body.style.backgroundColor = colors[colorAdder];
    colorMe.textContent = colors[colorAdder]
})

function getNumber(){
   return Math.floor(Math.random()*colors.length);
}
// console.log(Math.floor(Math.random()*colors.length));