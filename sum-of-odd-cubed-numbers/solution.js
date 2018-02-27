function cubeOdd(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for(let i in arr) {
    if(typeof arr[i] === 'string') return undefined;
  }
  let newArray = arr.map(num => Math.pow(num, 3));
  return newArray.filter(num => num % 2).reduce(reducer);
}