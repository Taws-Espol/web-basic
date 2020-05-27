//Objeto literal
var obj = {
  nombre: "Zanahoria",
  for: "Max",
  detalles: {
    color: "naranja",
    medida: 12,
  },
};

console.log(obj["detalles"]["color"])

//Objeto prototipo
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  // Definir un objeto
  var Tu = new Persona("Tu", 24); 
  // Estamos creando una nueva persona llamada "Tu" 
  // (que fue el primer parametro, y su edad, el segundo)

//Destructuring
//object
const address = {
    street: "",
    city: "",
    country: ""
};

// old
const street = address.street;
const city = address.city;
const country = address.country;

// new
const { street, city, country: ctry } = address; // We can also rename the variables

// array
var foo = [1, 2, 3, 4];

var [one, two, three] = foo;
console.log(one); // 1
console.log(two); // 2
console.log(three); // 3

// Default values. They work only if a property is undefined. null, false and 0 are all still values!
var obj = { a: 1 };

var { a, b = "something" } = obj;
console.log(a); // 1
console.log(b); // something

//Spread operator

let obj = {
    foo: "foo",
    bar: "bar",
    baz: "baz"
};

let newObj = {...obj, baz: "NEW VALUE"};

console.log(obj)      // { foo: "foo", bar: "bar", baz: "baz" }
console.log(newObj)   // { foo: "foo", bar: "bar", baz: "NEW VALUE" }


const first = [1, 2, 3];
const second = [4, 5, 6];

// old
const combined = first.concat(second);

// new
const combined = [...first, "a", ...second, "b"]; // Easy to add other items.

const meals = [
    { id: 1, description: "Breakfast", calories: 420 },
    { id: 2, description: "Lunch", calories: 520 }
];

const meal = {
    id: 3,
    description: "Snack",
    calories: 180
};

const updatedMeals = [...meals, meal]; // Returns a new array with the addition.