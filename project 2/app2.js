let counter = 0;
const  btnValue  = document.querySelector(".count");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(item){

item.addEventListener("click", function(e){
    
    const clikers = e.currentTarget.classList;

if(clikers.contains("decrease")){
    counter--;
}
else if(clikers.contains("sucess")){
    counter++
}
else{
    counter = 0
}
btnValue.textContent = counter;


})

})