//問題1
const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (val, i, array) {
  return (array.indexOf(val) === i);
});
console.log(result);

//問題2
function leapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year}年はうるう年です`;    
  }
  else {
    return `${year}年はうるう年ではありません`;
  }
}

console.log(leapyear(2020));
console.log(leapyear(2021));



  