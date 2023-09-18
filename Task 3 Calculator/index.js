
let display = document.getElementById('display');
let currentInput = '';
let currentOperation = '';
let firstNumber = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function performOperation(operation) {
    if (currentInput !== '') {
        firstNumber = currentInput;
        currentInput = '';
        currentOperation = operation;
    }
}

function calculate() {
    if (currentInput !== '' && firstNumber !== '') {
        let result;
        switch (currentOperation) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(currentInput);
                break;
            case '/':
                if (currentInput !== '0') {
                    result = parseFloat(firstNumber) / parseFloat(currentInput);
                } else {
                    result = 'Error';
                }
                break;
        }
        display.value = result;
        currentInput = result.toString();
        firstNumber = '';
        currentOperation = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    currentOperation = '';
    firstNumber = '';
}