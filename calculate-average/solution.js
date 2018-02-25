function find_average(array) {
  let accumulator = 0;
  return array.reduce((accumulator, currentValue) => accumulator + currentValue) /array.length
}