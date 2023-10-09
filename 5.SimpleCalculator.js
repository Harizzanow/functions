function calculator(num1, num2, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let substract = (a, b) => a - b;
    let res = 0
    switch (operator) {
        case "multiply": res = multiply(num1, num2); break
        case "divide": res = divide(num1, num2); break;
        case "add": res = add(num1, num2); break
        case "substract": res = substract(num1, num2); break
    }
    console.log(res)


}
calculator(5, 5, 'multiply')
calculator(40, 8, 'divide')
calculator(50, 13, `substract`)