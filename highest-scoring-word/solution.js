function high(x){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const words = x.split(' ');
  let highestScoringWord = ''
  let highScore = 0;
  for (let i in words) {
    const score = words[i]
      .split('')
      .map(letters => letters.charCodeAt(0) - 96)
      .reduce(reducer, 0)
    if (score > highScore) {
      highScore = score;
      highestScoringWord = words[i];
    }
  } 
  return highestScoringWord;
}