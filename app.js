let numeroSecreto; // Almacenará el número secreto que el jugador debe adivinar
let intentosRestantes; // Llevará la cuenta de los intentos que le quedan al jugador
let intentosUsados; // Contará la cantidad de intentos que el jugador ha realizado
let nombreUsuario; // Guardará el nombre del jugador

// Función principal para iniciar el juego
function iniciarJuego() {
  // Pide el nombre al jugador o usa "Jugador" por defecto si no ingresa nada
  nombreUsuario = prompt("¡Hola! ¿Cuál es tu nombre?") || "Jugador";

  // Muestra un mensaje de bienvenida con el nombre del jugador
  alert(`¡Bienvenido al juego Adivina el número, ${nombreUsuario}! Intenta adivinar el número secreto entre 1 y 100.`);
  console.log(`¡Bienvenido, ${nombreUsuario}!`);

  // Genera un número secreto aleatorio entre 1 y 100 
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  console.log("Número secreto:", numeroSecreto); 

  // Inicializa el número de intentos restantes y usados al comienzo de cada juego
  intentosRestantes = 7;
  intentosUsados = 0;

  // Llama a la función principal del juego para que el jugador comience a adivinar
  jugar();
}

// Función principal del juego donde el jugador intenta adivinar el número
function jugar() {
  
  while (intentosRestantes > 0) {
    
    const intentoUsuario = Number(prompt(`${nombreUsuario}, Intento ${intentosUsados + 1} de ${7}. Ingresa un número entre 1 y 100:`));

    // Valida si la entrada del jugador es un número válido dentro del rango
    if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
      alert("¡Por favor, ingresa un número válido entre 1 y 100.");
      continue; // Vuelve al inicio del bucle para pedir otro intento
    }

    
    intentosUsados++;

    // Comprueba si el intento del jugador es igual al número secreto
    if (intentoUsuario === numeroSecreto) {
      alert(`¡Felicidades, ${nombreUsuario}! ¡Adivinaste en ${intentosUsados} intentos! El número era ${numeroSecreto}.`);
      console.log(`${nombreUsuario} adivinó en ${intentosUsados} intentos.`);
      reiniciar(); 
      return; 
    }
   
    else if (intentoUsuario < numeroSecreto) {
      alert("¡Demasiado bajo! ¡Intenta de nuevo!");
      console.log("Intento bajo.");
    }

    else {
      alert("¡Demasiado alto! ¡Intenta de nuevo!");
      console.log("Intento alto.");
    }

    intentosRestantes--;
  }

  alert(`¡Lo siento, ${nombreUsuario}! Te quedaste sin intentos. El número era ${numeroSecreto}.`);
  console.log(`${nombreUsuario} perdió. El número era ${numeroSecreto}.`);
  reiniciar(); 
}

// Función para preguntar al jugador si quiere reiniciar el juego
function reiniciar() {
  if (confirm("¿Quieres jugar de nuevo?")) {
    iniciarJuego(); // Si el jugador acepta, inicia un nuevo juego
  } else {
    alert("¡Gracias por jugar!");
    console.log("¡Fin del Juego!");
  }
}

iniciarJuego();
