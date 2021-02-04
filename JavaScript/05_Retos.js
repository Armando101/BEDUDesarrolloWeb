/**************** Reto 1 ************************/
// Solución 1
function flatten(arrays) {
  const arr = [];
  for (let i = 0; i < arrays.length; i++) {
    if (typeof arrays[i] === 'object') {
      arr.push(...flatten(arrays[i]));
    } else {
      arr.push(arrays[i]);
    }
  }
  return arr;
}

// Solución 2
function flatten(arrays) {
  return arrays.reduce(function(flat, current) {
    return flat.concat(current);
  }, []);
}

// Solución 3
function flatten(arrays) {
  return arrays.reduce((prev, curr) => {
    if (typeof curr === 'object') {
      prev.push(...flatten(curr));
    } else {
      prev.push(curr);
    }
    return prev;
  }, []);
}


var arrays = [[1, 2, 3], [4, 5], [6], 7, [8, [9, 10]]];
var array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/**************** Reto 2 ************************/
function compact(array) {
  return array.filter(item => item);
}

var array = [0, 1, false, 2, '', 3];
var compactedArray = compact(array);

console.log(compactedArray); // [1, 2, 3]

/**************** Reto 3 ************************/
function loop(start, test, update, body) {
  if (!test(start)) return;

  body(start);
  loop(update(start), test, update, body);
}

var test = function(n) {
  return n > 0;
}

var update = function(n) {
  return n - 1;
}

loop(3, test, update, console.log);
// 3
// 2
// 1