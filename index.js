                                                                                                        // ex 1
const text = document.querySelector(".message-timer")
let messageTime = 0
const messageInterval = setInterval(message, 1000)
function message(){
    messageTime ++
    text.textContent = `timer: ${messageTime}`
    if(messageTime === 5){
        alert("таймер завершився")
        clearInterval(messageInterval)
    }
}
                                                                                                        // ex 2
const changeEl = document.querySelector(".change")
let num = 10
const changeInterval = setInterval(changeSize, 1000)
function changeSize (){
    num = num + 10
    changeEl.style.width = `${num}px`
    changeEl.style.height = `${num}px`
    if(changeEl.style.width === "150px"){
        clearInterval(changeInterval)   
    }
}
                                                                                                        // ex 3
const game = document.querySelector(".game")
const score = document.querySelector(".score")
let countClicks = 0
let time = 0
const gameInterval = setInterval(positionGame, 800)
function positionGame (){
    time++
    console.log(time)
    game.style.top = `${Math.floor(Math.random() * 700)}px`;
    game.style.left = `${Math.floor(Math.random() * 1600)}px`;
    game.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    if(time === 25){
        clearInterval(gameInterval)  
        alert(`Ви програли набравши ${countClicks} балів`)
        game.removeEventListener("click", onClick)
        score.textContent = `Lose`
    }
    if(countClicks === 25){
        clearInterval(gameInterval)  
        alert(`Ви перемогли набравши ${countClicks} балів`)
        game.removeEventListener("click", onClick)
        score.textContent = `Win`
    }
}
game.addEventListener("click", onClick)
    function onClick(e){
        if(e.target === game){
            countClicks = countClicks + 1
            score.textContent = `score: ${countClicks}`
        }
    }
                                                                                                        // ex 4
let timerTime = parseInt(prompt("Enter time"))
const countInterval = setInterval(timerCount, 1000)
function timerCount(){
    const timerCounter = document.querySelector(".timer-time")
    if(timerTime >= 1){
        timerTime = timerTime - 1
        timerCounter.textContent = `score: ${timerTime}`
    } else {
        timerCounter.textContent = "таймер завершився"
        alert("таймер завершився")
        clearInterval(countInterval)
    }
}