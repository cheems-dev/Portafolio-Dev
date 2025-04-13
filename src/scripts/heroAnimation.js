/**
 * Hero Animation - Estilo Ferxxo (Feid)
 *
 * Animación de fondo con Three.js que mantiene la estética de Feid:
 * - Colores neón (rosa, azul, morado, verde) con sutileza
 * - Efecto glitch y distorsión suave
 * - Ambiente cyberpunk/futurista elegante
 */

// Importamos solo los módulos específicos que necesitamos de Three.js
import {
  Clock,
  Color,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
} from "three";

class FerxxoHeroAnimation {
  constructor(containerId) {
    this.containerId = containerId;
    this.container = document.getElementById(containerId);
    this.width = 0;
    this.height = 0;
    this.clock = new Clock();
    this.uniforms = {
      time: { value: 0 },
      resolution: { value: new Vector2() },
      mousePosition: { value: new Vector2(0.5, 0.5) },
      intensity: { value: 0.7 }, // Intensidad reducida para efectos más sutiles
    };

    // Colores de Ferxxo con menor saturación para ser más sutiles
    this.colors = {
      pink: new Color("#FF2D9E"), // Ferxxo Pink
      blue: new Color("#00F0FF"), // Ferxxo Blue
      purple: new Color("#A020F0"), // Ferxxo Purple
      green: new Color("#00FF7F"), // Ferxxo Green
    };

    this.init();
  }

  init() {
    if (!this.container) {
      console.error(`Container with id ${this.containerId} not found`);
      return;
    }

    this.createScene();
    this.createCamera();
    this.createRenderer();
    this.createShaderMaterial();
    this.createMesh();
    this.addEventListeners();
    this.resize();
    this.render();
  }

  createScene() {
    this.scene = new Scene();
  }

  createCamera() {
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
    this.camera.position.set(0, 0, 1);
  }

  createRenderer() {
    this.renderer = new WebGLRenderer({
      antialias: true, // Activar antialiasing para suavizar los bordes
      alpha: true,
      powerPreference: "default", // No necesitamos alto rendimiento para animaciones sutiles
    });

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Reducir pixelRatio para mejorar rendimiento
    this.container.appendChild(this.renderer.domElement);
  }

  createShaderMaterial() {
    // Vertex Shader - Maneja la posición de los vértices
    const vertexShader = `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    // Fragment Shader - Estilo Ferxxo con neón, glitch y gradientes (versión más sutil)
    const fragmentShader = `
      uniform float time;
      uniform vec2 resolution;
      uniform vec2 mousePosition;
      uniform float intensity;
      varying vec2 vUv;
      
      // Función para generar ruido
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      // Función para efecto de glitch suave
      float glitch(vec2 uv, float intensity, float speed) {
        float t = floor(time * speed * 30.0) * 0.1; // Reducir velocidad
        float n = noise(vec2(t, uv.y * intensity));
        
        if (n > 0.96) { // Reducir probabilidad de glitch
          // Líneas horizontales glitch más sutiles
          uv.x += (n - 0.96) * 0.15;
        }
        
        return n;
      }
      
      // Función para generar ondas suaves
      float wave(vec2 uv, float amplitude, float frequency, float speed) {
        return amplitude * sin(uv.y * frequency + time * speed);
      }
      
      // Función para crear un destello neón sutil
      vec3 neonGlow(vec3 color, float intensity, vec2 uv, vec2 center, float radius) {
        float dist = distance(uv, center);
        float glow = smoothstep(radius, radius * 0.2, dist) * intensity * 0.6; // Reducir intensidad
        return color * glow;
      }
      
      void main() {
        // Coordenadas normalizadas
        vec2 uv = vUv;
        
        // Efecto glitch aleatorio sutil
        float glitchIntensity = 0.03 + sin(time * 0.05) * 0.01; // Reducir intensidad
        float g = glitch(uv, 8.0, 0.3); // Reducir velocidad
        
        // Aplicar distorsión a las coordenadas (más sutil)
        vec2 distortedUv = uv;
        distortedUv.x += wave(uv, 0.01, 15.0, 1.0); // Amplitud más pequeña, velocidad menor
        
        // Offset aleatorio para efecto de inestabilidad (menos agresivo)
        if (g > 0.9) {
          distortedUv.x += (g - 0.9) * 0.02 * sin(time * 20.0);
        }
        
        // Crear gradientes con los colores de Ferxxo (más suaves)
        vec3 color = vec3(0.0);
        
        // Gradiente base rosa-azul (más sutil)
        vec3 gradientColor = mix(
          vec3(0.9, 0.2, 0.55) * intensity, // Rosa Ferxxo más suave
          vec3(0.0, 0.85, 0.9) * intensity, // Azul Ferxxo más suave
          distortedUv.x + sin(time * 0.1) * 0.15
        );
        
        // Ajustar colores según la posición del mouse (menos pronunciado)
        vec3 accentColor = mix(
          vec3(0.5, 0.1, 0.8) * intensity, // Morado Ferxxo más sutil
          vec3(0.0, 0.8, 0.4) * intensity, // Verde Ferxxo más sutil
          mousePosition.x
        );
        
        // Añadir circulo de luz siguiendo al mouse (más sutil)
        vec3 glow1 = neonGlow(vec3(0.9, 0.2, 0.55), 0.5 * intensity, distortedUv, mousePosition, 0.3);
        vec3 glow2 = neonGlow(vec3(0.0, 0.85, 0.9), 0.3 * intensity, distortedUv, 
                             vec2(mousePosition.x + sin(time) * 0.05, 
                                  mousePosition.y + cos(time) * 0.05), 0.4);
        
        // Líneas horizontales tipo synthwave (más sutiles)
        float lines = step(0.99, sin(distortedUv.y * 80.0 + time * 0.5)) * 0.05;
        
        // Color final combinando todos los efectos
        color = gradientColor * 0.5 + accentColor * 0.15;
        
        // Añadir líneas
        color += vec3(lines);
        
        // Añadir glows
        color += glow1 * 0.2 + glow2 * 0.2;
        
        // Añadir viñeta más sutil
        float vignette = smoothstep(0.6, 0.0, length(uv - 0.5));
        color *= vignette * 1.2;
        
        // Aplicar efecto de scanline sutil
        float scanline = sin(uv.y * 200.0) * 0.01; // Menos visible
        color -= scanline;
        
        // Aplicar efecto de ruido muy sutil
        float noise = noise(uv * 80.0 + time) * 0.01;
        color += noise;
        
        // Ajustar el alpha para mezclarse con el fondo
        float alpha = 0.75; // Más transparente para mejor integración
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    this.material = new ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
    });
  }

  createMesh() {
    const geometry = new PlaneGeometry(2, 2);
    this.mesh = new Mesh(geometry, this.material);
    this.scene.add(this.mesh);
  }

  addEventListeners() {
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("mousemove", this.onMouseMove.bind(this));
    window.addEventListener("touchmove", this.onTouchMove.bind(this), {
      passive: true,
    });
  }

  onMouseMove(event) {
    // Normalizar las coordenadas del mouse (0-1)
    this.uniforms.mousePosition.value.x = event.clientX / window.innerWidth;
    this.uniforms.mousePosition.value.y =
      1 - event.clientY / window.innerHeight;
  }

  onTouchMove(event) {
    if (event.touches.length > 0) {
      // Normalizar las coordenadas del touch (0-1)
      this.uniforms.mousePosition.value.x =
        event.touches[0].clientX / window.innerWidth;
      this.uniforms.mousePosition.value.y =
        1 - event.touches[0].clientY / window.innerHeight;
    }
  }

  resize() {
    // Obtener dimensiones del contenedor
    const rect = this.container.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    // Actualizar el renderer
    this.renderer.setSize(this.width, this.height);

    // Actualizar uniforms
    this.uniforms.resolution.value.set(this.width, this.height);
  }

  render() {
    // Actualizar el uniform de tiempo
    this.uniforms.time.value = this.clock.getElapsedTime();

    // Renderizar la escena
    this.renderer.render(this.scene, this.camera);

    // Solicitar el siguiente frame
    requestAnimationFrame(this.render.bind(this));
  }

  // Método para modificar la intensidad de la animación
  setIntensity(value) {
    this.uniforms.intensity.value = value;
  }

  // Método para limpiar recursos y detener animación
  dispose() {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("touchmove", this.onTouchMove);

    this.mesh.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();

    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}

export default FerxxoHeroAnimation;
