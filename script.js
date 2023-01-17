let score = document.querySelector(".score")
let gameScreen = document.querySelector(".gameScreen")
let  startScreen = document.querySelector(".startScreen")

startScreen.addEventListener("click",startGame);

document.addEventListener("keydown",keyPressed)
document.addEventListener("keyup",keyReleased)

let keys=
{
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
}

function startGame()
{
  // add or remove a class from certain element
    //  console.log(startScreen.classList)

    startScreen.classList.add('hide');
    gameScreen.classList.remove('hide');

//creating 5 cars

for(i = 1; i<6; i++){
   let car = document.createElement('div');
   car.innerText = "Car" + " " + i;
   gameScreen.appendChild(car);
 }

}

function keyPressed(event)
{
    event.preventDefault();
    console.log("key pressed",event.key)
    keys[event.key] = true
    console.log(keys)
}

function keyReleased(event)
{
    event.preventDefault();
    console.log("key released",event.key)
    keys[event.key] = true
    console.log(keys)
}