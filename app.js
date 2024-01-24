let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let turnO = true;//playerX playerO
let count = 0;
let win = 0;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    console.log(pos1,pos2,pos3);
    win=1;
}

const draw = () => {
    if(count===9 && win===0){
        msg.innerText = `No winner , the game ended in a draw`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1!=="" && pos2!=="" && pos3!==""){
            if(pos1===pos3 && pos2===pos3){
                disableBoxes();
                console.log("winner "+pos1);
                win=1;
                showWinner(pos1);
            }
        }
        console.log(count);
    }
    console.log(win);
    if (count===9 && win ===0){
        // console.log("its a draw..");
        draw();
    }
}


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
    }
}

const resetBttn = () => {
    turnO=true;
    enableBoxes();
    count=0;
    msgContainer.classList.add("class","hide");
    for(let box of boxes){
        box.innerText = "";
    }
}

newBtn.addEventListener("click", resetBttn);
resetBtn.addEventListener("click", resetBttn);


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked..");
        if(turnO){
            box.innerText = "O";
            turnO=false;
        }else {
            box.innerText = "X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        checkWinner();
    });
});
