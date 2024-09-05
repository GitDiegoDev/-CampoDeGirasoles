// Obtener elementos del DOM
const field = document.getElementById('field');
const sun = document.getElementById('sun');
const song = document.getElementById('flowerSong');
const startMessage = document.getElementById('startMessage');
const romanticMessage = document.getElementById('romanticMessage');

let firstTouch = true;

// Función para generar una flor en una posición aleatoria
function generateFlower(x, y) {
  const flower = document.createElement('div');
  flower.classList.add('flower');

  const flowerImg = document.createElement('img');
  flowerImg.src = 'flor.png'; // Imagen de girasol en formato PNG

  flower.appendChild(flowerImg);
  flower.style.left = `${x - 25}px`;  // Centra la flor
  flower.style.top = `${y - 50}px`;

  field.appendChild(flower);

  // Después de un ligero retraso, hacer crecer la flor
  setTimeout(() => {
    flower.classList.add('grow');
  }, 100);

  // Reproducir la canción si no está sonando
  if (song.paused) {
    song.play();
  }

  // Mostrar el sol y la frase romántica solo en el primer toque
  if (firstTouch) {
    startMessage.style.display = 'none'; // Ocultar mensaje inicial
    sun.classList.add('appear'); // Mostrar el sol
    romanticMessage.classList.add('show'); // Mostrar mensaje romántico
    firstTouch = false;
  }
}

// Detectar el toque en la pantalla para generar flores
field.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  generateFlower(x, y);
});

// Detectar toque en pantalla móvil
field.addEventListener('touchstart', (e) => {
  const x = e.touches[0].clientX;
  const y = e.touches[0].clientY;
  generateFlower(x, y);
});
