 var result =0;
 var display = document.getElementsByClassName("result")
 console.log(display[0]);

function calculate(sign){

    var firstNumber =document.getElementById("firstNumber").value

console.log(firstNumber);

var secondNumber = document.getElementById("secondNumber").value
console.log(secondNumber);

if(sign == '+')
    {result = parseInt(firstNumber) + parseInt(secondNumber)
        display[0].innerText = `${firstNumber} + ${secondNumber} = ${result}`
    }

if(sign == '-')
    { result =  firstNumber - secondNumber
        display[0].innerText = `${firstNumber} - ${secondNumber} = ${result}`

    }

if(sign == '*')
    { result =  firstNumber * secondNumber
        display[0].innerText = `${firstNumber} x ${secondNumber} = ${result}`

    }

if(sign == '/')
    { 
    result = firstNumber / secondNumber;
    result = result.toFixed(3)
    display[0].innerText = `${firstNumber} / ${secondNumber} = ${result}`
}
}

