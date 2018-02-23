function solution(str){
  let reverseStr = [];
  for(var i in str) {
    reverseStr.unshift(str[i]);
  }
  return reverseStr.join('');
}