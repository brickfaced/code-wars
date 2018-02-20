function isNice(arr) {
  if(arr.length === 0) return false;
  for(let i in arr) {
    if(arr.includes(arr[i] + 1) === false && arr.includes(arr[i] - 1) === false){
      return false;
    }
  } 
  return true
}