const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
  planet.addEventListener('click', () => {
    planet.classList.toggle('active');
  });
});