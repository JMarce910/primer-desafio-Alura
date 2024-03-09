let titulo = document.querySelector('h1'); //creo una variable para cambiarle el nombre
titulo.innerHTML = 'Hora del desafío'; //para definir y llamar un titulo

function mensajeBotonConsole(){  //función para mostrar un msje
    alert('El botón fue clicado');
}

function mensajeBotonPrompt() {
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Colombia:");
    alert("Estuve en " + ciudad + " y me acordé de ti.");
}

function mensajeBotonAlert(){  //función para mostrar un msje
    alert('Yo amo JS');
}

function mensajeBotonSuma(){
    let num1 = parseInt(prompt("Por favor ingrese el primer número: "));
    let num2 = parseInt(prompt("ingrese el segundo número: "));
    let res = num1 + num2;
    alert("El resultado de la suma es: " + res);

}
