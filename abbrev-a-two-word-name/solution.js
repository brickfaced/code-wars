function abbrevName(name){
  let nameSplitter = name.split(' ');
  let nameInitials = [];
  for(var i in nameSplitter) {
    nameInitials.push(nameSplitter[i].substring(0,1));
  }
  return `${nameInitials[0]}.${nameInitials[1]}`.toUpperCase();
}