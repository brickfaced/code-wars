function insertDash(num) {
  let oddNums = '13579';
  let stringNum = num.toString().split('');
    for(var i in stringNum) {
      if((oddNums.includes(stringNum[i]) === true) && (oddNums.includes(stringNum[i-1]) === true)) {
        stringNum[i-1] = `${stringNum[i-1]}-`;
    }
  }
  return stringNum.join('');
}