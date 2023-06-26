window.addEventListener('DOMContentLoaded', (event) => {
  // Sélectionnez les éléments ronds
  const rounds = document.querySelectorAll('.round');

  // Définissez les variables pour la rotation
  let angle = 0;
  const radius = 150; // Ajustez la valeur du rayon pour contrôler la distance des ronds par rapport au titre
  const speed = 0.02; // Ajustez la valeur de la vitesse de rotation

  // Fonction pour mettre à jour les positions des ronds
  function updatePositions() {
    // Calculez la position pour chaque rond
    rounds.forEach((round, index) => {
      const theta = angle + (index * ((Math.PI * 2) / rounds.length));
      const x = Math.cos(theta) * radius;
      const y = Math.sin(theta) * radius;

      // Appliquez les nouvelles positions
      round.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Mettez à jour l'angle pour la prochaine itération
    angle += speed;
  }

  // Appeler la fonction updatePositions à intervalles réguliers
  setInterval(updatePositions, 16); // 16ms pour viser environ 60 images par seconde
});
