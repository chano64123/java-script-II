const number1 = prompt("Ingrese número 1")
const number2 = prompt("Ingrese número 2")
const resultSelector = document.getElementById('result');

const validarDivision = (number1, number2) => {
  let message = 'Todo correcto';

  if (isNaN(number1) || isNaN(number2)) {
    message = 'El numero 1 o numero 2, no contienen valores numericos.';
    console.error(message);
    return { success: false, message };
  }

  if (number2 === 0) {
    message = 'El numero 2 no puede ser cero, no se puede dividir entre cero.';
    console.error(message);
    return { success: false, message };
  }

  return { success: true, message };
}

const dividir = (number1, number2, validar) => {
  number1 = parseInt(number1);
  number2 = parseInt(number2);

  const validation = validar(number1, number2);

  let message = validation.message;

  if (validation.success) {
    const cociente = number1 / number2;
    message = `${number1} / ${number2} = ${cociente}`;
  }

  resultSelector.innerHTML = message;
}

dividir(number1, number2, validarDivision);