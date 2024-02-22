// We need to create a function for change the hit data 
let hitrn;                                                           //Since we have to match the hit number and the clicked bubble number, so we need to create the variable outside of the function as a global variable.
function getNewHit() {                                               //newfunction created for Hit section
    hitrn = Math.floor(Math.random() * 10);                               //to generate random number between 0-10
    document.querySelector("#newHit").textContent = hitrn;             //to replace the random number with the existing number
}

// Creating a function to print the timer 60 - 0 sec 
let timer = 60;                                                     //timer variable create and the value is 60 (1min = 60sec)
function runTimer() {                                                //runTimer function created for timer
    let timerInt = setInterval(() => {                                 //created setInterval function to change the timer's value
        if (timer > 0) {
            timer--;                                                    //decrease the timer value by -1
            let clockTimer = document.querySelector("#timerval");       //to select the timer section in html file
            clockTimer.textContent = timer;                             //textcontent will replace the new timer data with the old one
        }
        else {
            clearInterval(timerInt);                                                                                //To stop the timer
            let clear = document.querySelector("#pbtm").innerHTML = `<h1 = >Game Over</h1>`;                  //When the timer ends the bubbles will be replaced by game over text

        }
    }, 1000);                                                       //newtimer will be replace after 1 sec
}

//Creating a function for score to increase it by 10
let score = 0;                                                      //variable created to set the default value 0
function increaseScore() {                                           //function created for increase the score 
    score += 10;                                                         //to increase the score value by 10 and save the previous value as well(+=)
    document.querySelector("#scoreVal").textContent = score;        //selecting the html tag and replacing the data
}

// Creating a function to print bubbles in the body section and also change the value of bubbles randomly
function makeBubble() {
    const bubble = document.querySelector("#pbtm")                  //making a constant variable for bottom page
    let clutter = "";                                               //clutter will be blank so we can add random data 
    for (let i = 1; i <= 200; i++) {                                  //using for loop to print the bubble  
        let random = Math.floor(Math.random() * 10)                     //to generate random number
        clutter += `<div class="bubble">${random}</div>`             //it will add the bubble in the innerHTML
        bubble.innerHTML = clutter;                                     //changing the innerhtml data
    }
}

document.querySelector("#pbtm").addEventListener("click", function (details) {       //event listiner applied to the parent of the bubble (event bubbling)
    let clickedNum = (Number(details.target.textContent));                               //Number(details = variable | target = particular tag in html | textContent = particular tag ka data) converted the string into the number 
if (clickedNum === hitrn) {                                                             // if the value of hit number and clicked number matched then:
        increaseScore();                                                                //change the score count
        getNewHit();                                                                    //change the hit number
        makeBubble();                                                                   //create new bubbles
    }
    // console.log(clickedNum)
});

//running the functions
getNewHit();
runTimer();
makeBubble();
