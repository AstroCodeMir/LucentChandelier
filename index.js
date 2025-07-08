document.addEventListener('DOMContentLoaded', function () {
  // 🔘 Toggle Mobile Menu
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }

  // 💡 Light Control and Card Shadows
  const lightControl = document.getElementById('lightControl');
  const cards = document.querySelectorAll('.pricing-card');

  if (lightControl && cards.length > 0) {
    function updateLighting(value) {
      const intensity = value / 100;
      document.body.style.background = `rgb(${Math.floor(8 * intensity)}, ${Math.floor(8 * intensity)}, ${Math.floor(12 * intensity)})`;
      cards.forEach(card => {
        card.style.boxShadow = `0 0 ${20 * intensity}px ${5 * intensity}px rgba(212, 175, 55, ${0.2 * intensity})`;
      });
    }

    lightControl.addEventListener('input', function () {
      updateLighting(this.value);
    });

    updateLighting(lightControl.value);

    cards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.boxShadow = `0 0 25px 5px rgba(212, 175, 55, 0.5)`;
      });
      card.addEventListener('mouseleave', function () {
        updateLighting(lightControl.value);
      });
    });
  }
});
