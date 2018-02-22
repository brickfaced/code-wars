function formatWords (words) {
  if (!words) return '';
  let sentence = words.filter(empty => empty !== '');
  if(sentence.length >= 2){
    return sentence.join(', ').replace(/,([^,]*)$/, ' and$1')
  }
  return sentence.toString();
}