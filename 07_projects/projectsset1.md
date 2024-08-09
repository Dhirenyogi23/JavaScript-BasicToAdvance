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


```

```
