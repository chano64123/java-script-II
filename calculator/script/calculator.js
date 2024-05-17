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
    const alerta = {
      title: "Ocurrio un error!",
      text: "El segundo numero no puede ser 0",
      icon: "error"
    };

    Swal.fire(alerta);
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

  const questionAlert = {
    title: "¿Quieres mostrar el resultado?",
    //text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
    cancelButtonText: "No quiero mostrar"
  }

  Swal.fire(questionAlert).then((result) => {
    if (result.isConfirmed) {
      const alerta = {
        title: "Resultado",
        text: message,
        icon: "success"
      };

      Swal.fire(alerta);
    } else {
      const alerta = {
        title: "Aviso",
        text: "El resultado no se va a mostrar",
        icon: "warning"
      };

      Swal.fire(alerta);
    }
    //mostrarToast();
  });

  resultSelector.innerHTML = message;
}

const pedirNumeros = () => {

  let number1 = 0;
  let number2 = 0;

  const alertaNumero1 = {
    title: "Ingresa numero 1",
    input: "text",
    confirmButtonText: "Aceptar",
    preConfirm: (numero) => {
      number1 = numero;
      Swal.fire(alertaNumero2)
    }
  };

  const alertaNumero2 = {
    title: "Ingresa numero 2",
    input: "text",
    confirmButtonText: "Aceptar",
    preConfirm: (numero) => {
      number2 = numero;
      dividir(number1, number2, validarDivision);
    }
  };

  Swal.fire(alertaNumero1)


  // const number1 = prompt("Ingrese número 1")
  // const number2 = prompt("Ingrese número 2")

}

const boton = document.getElementById("toast")
boton.addEventListener("click", () => {
  mostrarToast();
})

function mostrarToast() {
  const toastAlert = {
    showConfirmButton: false,
    toast: true,
    position: "top-end",
    timer: 3000,
    timerProgressBar: true
  };

  const toast = Swal.mixin(toastAlert);

  const alert = {
    icon: "info",
    title: "Se modifico la cantidad!!!"
  };

  toast.fire(alert);
}

pedirNumeros();