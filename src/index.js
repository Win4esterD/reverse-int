module.exports = function reverse (n) {
  number = String(n);
  result = '';
  for (let i = number.length - 1; i >= 0; i-- ){
    if (number[i] != '-'){
    result += number[i];
    }
  }
  return result;
  }

