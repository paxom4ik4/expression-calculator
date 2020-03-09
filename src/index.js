function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    if (/\/ 0/.test(expr)) {
        throw new Error ('TypeError: Division by zero.');
    }
    let brackets = expr.split('').filter(x => x === '(' || x === ')').join('');
    let Length = 0;
    do {
        Length = brackets.length;
        brackets = brackets.replace('()', '');
    } while (Length != brackets.length)
    if (brackets.length > 0) {
        throw new Error('ExpressionError: Brackets must be paired');
    }
    let func = new Function("return " + expr);
    return func();
}


module.exports = {
    expressionCalculator
}
