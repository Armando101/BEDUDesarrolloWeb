// Ejercicio 1

function compareObj(keys, obj1, obj2) {
  for (let i = 0; i < keys.length; i++) {
    if (!deepEqual(obj1[keys[i]], obj2[keys[i]])) {
      return false;
    }
  }
  return true;
}

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (!(typeof a === 'object' && typeof b === 'object')) {
    return false;
  }
  const keysFirstObj = Object.keys(a);
  const keysSecondObj = Object.keys(b);

  if (keysFirstObj.join() !== keysSecondObj.join()) {
    return false;
  }

  // Funciona sólo para objetos con dos propiedades
  // return deepEqual(a[keysFirstObj[0]], b[keysFirstObj[0]]) && deepEqual(a[keysFirstObj[1]], b[keysFirstObj[1]]);

  // Funciona para objetos con n propiedades
  return compareObj(keysFirstObj, a, b);
}

var john = {
  firstName: 'John',
  lastName: 'Doe'
}

var car = {
  brand: 'BMW',
  color: 'Black',
  year: 2021
}

var persona = {
  name: john,
  auto: car
}

var persona2 = {
  name: john,
  auto:  {
    brand: 'BMW',
    color: 'Black',
    year: 2050
  }
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

console.log('Test 6:', deepEqual(car, car)) // true
console.log('Test 7:', deepEqual(car, { brand: 'BMW', color: 'Black', year: 1999 })) // false
console.log('Test 7:', deepEqual(car, { brand: 'BMW', color: 'Black', year: 2021 })) // false
console.log('Test 8:', deepEqual(persona, persona)) // true
console.log('Test 9:', deepEqual(persona, persona2)) // false

// Ejercicio 2
function chunk(array, size) {
  const newArr = [...array];
  let finalArray = [];
  for (let i = 0; i < array.length; i+=size) {
    finalArray.push(newArr.splice(0, size));
  }
  return finalArray;
};

var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]

// Reto 3
function frequency(string) {
  const obj = {};
  const stringToArr = string.split('');
  for (let i = 0; i < stringToArr.length; i++) {
    let currentValue = stringToArr[i];
    if (obj[currentValue]) {
      obj[currentValue]++;
    } else {
      obj[currentValue] = 1;
    }
  }
  return obj;
}

console.log('Test 1:', frequency('cccbbbaaa'))
// {a: 3, b: 3, c: 3}
console.log('Test 2:', frequency('www.bedu.org'))
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log('Test 3:', frequency('john.doe@domain.com'))
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}