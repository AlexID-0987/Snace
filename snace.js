const can = document.getElementById('canvas')
const canvas = can.getContext('2d')
let score = document.getElementById('score')
/*canvas.fillStyle='coral'*/
let width = canvas.width
let heigth = canvas.heigth
score.innerText = 0
let textDown
let move = 20
let revr = 20
let number = []
function num (item){
    for (let i=30;i<item;i++){
       if(i%20===0){
        number.push(i)
       }
    }
}
num(380)
console.log(number)
let food = {
    x: number[(Math.floor(Math.random() * number.length))],
    y: number[(Math.floor(Math.random() * number.length))]
}
let snake = []
snake[0] = { x: 180, y: 200 }
let snakeMoveX = snake[0].x
let snakeMoveY = snake[0].y
window.addEventListener('keydown', down)
function down(e) {
    if (e.code === "ArrowUp" && textDown != 'Down') {
        textDown = 'Up'
    }
    if (e.code === "ArrowDown" && textDown != 'Up') {
        textDown = 'Down'
    }
    if (e.code === "ArrowRight" && textDown != 'Left') {
        textDown = 'Right'
    }
    if (e.code === "ArrowLeft" && textDown != 'Right') {
        textDown = 'Left'
    }

}



function foodDraw() {
    let foodImage = new Image(20, 20);
    foodImage.src = 'image/eat.png'
    foodImage.onload = function () {
        canvas.drawImage(foodImage, food.x, food.y)
    }
}

console.log(food)
function multStroke() {
    for (let i = 0; i < 19; i++) {
        canvas.strokeStyle = "black"
        canvas.lineWidth = 1
        canvas.moveTo(move, 400)
        canvas.lineTo(move, 1)
        canvas.stroke()
        move += 20
        console.log('I`m mult')
    }
}

function multStroke1() {
    for (let i = 0; i < 19; i++) {
        canvas.strokeStyle = "black"
        canvas.lineWidth = 1
        canvas.moveTo(400, revr)
        canvas.lineTo(1, revr)
        canvas.stroke()
        revr += 20
        console.log('I`m mult  1')
    }
}
function snakeDraw() {
    for (let i = 0; i < snake.length; i++) {
        canvas.fillStyle = i == 0 ? 'gold' : 'red'
        canvas.fillRect(snake[i].x, snake[i].y, 20, 20)

    }

}
let coorMove
function moveSnake() {


    if (textDown === 'Up') {
        snakeMoveY -= 20

    }
    if (textDown === 'Down') {
        snakeMoveY += 20

    }
    if (textDown === 'Left') {
        snakeMoveX -= 20
    }
    if (textDown === 'Right') {
        snakeMoveX += 20
    }
    let newSnake = {
        x: snakeMoveX,
        y: snakeMoveY
    }

    snake.unshift(newSnake)


    console.log(snake)
    if (snake[0].x == food.x && snake[0].y == food.y) {
        score.innerText++;
        food = {
            x: number[(Math.floor(Math.random() * number.length))],
            y: number[(Math.floor(Math.random() * number.length))]
        }

    }
    else {
        snake.pop()
    }


}
function gameOver() {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x < -20 || snake[i].x >= 410 || snake[i].y < -20 || snake[i].y >= 410) {
            alert('Game Over')
            clearInterval(intervalGame)
        }
    }
    if(score.innerText>5){
        clearInterval(intervalGame)
        score.innerText="Game Over"
    }
}
function Game() {
    multStroke()
    multStroke1()
    snakeDraw()
    foodDraw()
    moveSnake()
    gameOver()
    
}

let intervalGame = setInterval(Game, 100)



