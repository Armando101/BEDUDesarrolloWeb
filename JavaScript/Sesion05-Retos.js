var Group = function(arreglo) {
  this.members = arreglo;
}

Group.prototype.add = function (value) {
  if (!this.has(value)) {
    this.members.push(value);
  }
}

Group.prototype.has = function(value) {
  return this.members.includes(value);
}

Group.from = function(arr) {
  return new Group(arr);
}


var group = Group.from([1, 2, 3, 4, 5]);
console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false

group.add(10);
console.log(group.has(10)); // true


/********Ejercicio 2 **************/
var Triangle = function(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

var triangle = new Triangle(1, 2, 3);

console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6