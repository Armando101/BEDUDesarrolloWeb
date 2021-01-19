function calculateAverage(numbers) {
  let total = 0;
  numbers.forEach(item => {
    total += item;
  });

  // const total = numbers.reduce((prev, curr) => prev + curr);
  return total/numbers.length;
}

const arr = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
const average = calculateAverage(arr);
console.log(average);

function keyValuePairs(array) {
  const obj = {};
  array.forEach(element => {
    obj[element[0]] = element[1];
  });
  return obj;
}

const arrToObj = [['brand', 'BMW'], ['color', 'black'], ['plate', '12345']];
const obj = keyValuePairs(arrToObj);

console.log(obj);


var singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {

  let filterArr = [];

  list.forEach(item => filterArr.push(item[propertyName]));

  return filterArr;
  return list.map(item => item[propertyName]);
}

console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]