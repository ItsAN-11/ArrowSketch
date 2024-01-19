const canvas = document.querySelector("#etch-a-sketch");

const ctx = canvas.getContext("2d");

const shakebutton = document.querySelector(".shake");
const MOVE_AMOUNT = 10;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;


const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
console.log(width, height);
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


function handleKey(e){
   if(e.key.includes("Arrow")){
    e.preventDefault();
    draw({ key: e.key });
   }
    // console.log("HAndling keys");
    // console.log(e.key);
   
}

var hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

function draw({ key }){
    console.log(key);
    // hue = Math.random() * 360;
    // OR,
    hue += 10;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(hue);
    // ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
    // x -= MOVE_AMOUNT;
    // y -= MOVE_AMOUNT;
    switch(key ){
        case "ArrowUp":
            y -= MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x += MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x -= MOVE_AMOUNT;
            break;
        default: 
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();


}

window.addEventListener("keydown", handleKey);
shakebutton.addEventListener("click", clearCanvas);

function clearCanvas(){
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationend", function(){
        console.log("Done the shaking");
        canvas.classList.remove("shake");
    },
    { once: true }
    );
}
