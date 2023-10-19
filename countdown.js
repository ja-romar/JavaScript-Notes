function countdown(seconds) {
    const interval = setInterval(function() {
        if (seconds <= 0) {
            clearInterval(interval);
            console.log("¡Tiempo terminado!");
        } else {
            console.log(`Quedan ${seconds} segundos.`);
            seconds--;
        }
    }, 3000); // Actualiza cada segundo (1000 ms)
}

// Iniciar la cuenta regresiva con 10 segundos
countdown(30);
