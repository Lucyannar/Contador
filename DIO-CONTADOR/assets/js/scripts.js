var currentNumberWapper = document.getElementById("currentNumber")
var currentNumber = 0;

const ADICIONAR = document.getElementById("adicionar")
const SUBTRAIR = document.getElementById("subtrair")



ADICIONAR.addEventListener("click",
function increment(){
    if(currentNumber >= 0 && currentNumber <=10){
        currentNumber = currentNumber +1;
        currentNumberWapper.innerHTML = currentNumber;
    }
    if(currentNumber > 10 ){
        currentNumberWapper.style.color = 'red'
    }
   
}
)

SUBTRAIR.addEventListener("click", 
function decrement(){
    if(currentNumber >= 0 && currentNumber <=10){
        currentNumber = currentNumber -1;
        currentNumberWapper.innerHTML = currentNumber;
    }

    if(currentNumber < 0 ){
        currentNumberWapper.style.color = 'red'
    }
}
)




