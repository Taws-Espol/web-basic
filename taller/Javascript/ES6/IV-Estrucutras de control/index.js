//  if / else if / else
var nombre = "gatito";
if (nombre == "mascotas") {
  nombre += "!";
} else if (nombre == "gatito") {
  nombre += "!!";
} else {
  nombre = "!" + nombre;
}
nombre == "gatito!!";

// while / do-while
while (true) {
  // ¡Un bucle infinito!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input));



//for loop
let items = [1, 2, 3];
// Old
for (var i = 0; i < items.length; i++) {
    console.log(array[i]);
}

// New
for (let item of items) {
    console.log(item);
}

//switch-case
switch(accion) {
    case 'dibujar':
        dibujalo();
        break;
    case 'comer':
        comelo();
        break;
    default:
        nohacernada();
}