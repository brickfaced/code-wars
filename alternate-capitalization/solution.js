function capitalize(s){
  let sOne ='';
  let sTwo ='';
  for(let i in s){
      if (i % 2 != 0) {
        sOne += s[i].toLowerCase();
        sTwo += s[i].toUpperCase();
        }
        else {
          sOne += s[i].toUpperCase();
          sTwo += s[i].toLowerCase();
        }
    }
  return [sOne, sTwo];
};