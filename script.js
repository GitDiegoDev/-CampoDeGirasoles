const field = document.getElementById('field');
const sun = document.getElementById('sun');
const song = document.getElementById('flowerSong');
const startMessage = document.getElementById('startMessage');
const romanticMessage = document.getElementById('romanticMessage');

let firstInteraction = true;

function handleInteraction(e) {
  const x = e.clientX || (e.touches && e.touches[0].clientX);
  const y = e.clientY || (e.touches && e.touches[0].clientY);

  if (x !== undefined && y !== undefined) {
    generateElement(x, y);
  }
}

function generateElement(x, y) {
  const isHeart = Math.random() > 0.5;
  const element = document.createElement('div');

  if (isHeart) {
    element.classList.add('heart');
    const scale = Math.random() * 0.6 + 0.4;
    element.style.setProperty('--scale', scale);
  } else {
    element.classList.add('flower');
    const flowerImg = document.createElement('img');
    flowerImg.src = 'flor.png';
    element.appendChild(flowerImg);

    const rotation = Math.floor(Math.random() * 60) - 30;
    element.style.setProperty('--rotation', `${rotation}deg`);
  }

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;

  field.appendChild(element);

  setTimeout(() => {
    element.classList.add('grow');
  }, 50);

  if (firstInteraction) {
    song.play().catch(error => console.log("Audio play failed:", error));
    startMessage.style.display = 'none';
    sun.classList.add('appear');
    romanticMessage.classList.add('show');
    firstInteraction = false;
  } else if (song.paused) {
    song.play().catch(error => console.log("Audio play failed:", error));
  }
}

field.addEventListener('mousedown', handleInteraction);
field.addEventListener('touchstart', handleInteraction);
