/**
 * Scroll Animation Utility - Estilo Ferxxo
 *
 * Este script maneja animaciones que se activan una sola vez cuando los elementos entran en la vista del usuario.
 * Clases disponibles:
 * - 'animate-on-scroll': Activa animación al hacer scroll
 * - 'ferxxo-fade-in': Desvanecido con glow neón
 * - 'ferxxo-slide-up': Deslizamiento hacia arriba con rastro
 * - 'ferxxo-glitch': Efecto de glitch aleatorio
 * - 'ferxxo-neon-pulse': Pulso de luz neón
 * - 'ferxxo-distort': Efecto de distorsión
 */

// Función para verificar si un elemento está en el viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  // Ajusta este valor para controlar cuándo se activa la animación
  // Valores más bajos significan que el elemento debe ser más visible antes de animar
  const triggerPoint = 0.15;

  return (
    rect.top <= windowHeight * (1 - triggerPoint) &&
    rect.bottom >= windowHeight * triggerPoint
  );
}

// Función para manejar los eventos de scroll
function handleScrollAnimations() {
  const elements = document.querySelectorAll(
    ".animate-on-scroll:not(.animated)"
  );

  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      // Agregar la clase 'animated' para evitar re-animación
      element.classList.add("animated");

      // Aplicar distintos efectos según las clases
      if (element.classList.contains("ferxxo-glitch")) {
        applyGlitchEffect(element);
      }

      if (element.classList.contains("ferxxo-distort")) {
        applyDistortionEffect(element);
      }

      if (element.classList.contains("ferxxo-neon-pulse")) {
        applyNeonPulseEffect(element);
      }
    }
  });
}

// Efectos especiales de Ferxxo
function applyGlitchEffect(element) {
  // Crear capas de glitch
  const content = element.innerHTML;
  const wrapper = document.createElement("div");
  wrapper.classList.add("glitch-wrapper");

  // Capa original
  const original = document.createElement("div");
  original.classList.add("glitch-content", "original");
  original.innerHTML = content;

  // Capa de glitch 1
  const glitch1 = document.createElement("div");
  glitch1.classList.add("glitch-content", "glitch-layer-1");
  glitch1.innerHTML = content;

  // Capa de glitch 2
  const glitch2 = document.createElement("div");
  glitch2.classList.add("glitch-content", "glitch-layer-2");
  glitch2.innerHTML = content;

  // Añadir todas las capas
  wrapper.appendChild(original);
  wrapper.appendChild(glitch1);
  wrapper.appendChild(glitch2);

  // Reemplazar el contenido original
  element.innerHTML = "";
  element.appendChild(wrapper);

  // Animación de glitch
  function triggerGlitch() {
    if (!element.classList.contains("glitching")) {
      element.classList.add("glitching");

      setTimeout(() => {
        element.classList.remove("glitching");
      }, 200);
    }
  }

  // Activar glitch periódicamente
  setInterval(triggerGlitch, 3000 + Math.random() * 2000);

  // Activar también al hacer hover
  element.addEventListener("mouseenter", triggerGlitch);
}

function applyDistortionEffect(element) {
  // Agregar ondas de distorsión
  const distortionWaves = document.createElement("div");
  distortionWaves.classList.add("distortion-waves");

  // Crear múltiples ondas
  for (let i = 0; i < 3; i++) {
    const wave = document.createElement("div");
    wave.classList.add("distortion-wave");
    wave.style.animationDelay = `${i * 0.7}s`;
    distortionWaves.appendChild(wave);
  }

  // Añadir efecto de ruido
  const noise = document.createElement("div");
  noise.classList.add("noise-overlay");

  // Insertar elementos
  element.style.position = "relative";
  element.insertBefore(distortionWaves, element.firstChild);
  element.appendChild(noise);
}

function applyNeonPulseEffect(element) {
  // Determinar color basado en clases o generar aleatorio
  let glowColor;

  if (element.classList.contains("ferxxo-pink")) {
    glowColor = "var(--ferxxo-pink, #FF2D9E)";
  } else if (element.classList.contains("ferxxo-blue")) {
    glowColor = "var(--ferxxo-blue, #00F0FF)";
  } else if (element.classList.contains("ferxxo-purple")) {
    glowColor = "var(--ferxxo-purple, #A020F0)";
  } else if (element.classList.contains("ferxxo-green")) {
    glowColor = "var(--ferxxo-green, #00FF7F)";
  } else {
    // Colores neón de Ferxxo
    const colors = ["#FF2D9E", "#00F0FF", "#A020F0", "#00FF7F"];
    glowColor = colors[Math.floor(Math.random() * colors.length)];
  }

  // Aplicar glow con CSS
  element.style.textShadow = `0 0 10px ${glowColor}, 0 0 20px ${glowColor}`;
  element.style.transition = "text-shadow 0.3s ease-in-out";

  // Animación de pulso
  let pulseIntensity = 1;
  let increasing = false;

  function pulsate() {
    if (increasing) {
      pulseIntensity += 0.05;
      if (pulseIntensity >= 1.5) increasing = false;
    } else {
      pulseIntensity -= 0.05;
      if (pulseIntensity <= 0.8) increasing = true;
    }

    element.style.textShadow = `0 0 ${
      10 * pulseIntensity
    }px ${glowColor}, 0 0 ${20 * pulseIntensity}px ${glowColor}`;
    requestAnimationFrame(pulsate);
  }

  pulsate();
}

// Inicializar animaciones
function initScrollAnimations() {
  // Añadir estilos necesarios para las animaciones
  addAnimationStyles();

  // Ejecutar una vez al cargar
  handleScrollAnimations();

  // Agregar listener de scroll
  window.addEventListener("scroll", handleScrollAnimations, { passive: true });

  // También activar en resize
  window.addEventListener("resize", handleScrollAnimations, { passive: true });
}

// Crear estilos CSS para las animaciones
function addAnimationStyles() {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerHTML = `
    /* Estilos para animaciones de Ferxxo */
    .glitch-wrapper {
      position: relative;
    }
    
    .glitch-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    .original {
      position: relative;
      z-index: 1;
    }
    
    .glitch-layer-1, .glitch-layer-2 {
      opacity: 0;
      z-index: 2;
    }
    
    .glitching .glitch-layer-1 {
      opacity: 1;
      animation: glitch-anim-1 0.2s linear infinite;
      transform: translate3d(10px, 0, 0);
      filter: drop-shadow(0 0 rgba(255, 45, 158, 0.9));
    }
    
    .glitching .glitch-layer-2 {
      opacity: 1;
      animation: glitch-anim-2 0.2s linear infinite;
      transform: translate3d(-10px, 0, 0);
      filter: drop-shadow(0 0 rgba(0, 240, 255, 0.9));
    }
    
    @keyframes glitch-anim-1 {
      0%, 100% { opacity: 1; transform: translate3d(10px, 0, 0); }
      33% { opacity: 1; transform: translate3d(-5px, 2px, 0); }
      66% { opacity: 1; transform: translate3d(20px, -2px, 0); }
    }
    
    @keyframes glitch-anim-2 {
      0%, 100% { opacity: 1; transform: translate3d(-10px, 0, 0); }
      33% { opacity: 1; transform: translate3d(5px, -2px, 0); }
      66% { opacity: 1; transform: translate3d(-20px, 2px, 0); }
    }
    
    /* Efecto de distorsión */
    .distortion-waves {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
    }
    
    .distortion-wave {
      position: absolute;
      bottom: -100%;
      left: 50%;
      width: 500%;
      height: 500%;
      background: linear-gradient(0, transparent, rgba(255, 45, 158, 0.1), rgba(0, 240, 255, 0.1), transparent);
      transform: translate(-50%, 0) rotate(0deg);
      transform-origin: center bottom;
      border-radius: 38% 42% 40% 60%;
      animation: wave-rotation 20s linear infinite;
    }
    
    .distortion-wave:nth-child(2) {
      background: linear-gradient(0, transparent, rgba(160, 32, 240, 0.1), rgba(0, 255, 127, 0.1), transparent);
      border-radius: 45% 55% 50% 50%;
      animation: wave-rotation 15s linear infinite reverse;
    }
    
    .distortion-wave:nth-child(3) {
      background: linear-gradient(0, transparent, rgba(0, 240, 255, 0.1), rgba(255, 45, 158, 0.1), transparent);
      border-radius: 48% 52% 60% 40%;
      animation: wave-rotation 12s linear infinite;
    }
    
    @keyframes wave-rotation {
      0% { transform: translate(-50%, 0) rotate(0deg); }
      100% { transform: translate(-50%, 0) rotate(360deg); }
    }
    
    /* Ruido de distorsión */
    .noise-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.05;
      z-index: 1;
      pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    
    /* Animaciones básicas */
    .ferxxo-fade-in {
      opacity: 0;
      transition: opacity 1s ease, text-shadow 1s ease;
    }
    
    .ferxxo-fade-in.animated {
      opacity: 1;
      text-shadow: 0 0 10px var(--ferxxo-pink), 0 0 20px var(--ferxxo-blue);
    }
    
    .ferxxo-slide-up {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .ferxxo-slide-up.animated {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  document.head.appendChild(styleSheet);
}

// Iniciar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", initScrollAnimations);

// Exportar para uso en frameworks de componentes como React/Vue si es necesario
export { initScrollAnimations };
