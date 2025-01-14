const output = document.getElementById('output');

const operators = ['+', '-', '*', '/'];

function clearOutput() {
    output.textContent = '';
}

function computeResult() {
    try {
        output.textContent = eval(output.textContent);
    } catch (error) {
        output.textContent = 'Error';
    }
}

function appendToOutput(value) {
    let currentText = output.textContent;

    if (operators.includes(value) && operators.includes(currentText.slice(-1))) {
        return;
    }
    output.textContent += value;
}

function removeLastChar() {
    let currentText = output.textContent;
    output.textContent = currentText.slice(0, -1);
}

function changeTheme1() {
    let orangeKeys = document.getElementsByClassName("Orange_key");
    for (let i = 0; i < orangeKeys.length; i++) {
        orangeKeys[i].style.backgroundColor = 'hsl(35, 100%, 55%)';
    }

    let otherKeys = document.getElementsByClassName("other_keys");
    for (let i = 0; i < otherKeys.length; i++) {
        otherKeys[i].style.backgroundColor = 'hsl(0, 0%, 30%)';
    }

    document.body.style.backgroundColor = '#f0f0f0'
    document.querySelectorAll('button').forEach(button => button.style.color = 'white');

    document.querySelector('.calculator-container').style.backgroundColor = 'hsl(0, 0%, 15%)';

    document.querySelector('.display').style.backgroundColor = 'hsl(0, 0%, 20%)';

    document.querySelector('.display').style.color = '#f0f0f0';
}

function changeTheme2() {
    let orangeKeys = document.getElementsByClassName("Orange_key");
    for (let i = 0; i < orangeKeys.length; i++) {
        orangeKeys[i].style.backgroundColor = 'hsl(185, 58%, 25%)';
    }

    let otherKeys = document.getElementsByClassName("other_keys");
    for (let i = 0; i < otherKeys.length; i++) {
        otherKeys[i].style.backgroundColor = 'hsl(210, 50%, 90%)';
    }

    document.body.style.backgroundColor = 'hsl(224, 28%, 35%)'

    document.querySelectorAll('button').forEach(button => button.style.color = 'black');

    document.querySelector('.calculator-container').style.backgroundColor = 'hsl(223, 31%, 20%)';

    document.querySelector('.display').style.backgroundColor = 'hsl(224, 36%, 15%)';

    document.querySelector('.display').style.color = '#f0f0f0';
}

function changeTheme3() {
    let orangeKeys = document.getElementsByClassName("Orange_key");
    for (let i = 0; i < orangeKeys.length; i++) {
        orangeKeys[i].style.backgroundColor = 'hsl(281, 89%, 26%)';
    }

    let otherKeys = document.getElementsByClassName("other_keys");
    for (let i = 0; i < otherKeys.length; i++) {
        otherKeys[i].style.backgroundColor = 'hsl(268, 71%, 12%)';
    }

    document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'

    document.querySelectorAll('button').forEach(button => button.style.color = 'hsl(52, 100%, 62%)');

    document.querySelector('.calculator-container').style.backgroundColor = 'hsl(268, 71%, 12%)';

    document.querySelector('.display').style.backgroundColor = 'hsl(268, 47%, 21%)';

    document.querySelector('.display').style.color = 'hsl(52, 100%, 62%)';
}