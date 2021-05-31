let displayText = '';
let flag = 0;
let operanda;
let operandb;
let operator;
const display = document.querySelector('.display');
display.textContent = displayText;

function add(x, y){
    // adds two numbers
    return x + y;
}

function subtract(x, y){
    // subtracts two numbers
    return x - y;
}

function multiply(x, y){
    // multiply two numbers
    return x * y;
}

function divide(x, y){
    // divide x with y
    if(y === 0){
        alert('Error');
    }
    result = x / y;
    if (result % 1 == 0){
        return result;
    }
    else return result.toFixed(4);
}

const operations = {'+': add, '-': subtract, '÷': divide, '×': multiply,};

function operate(operator, operand1, operand2){
    // Does the operation with the two operands in order
    // operator is a function.
    return operator(operand1, operand2);
}

function clickButton(e){
    const text = e.target.textContent;
    if(text.toLowerCase() === 'clear') {
        displayText = ''; 
        operanda = undefined; 
        operandb = undefined;
        flag = 0;
    }
    
    else if(text.toLowerCase() === 'delete') displayText = displayText.slice(0, displayText.length - 1);
    
    else if(text === '+' || text === '-' || text === '÷' || text === '×'){
        if(flag !== 1){
            
        
            flag = 1;
            if(typeof(operanda) === 'number'){
                operandb = Number(displayText);
                operanda = operate(operations[operator], operanda, operandb);
                displayText = `${operanda}`;
                operandb = undefined;
            }
            else {
                operanda = Number(displayText)
            }
            operator = text;
    }
    }

    else if(text === '='){
        flag = 1;
        let result = operate(operations[operator], operanda, Number(displayText));
        displayText = `${result}`;
        operanda = result;
    }

    else {
        if(flag === 1){
            displayText = '';
            flag = 0;
        }
        displayText = displayText + text;
    }

    const display = document.querySelector('.display');
    display.textContent = displayText;

}

function updateDisplay(){
    // updates the display
    const buttons = document.querySelectorAll('button.items');
    buttons.forEach((button) => {button.addEventListener('click', clickButton)})
}
updateDisplay();