const celsiusEl = document.getElementById("celsius");
const type = document.getElementById("type");
const result = document.getElementById("result");



function computeTemp(){
    let degree =celsiusEl.value
        
    if(type.value==='Fahrenheit'){
        result.value=(degree  * 1.8 + 32).toFixed(2);
        }
        if(type.value==='Kelvin'){
            result.value=(degree  + 273.15).toFixed(2);
            }
    }


// eTemp(event){
//     const currentValue = +event.target.value

//     switch (event.target.name) {
//         case "celsius":
//             // kelvinEl.value = (currentValue + 273.15).toFixed(2);
//             fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
//             break;
        
//         case "fahrenheit":
//             celsiusEl.value = ((currentValue - 32) / 1.8 ).toFixed(2);
//             kelvinEl.value = ((currentValue - 32) / 1.8 + 273.15 ).toFixed(2);
//             break;
//         case "kelvin":
//             celsiusEl.value = (currentValue - 273.15).toFixed(2);
//             fahrenheitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
//             break;
//         default:
//             break;
//     }

// }