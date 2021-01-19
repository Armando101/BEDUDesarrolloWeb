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

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false

// console.log('Test 6:', deepEqual(car, car)) // true
console.log('Test 7:', deepEqual(car, { brand: 'BMW', color: 'Black', year: 1999 })) // false
console.log('Test 7:', deepEqual(car, { brand: 'BMW', color: 'Black', year: 2021 })) // false

