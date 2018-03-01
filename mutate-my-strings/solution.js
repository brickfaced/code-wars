function mutateMyStrings(stringOne, stringTwo){
  let strings = [stringOne];
  let lettersOne = stringOne.split('');
  let lettersTwo = stringTwo.split('');
  for(let i in stringOne) {
    if(lettersOne[i] !== lettersTwo[i]){
      lettersOne[i] = lettersTwo[i]
      strings.push(lettersOne.join(''));
    }
  }
  return strings.join('\n') + '\n';
}