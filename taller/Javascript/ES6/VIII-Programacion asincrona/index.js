//Example
setTimeout(() => {
  console.log("I will happen later...");
}, 5000);

//Promise
let miPrimeraPromise = new Promise((resolve, reject) => {
  // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
  // En la vida real, probablemente uses algo como XHR o una API HTML5.
  setTimeout(function () {
    resolve("¡Éxito!"); // ¡Todo salió bien!
  }, 250);
});

miPrimeraPromise.then((successMessage) => {
  // succesMessage es lo que sea que pasamos en la función resolve(...) de arriba.
  // No tiene por qué ser un string, pero si solo es un mensaje de éxito, probablemente lo sea.
  console.log("¡Sí! " + successMessage);
});

//Async/Await
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  const b = await resolveAfter2Seconds(30);
  return x + a + b;
}

add1(10).then((v) => {
  console.log(v); // prints 60 after 4 seconds.
});

async function add2(x) {
  const p_a = resolveAfter2Seconds(20);
  const p_b = resolveAfter2Seconds(30);
  return x + (await p_a) + (await p_b);
}

add2(10).then((v) => {
  console.log(v); // prints 60 after 2 seconds.
});

// Fetch API
function foo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// ES6
fetch("http://www.api.com/data", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
  body: JSON.stringify({ title: title, body: body }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => err);

// Async Await
async function postData() {
  let response = await fetch("http://www.api.com/data", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  });

  let data = await response.json();

  if (response.status !== 2000) {
    throw Error(data.message);
  }

  console.log(data);
}
