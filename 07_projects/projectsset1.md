# projects related to DOM

## Projects Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-bgtjwd?file=index.html)

# Solution Code

## Project 1 Solution

```javascript

const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")

buttons.forEach( function(button){
  console.log(button)

  button.addEventListener("click", function(e){
    console.log(e)
    console.log(e.target)

    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id  // "grey"
    }

    if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id  //"white"
    }

    if(e.target.id === "blue"){
      body.style.backgroundColor =e.target.id  // "blue"
    }

    if(e.target.id === "yellow"){
      body.style.backgroundColor =e.target.id  // "yellow"
    }

  })

} )

```


## Project 2 Solution


```javascript

const form = document.querySelector("form")

form.addEventListener("submit", function(e){
  e.preventDefault();

  const height = document.querySelector("#height").value
  const weight = document.querySelector("#weight").value
  const result = document.querySelector("#results")
  const condition = document.querySelector("#condition")


  // this is for validation and calculation of BMI.

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `please enter  a valid height. ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `please enter a valid weight. ${weight}`
  }

  else{
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>Your BMI is: ${BMI}</span>`
  }

   
 // this is the condition check with the help of BMI result.

  const bmiValue = parseFloat(result.textContent.split(":")[1]);

  if( bmiValue >= 0 && bmiValue < 18.6){
    condition.innerHTML = `UNDER WEIGHT`
  }
  else if(bmiValue >= 18.6 && bmiValue < 24.9){
    condition.innerHTML = `NORMAL RANGE`
  } 
  else if(bmiValue >= 24.9){
    condition.innerHTML = `OVER WEIGHT`
  }

})
```



## Project 3  


```javascript

const clock = document.querySelector("#clock")
const dates = document.querySelector("#date")


// let date = new Date();
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleDateString())


setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
  dates.innerHTML = date.toLocaleDateString();
}, 1000)
```



## Project 4  Solution 

```javascript


let  randomNum = (parseInt(Math.random() * 100 + 1))

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHigh = document.querySelector(".lowOrHi")
const startOver =document.querySelector(".resultParas")


const div = document.createElement("div")
div.style.cursor = "pointer"
div.style.border = "2px solid gray"
div.style.backgroundColor = "#414141"



let prevGuess = []
let numGuess = 1;

let playGame = true;


if(playGame){
  submit.addEventListener("click", function(e){
    e.preventDefault()

   const userGuess = parseInt(userInput.value)
   console.log(userGuess)
   validateGuess(userGuess);

  })
}


function validateGuess(guess){

  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess < 1){
    alert('please enter a number greater then 1')
  }
  else if(guess > 100){
    alert('please enter a number less then 100')
  }
  else{
    prevGuess.push(guess)
    
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over: random number was: ${randomNum}`)
      endGame()
    }
    else{
      checkGuess(guess)
      displayGuess(guess)
    }

    
  }
}


function checkGuess(guess){
  if(guess === randomNum){
    displayMessage(`congrats you guessed it.`)
  }
  else if(guess < randomNum){
    displayMessage(`you guess too low`)
  }
  else if(guess > randomNum){
    displayMessage(`you guess too high`)
  }
} 



function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML  += `${guess}, `
  numGuess++
  remaining.innerHTML = `${11 - numGuess}`
}


function displayMessage(message){
 lowOrHigh.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
userInput.value = ''
userInput.setAttribute("disabled", "")
div.classList.add("button")
div.innerHTML = `<h2 id="newGame">Start new Game</h2>`
startOver.appendChild(div)
playGame = false;
newGame();
}



function newGame(){
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener("click", function(e){
    randomNum = parseInt(Math.random() * 100 + 1)

    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute("disabled")
    startOver.removeChild(div)

    playGame = true;

  })
}
```



## Project 5  Solution 

```javaScript


const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
 insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  </div>
 `
})
```





## Project 6  Solution 

```javaScript


// generate random color

const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'

  for(let i=0; i<6; i++){
     color = color + hex[Math.floor(Math.random() *16)]
  }
  return color;
  
}
console.log(randomColor())

//__________________________________________________


// start

let intervalID;

const startChangingColor = function(){

  const changeBG = function(){
    document.body.style.backgroundColor = randomColor()
  }

  if(!intervalID){
    intervalID = setInterval(changeBG,1000)
  } 
}

const start = document.getElementById('start')
start.addEventListener('click',startChangingColor)


// stop


const stopChangingColor = function(){
  clearInterval(intervalID)
  intervalID = null
}
const stop = document.getElementById('stop')
stop.addEventListener('click',stopChangingColor)


```