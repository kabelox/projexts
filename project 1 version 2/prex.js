const colorsHex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let hexCol = "#";
    for(let i = 0; i<=5; i++){
        hexCol += colorsHex[getHex()];
    }

   color.textContent = hexCol;
   document.body.style.backgroundColor =hexCol;
})

function getHex(){
   return Math.floor(Math.random()*colorsHex.length);
}

