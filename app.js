let numeroSecreto;
let intentosRestantes;
let intentosUsados;
let nombreUsuario;

function iniciarJuego() {
    nombreUsuario = prompt("¡Hola! ¿Cuál es tu nombre?") || "Jugador";
    
    alert(`¡Bienvenido al juego Adivina el número, ${nombreUsuario}! Intenta adivinar el número secreto entre 1 y 100.`);
    
    console.log(`¡Bienvenido, ${nombreUsuario}!`);

    numeroSecreto = Math.floor(Math.random() * 100) + 1;
   
    console.log("Número secreto:", numeroSecreto);

    intentosRestantes = 7;
    intentosUsados = 0;
    jugar();
}

function jugar() {
    while (intentosRestantes > 0) {
        const intentoUsuario = Number(prompt(`${nombreUsuario}, intento ${intentosUsados + 1}: Ingresa un número entre 1 y 100:`));

          if (isNaN(intentoUsuario) || intentoUsuario < 1 || intentoUsuario > 100) {
            alert("Por favor, ingresa un número válido entre 1 y 100.");
            continue;
        }

        intentosUsados++;

        if (intentoUsuario === numeroSecreto) {
            alert(`¡Felicidades, ${nombreUsuario}
                ! Adivinaste en ${intentosUsados} intentos. El número era ${numeroSecreto}.`);
            console.log(`${nombreUsuario} adivinó en ${intentosUsados} intentos.`);
            reiniciar();
            return;
        } else if (intentoUsuario < numeroSecreto) {
            alert("Demasiado bajo. ¡Intenta de nuevo!");
            console.log("Intento bajo.");
        } else {
            alert("Demasiado alto. ¡Intenta de nuevo!");
            console.log("Intento alto.");
        }

        intentosRestantes--;
    }

    alert(`¡Lo siento, ${nombreUsuario}! Te quedaste sin intentos. El número era ${numeroSecreto}.`);
    console.log(`${nombreUsuario} perdió. El número era ${numeroSecreto}.`);
    reiniciar();
}

function reiniciar() {
    if (confirm("¿Quieres jugar de nuevo?")) {
        iniciarJuego();
    } else {
        alert("¡Gracias por jugar!");
        console.log("Fin del juego.");
    }
}
 
iniciarJuego();
