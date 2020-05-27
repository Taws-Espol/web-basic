function hacerSumadora(a) {
    return function(b) {
        return a + b;
    };
}
x = hacerSumadora(5);
y = hacerSumadora(20);
x(6) //Devuelve 11
y(7) //Devuelve 27

import React, { useState } from 'react';

function Example() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}