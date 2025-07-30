const scenes = [
  "Son 3 chicos y 2 chicas perdidos en la jungla tras un misterioso accidente...",
  "Deben encontrar comida, agua y refugio para sobrevivir día tras día...",
  "Pero algo no encaja: ¿qué causó que se perdieran? ¿Quién más ronda la jungla?",
  "¡Tu aventura empieza ahora!"
];

let currentScene = 0;

function startGame() {
  document.getElementById('menu').style.display = 'none';
  document.getElementById('story').style.display = 'block';
  document.getElementById('storyText').innerText = scenes[currentScene];

  document.getElementById('jungleAudio').play();
  document.getElementById('rainAudio').play();
}

function nextScene() {
  currentScene++;
  if (currentScene < scenes.length) {
    document.getElementById('storyText').innerText = scenes[currentScene];
  } else {
    alert('Fin de la demo. Más escenas pronto!');
  }
}

function joinGame() {
  alert('Próximamente: sistema multijugador.');
}
