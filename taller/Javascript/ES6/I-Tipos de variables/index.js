//Var
function testVar() {
  var a = 30;
  if (true) {
    var a = 50;
    console.log(a);
  }
  console.log(a);
}
testVar(); // 50 50

for (var i = 0; i < 5; i++) {
  console.log(i); // 1, 2, 3, 4
}
console.log(i); // 5

//Let
function testLet() {
  let a = 30;
  if (true) {
    let a = 50;
    console.log(a);
  }
  console.log(a);
}
testLet(); // 50 30

for (let i = 0; i < 5; i++) {
  console.log(i); // 1, 2, 3, 4
}
console.log(i); // undefined

//Const
const pi = 3.14;
// pi = 42; TypeError: Assignment to constant variable.

const person = {
  name: "John",
};
person.name = "Mike";
console.log(person.name); // Mike. Doesn't prevent mutation.
