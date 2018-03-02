function capitalize(s,arr){
    let string = s.split('');
    for(let i in arr) {
      if(string[arr[i]]) string[arr[i]] = string[arr[i]].toUpperCase();
    }
    return string.join('');
  }