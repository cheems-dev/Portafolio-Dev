/**
 * Background Effects - Complemento para el fondo futurista de grilla
 * Genera círculos luminosos en posiciones aleatorias para mejorar la estética visual
 */

document.addEventListener("DOMContentLoaded", () => {
  // Solo aplicamos estos efectos en pantallas de cierto tamaño para evitar problemas de rendimiento
  if (window.innerWidth < 640) return;

  // Contenedor para los elementos de fondo
  const backgroundContainer = document.createElement("div");
  backgroundContainer.className = "background-effects-container";
  backgroundContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  `;

  document.body.appendChild(backgroundContainer);

  // Creamos la capa explícita para la rejilla futurista
  const gridLayer = document.createElement("div");
  gridLayer.className = "ferxxo-grid-background";
  backgroundContainer.appendChild(gridLayer);

  // Genera círculos luminosos en posiciones aleatorias
  function createNeonCircles() {
    // Número de círculos según el ancho de la pantalla
    const circleCount = window.innerWidth < 1024 ? 5 : 8;

    // Colores disponibles
    const colors = [
      getComputedStyle(document.documentElement)
        .getPropertyValue("--ferxxo-pink")
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue("--ferxxo-blue")
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue("--ferxxo-purple")
        .trim(),
      getComputedStyle(document.documentElement)
        .getPropertyValue("--ferxxo-green")
        .trim(),
    ];

    for (let i = 0; i < circleCount; i++) {
      const circle = document.createElement("div");
      circle.className = "ferxxo-neon-circle";

      // Tamaño aleatorio (más grandes para pantallas grandes)
      const minSize = window.innerWidth < 768 ? 100 : 150;
      const maxSize = window.innerWidth < 768 ? 200 : 350;
      const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;

      // Posición aleatoria
      const xPos = Math.random() * 100;
      const yPos = Math.random() * 100;

      // Color aleatorio
      const colorIndex = Math.floor(Math.random() * colors.length);

      // Configurar estilos
      circle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${xPos}vw;
        top: ${yPos}vh;
        background: radial-gradient(circle at center, ${
          colors[colorIndex]
        } 0%, transparent 70%);
        animation-delay: ${Math.random() * 10}s;
        animation-duration: ${20 + Math.random() * 20}s;
      `;

      backgroundContainer.appendChild(circle);
    }
  }

  // Inicializar los efectos de fondo
  createNeonCircles();

  // Ajustar cuando cambia el tamaño de la ventana
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Limpiar círculos existentes
      const circles = document.querySelectorAll(".ferxxo-neon-circle");
      circles.forEach((circle) => circle.remove());

      // Crear nuevos círculos adaptados al nuevo tamaño
      createNeonCircles();
    }, 500);
  });
});

export {};
