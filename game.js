let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-game");
let newGameBtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn= true;
let gameOver = false;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("Button was clicked");
        if(turn)
        {
            box.innerText="O";
            turn= false; 
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const resetGame =() => {
    turn=true;
    gameOver = false;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes =() => {
     for (box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}


const disabledBoxes = () => {
    for (let box of boxes)
    {
        box.disabled=true;
    }
}
const showWinner = (winner) => {
    console.log(msg);
    gameOver = true;
    msg.innerText = `Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner= () =>
{
    let winnerFound = false;
    for(let patterns of winPatterns)
    {
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;

        if(pos1Val!= "" && pos2Val!="" && pos3Val!="")
        {
            if(pos1Val=== pos2Val && pos2Val===pos3Val)
            {
                console.log("winner");
                showWinner(pos1Val);
                winnerFound = true;
                return;
            }
        } 
    }
    let allFilled = Array.from(boxes).every((box) => box.innerText !== "");

  if (!winnerFound && allFilled) {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    gameOver = true;
  }

} 
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

 
