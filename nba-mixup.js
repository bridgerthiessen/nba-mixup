firstNames = ['Steph', 'Lebron', 'Kevin', 'Giannis', 'James'];
lastNames = ['Curry', 'James', 'Durant', 'Antetenkounmpo', 'Harden'];
number = ['30', '6', '7', '34', '13']

var pickFirst = firstNames[Math.floor(Math.random()*firstNames.length)];
var pickLast = lastNames[Math.floor(Math.random()*lastNames.length)];
var pickNumber = number[Math.floor(Math.random()*number.length)];



const returnMixedName = () => {
  return `${pickFirst } ${pickLast}, ${pickNumber}`
}

console.log(returnMixedName())
