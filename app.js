//DOM Variables:
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eigth = document.getElementById('eigth');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const dot = document.getElementById('dot');
const percentual = document.getElementById('percetual');

const keyboard = document.getElementById('teclado');
const clear = document.getElementById('clear');
const cancelEntry = document.getElementById('cancel-entry');
const equal = document.getElementById('equal');
const resultado = document.getElementById('resultado');
const botao = document.querySelectorAll('botao');




/*Show numbers only until input is full and disable number buttons.
In the end of the function, call the function that controls when user can use the dot.
*/
const display = (string) => {
    
    let displayCalc = resultado.textContent += string;
    if (displayCalc.length >= 15) {
        one.disabled = true;
        two.disabled = true;
        three.disabled = true;
        four.disabled = true;
        five.disabled = true;
        six.disabled = true;
        seven.disabled = true;
        eigth.disabled = true;
        nine.disabled = true;
        zero.disabled = true;
    }   else  {
        one.disabled = false;
        two.disabled = false;
        three.disabled = false;
        four.disabled = false;
        five.disabled = false;
        six.disabled = false;
        seven.disabled = false;
        eigth.disabled = false;
        nine.disabled = false;
        zero.disabled = false;

    }
    displayDot1(resultado.textContent);

};

//Allow dot only under certain circumstances:
const displayDot1 = (string) => {
    string = document.getElementById('resultado').textContent;
    if (/^[\d]*$/.test(string) == true) {
        document.getElementById('dot').disabled = false;
    } else if (/^[\d]*\.?[\d]*$/.test(string) == true) {
        document.getElementById('dot').disabled = true;
    } else if (/^[\d]*\.?[\d]*[\+\-\*\/\%][\d]*[\d]*$/.test(string) == true) {
        document.getElementById('dot').disabled = false;
    } else if (/^[\d]*\.?[\d]*[\+\-\*\/\%][\d]*\.[\d]*$/.test(string) == true) {
        document.getElementById('dot').disabled = true;
    }
};



const operate = (string) => {

    if(typeof string == 'number') {
        return string === string;
    } else if (string.includes('+')) {
        let whereIsOperator = string.indexOf('+');
        let firstNumber = string.slice(0, whereIsOperator);
        let secondNumber = string.slice(whereIsOperator + 1);
        add(firstNumber, secondNumber);
    } else if (string.includes('-')) {
        let whereIsOperator = string.indexOf('-');
        let firstNumber = string.slice(0, whereIsOperator);
        let secondNumber = string.slice(whereIsOperator + 1);
        subtract(firstNumber, secondNumber);
    } else if (string.includes('x')) {
        let whereIsOperator = string.indexOf('x');
        let firstNumber = string.slice(0, whereIsOperator);
        let secondNumber = string.slice(whereIsOperator + 1);
        multiply(firstNumber, secondNumber);
    } else if (string.includes('/')) {
        let whereIsOperator = string.indexOf('/');
        let firstNumber = string.slice(0, whereIsOperator);
        let secondNumber = string.slice(whereIsOperator + 1);
        divide(firstNumber, secondNumber);
    } else if (string.includes('%')) {
        let whereIsOperator = string.indexOf('%');
        let firstNumber = string.slice(0, whereIsOperator);
        let secondNumber = string.slice(whereIsOperator + 1);
        percent(firstNumber, secondNumber);
    }
}
                                                              
const add = (num1, num2) => {
    let addResult = `${Number(num1)+Number(num2)}`;
    display(addResult)
    return resultado.textContent = addResult;
    
};

const subtract = (num1, num2) => {
    let subtractResult = `${Number(num1)-Number(num2)}`;
    display(subtractResult)
    return resultado.textContent = subtractResult;
};

const multiply = (num1, num2) => {
    let multiplyResult = `${Number(num1)*Number(num2)}`;    
    display(multiplyResult)
    return resultado.textContent = multiplyResult;
};

const divide = (num1, num2) => {
    let divideResult = `${Number(num1)/Number(num2)}`;
    display(divideResult)
    if (num2 == 0) {
        return resultado.textContent = 'Infinito e além';
    } else {
        ;
        if (/[\d]*[.][\d]*/.test(divideResult) == true) {
            return resultado.textContent = Number(divideResult).toFixed(3)
        } else {
            return resultado.textContent = divideResult;
        }
    }
};

const percent = (num1, num2) => {
    let percentResult = `${Number(num1)*0.01*Number(num2)}`;
    display(percentResult)
    return resultado.textContent = percentResult;
};

const deleteLast = (string) => {
    let corrected = string.substring(0, string.length - 1);
    return resultado.textContent = corrected;
};

// Events:
one.addEventListener('click', () => display('1'));
two.addEventListener('click', () => display('2'));
three.addEventListener('click', () => display('3'));
four.addEventListener('click', () => display('4'));
five.addEventListener('click', () => display('5'));
six.addEventListener('click', () => display('6'));
seven.addEventListener('click', () => display('7'));
eigth.addEventListener('click', () => display('8'));
nine.addEventListener('click', () => display('9'));
zero.addEventListener('click', () => display('0'));

clear.addEventListener('click', () => window.location.reload(true));
cancelEntry.addEventListener('click', () => deleteLast(resultado.textContent));

plus.addEventListener('click', () => {
    if (/^[\d]*\.?[\d]*[\+\-\x\/\%][\d]*\.?[\d]*$/.test(resultado.textContent) == true) {
        operate(resultado.textContent);
        display('+');
    } else {
        display('+')
    }
});


minus.addEventListener('click', () => {
    if (/^[\d]*\.?[\d]*[\+\-\x\/\%][\d]*\.?[\d]*$/.test(resultado.textContent) == true) {
        operate(resultado.textContent);
        display('-');
    } else {
        display('-')
    }
});

multiplication.addEventListener('click', () => {
    if (/^[\d]*\.?[\d]*[\+\-\x\/\%][\d]*\.?[\d]*$/.test(resultado.textContent) == true) {
        operate(resultado.textContent);
        display('x');
    } else {
        display('x')
    }
});

division.addEventListener('click', () => {
    if (/^[\d]*\.?[\d]*[\+\-\x\/\%][\d]*\.?[\d]*$/.test(resultado.textContent) == true) {
        operate(resultado.textContent);
        display('/');
    } else {
        display('/')
    }
});

percentual.addEventListener('click', () => {
    if (/^[\d]*\.?[\d]*[\+\-\x\/\%][\d]*\.?[\d]*$/.test(resultado.textContent) == true) {
        operate(resultado.textContent);
        display('%');
    } else {
        display('%')
    }
});


dot.addEventListener('click', () => display('.'));
equal.addEventListener('click', () => operate(resultado.textContent));

    
document.addEventListener('keydown', (e) => {

    display(e.key == '0' || e.key == '1' || e.key == '2' || e.key == '3' || e.key == '4' || e.key == '5' || e.key == '6' || e.key == '7' || e.key == '8' || e.key == '9' ? e.key : '')
});


