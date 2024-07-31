let sequence = [];
let userInput = [];
let level = 0;
let isPlaying = false;

function startGame() {
    sequence = [];
    userInput = [];
    level = 0;
    isPlaying = true;
    addNumberToSequence();
}

function addNumberToSequence() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    sequence.push(randomNumber);
    userInput = [];
    displaySequence();
}

function displaySequence() {
    const message = document.getElementById('message');
    let index = 0;
    message.textContent = 'Memoriza esta secuencia:';
    
    const interval = setInterval(() => {
        if (index < sequence.length) {
            message.textContent = `Número: ${sequence[index]}`;
            index++;
        } else {
            clearInterval(interval);
            message.textContent = 'Tu turno!';
            isPlaying = true;
        }
    }, 1000);
}

function handleInput(num) {
    if (isPlaying) {
        userInput.push(num);
        if (userInput[userInput.length - 1] !== sequence[userInput.length - 1]) {
            document.getElementById('message').textContent = '¡Error! Inténtalo de nuevo.';
            isPlaying = false;
            setTimeout(startGame, 2000); // Reinicia el juego después de 2 segundos
            return;
        }
        
        if (userInput.length === sequence.length) {
            document.getElementById('message').textContent = '¡Correcto! Añadiendo un nuevo número.';
            setTimeout(addNumberToSequence, 1000); // Añade un nuevo número después de 1 segundo
        }
    }
}

// Comienza el juego cuando la página se carga
window.onload = () => startGame();
