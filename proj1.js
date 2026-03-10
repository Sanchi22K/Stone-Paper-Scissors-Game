let userscore =0;
let compscore=0;

const choices= document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")



const gencompchoice = () =>{
    const options = ["rock", "paper", "scissors"]
  const ranidx = Math.floor(Math.random()*3)
     return options[ranidx]
}

const Drawgame = () => {
    console.log("Game draw")
    msg.innerText = "Game was Draw! Play again"
    msg.style.backgroundColor = "blue"
    
}

const showWinner = (userwinn) => {
    if (userwinn === true){
        userscore++;
        userscorepara.innerText = userscore
        console.log("you win")
        msg.innerText = "You Win!"
        msg.style.backgroundColor = "green"
    }
    else {
        compscore++
         compscorepara.innerText = compscore
        console.log("you loose")
        msg.innerText = "You Lose!"
        msg.style.backgroundColor = "red"
    }
}


const playGame = (choiceId) =>{
   console.log("User choice=", choiceId)
   const compchoice = gencompchoice()
   console.log("comp choice is=",compchoice)
  let userwinn = true;
   if(choiceId === compchoice){
    Drawgame()
    return;
   }else{
    

    if(choiceId === "rock"){
        userwinn = compchoice === "paper" ? false : true
    } else if(choiceId === "paper"){
        userwinn = compchoice === "scissors" ? false : true
    } else if(choiceId === "scissors"){
        userwinn = compchoice === "rock" ? false : true
    }
   }
   showWinner(userwinn)

}



choices.forEach((choice) => {
    
    choice.addEventListener("click", () =>{
        const choiceId = choice.getAttribute("id")
         
         playGame(choiceId)

    })
})