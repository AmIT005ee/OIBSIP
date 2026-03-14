let frominp = document.querySelector("#from");
let toinp = document.querySelector("#to");
let temp = document.querySelector("#temp");
let covertBtn = document.querySelector(".covert-btn button");
let result = document.querySelector("#result");
let swapBtn = document.querySelector("#swap");

swapBtn.addEventListener("click", function(){
    let temp = frominp.value;
    frominp.value = toinp.value;
    toinp.value = temp;
});

covertBtn.addEventListener("click", convertTemperature);
temp.addEventListener("input", convertTemperature);
frominp.addEventListener("change", convertTemperature);
toinp.addEventListener("change", convertTemperature);

function convertTemperature(){
    let fromUnit = frominp.value;
    // console.log(fromUnit);

    let toUnit = toinp.value;
    // console.log(toUnit);
    //string converted to number
    let tempValue = Number(temp.value);

    if(temp.value === "" || isNaN(temp.value)){
        alert("Please enter a valid temperature");
        return;
    }
    
    //first convert all units to celsius
    let celsiusTemp;
    if(fromUnit === "celsius"){
        celsiusTemp = tempValue;
    }
    else if(fromUnit === "fahrenheit"){
        celsiusTemp = ((tempValue - 32) * 5/9);
    }
    else if(fromUnit === "kelvin"){
        celsiusTemp = tempValue - 273.15
    }
    
    //now convert celsius values to required unit
    let convertedTemp;
    let unitSymbol;
    if(toUnit === "celsius"){
        unitSymbol = "°C"
        convertedTemp = celsiusTemp;
    }
    else if(toUnit === "fahrenheit"){
        unitSymbol = "°F"
        convertedTemp = (celsiusTemp * 9/5) + 32;
    }
    else if(toUnit === "kelvin"){
        unitSymbol = "K"
        convertedTemp = celsiusTemp + 273.15;
    }
    
    result.value = convertedTemp.toFixed(2) + " " + unitSymbol;
}