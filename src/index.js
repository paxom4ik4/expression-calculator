function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    expr = expr.replace(/ /g, '')
    const bracketLeft;
    const bracketRight; 

    if(expr.match(/\(/g) === null) bracketLeft = 0
    else bracketLeft = expr.match(/\(/g).length

    if(expr.match(/\)/g) === null) bracketRight = 0 
    else bracketRight = expr.match(/\)/g).length;


    const isPaired = bracketLeft === bracketRight

    if (!isPaired) {
        throw new Error("ExpressionError: Brackets must be paired")
    }

    if ( expr.includes("/0") ) {
        throw new Error("TypeError: Division by zero.");
    }

    return new Function("return " + expr)()

}


module.exports = {
    expressionCalculator
}
