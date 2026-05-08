function evaluatePostfix(expression) {
    let stack = [];

    for (let char of expression) {
        if (!isNaN(char)) {
            stack.push(Number(char));
        } else {
            let b = stack.pop();
            let a = stack.pop();

            switch (char) {
                case '+':
                    stack.push(a + b);
                    break;

                case '-':
                    stack.push(a - b);
                    break;

                case '*':
                    stack.push(a * b);
                    break;

                case '/':
                    stack.push(a / b);
                    break;
            }
        }
    }

    return stack.pop();
}


console.log(evaluatePostfix("23*54*+9-"));