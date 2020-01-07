function accum(s) {
 let sr = s.split("");
  let z = [];
  for (let i = 0; i < sr.length; i++){
    z.push(subString(sr[i],i));
  }
  return z.join("-");
  
}

function subString(letter, num){
  let a = letter.toUpperCase();
  for (let i = 0; i < num; i++){
    a += letter.toLowerCase();
  }
  return a;
}