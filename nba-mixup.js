firstNames = ['Steph', 'Lebron', 'Kevin', 'Giannis', 'James'];
lastNames = ['Curry', 'James', 'Durant', 'Antetenkounmpo', 'Harden'];

var pickFirst = firstNames[Math.floor(Math.random()*firstNames.length)];
var pickLast = lastNames[Math.floor(Math.random()*lastNames.length)];



const returnMixedName = () => {
  return `${pickFirst } ${pickLast}`
}

console.log(returnMixedName())
