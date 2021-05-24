let number_a = prompt('Введите первое число')
let number_b = prompt('Введите второе число')

let operation =  prompt('Математическая операция')

function addition(a, b) {
    console.log(parseInt(a) + parseInt(b))
}

function subtraction(a, b) {
    console.log(parseInt(a) - parseInt(b))
}

function multiplication(a, b) {
    console.log(a * b)
}

function division(a, b) {
    console.log(a / b)    
}

if (operation == '+') addition(number_a, number_b)
if (operation == '-') subtraction(number_a, number_b)
if (operation == '*') multiplication(number_a, number_b)
if (operation == '/') division(number_a, number_b)