const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = prompt('Guess a number between 1 and 100');
    guess = Number(guess);

    if(isNaN(guess)){
        alert("Please enter a valid number");

    }
    else if (guess < minNum || guess > maxNum){
        alert("Please enter a number between 1 and 100");

    }
    else{
        attempts++;
        if(guess < answer){
            alert("Too low try again");
        }
        else if (guess > answer){
            alert("Too high try again");
        }
        else{
            alert("You got it right in " + attempts + " attempts");
            running = false;

        }
    }
    
}