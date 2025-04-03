const textbox = document.getElementById('textbox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;
 function convert(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = ((temp * 9/5) + 32).toFixed(2);
        result.textContent = temp + "F";
    }
    else if(toCelcius.checked){
        temp = Number(textbox.value);
        temp = ((temp - 32) * 5/90).toFixed(2);
        result.textContent = temp + "C";
    
    }
    else{
        result.textContent = `Select a unit to convert to!`;
    }

 }

