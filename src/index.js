function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    function checkBalance(expr) {
    let pack = [],
      open = "(",
      close = ")";
    for (const symbol of expr) {
      let i = open.indexOf(symbol);
      if (i > -1) pack.push(close[i]);
      if (close.includes(symbol) && symbol != pack.pop()) return false
    }
    return pack.length == 0;
  }
  if (checkBalance(expr) == true) {
    let ff = expr;
    let ggg = ff.replace(/\s/g, '');
    let regexp = new RegExp(/\d*\/0/);
    let isZeroDivision = regexp.test(ggg);
    if (isZeroDivision) throw new RangeError("TypeError: Division by zero.");
	return new Function(`return ${expr}`)();
  } else {
    throw new RangeError("ExpressionError: Brackets must be paired");
  }
	
}

module.exports = {
    expressionCalculator
}
