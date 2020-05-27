function hello(name) {
  return "Hello " + name;
}
console.log(hello("Jack")); // Hello Jack

// As long as no curly braces are used after the fat arrow, the return is implicit.
var hello = (name) => "Hello " + name;
console.log(hello("Jack")); // Hello Jack

//Asignación de funciones
const foo = function () {
  console.log("foobar");
};
// Invocación usando una variable
foo();

//Callbacks
function diHello() {
  return "Hello ";
}
function saludar(saludo, nombre) {
  console.log(saludo() + nombre);
}
// Pasamos `diHola` como argumento de la función `saludar`
saludar(diHello, "JavaScript!");

//Retornar funciones
function diHola() {
  return function () {
    console.log("¡Hola!");
  };
}

//Parentesis dobles

diHola()();

//Funciones internas

function betterExampleNeeded() {
  var a = 1;
  function oneMoreThanA() {
    return a + 1;
  }
  return oneMoreThanA();
}
