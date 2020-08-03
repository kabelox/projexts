const colors = ["red","blue","yellow","rgba(200,255,188)","#111"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const colorNum = getRandomNum();
    document.body.style.backgroundColor = colors[colorNum];
    color.textContent =colors[colorNum];
})

function getRandomNum(){
return    Math.floor(Math.random()*colors.length);
}

