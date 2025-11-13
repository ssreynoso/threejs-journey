El **FOV (Field of View)**, o _campo de visión_, determina cuánto del mundo ves en pantalla. Es un ángulo (en grados) que mide la amplitud de tu visión dentro del juego o simulación.

### 🔹 FOV bajo (por ejemplo, 60°)

- **Efecto visual:** la cámara está más “cerca” del personaje o del centro; se ve menos del entorno.
- **Sensación:** más _zoom in_; da una impresión de estar más cerca de los objetos.
- **Ventajas:**
    - Mayor detalle en los modelos cercanos.
    - Menos distorsión visual en los bordes.
    - Puede mejorar la inmersión en juegos en primera persona o de terror (porque se siente más cerrado).

- **Desventajas:**
    - Campo de visión reducido; se ve menos del entorno.
    - Puede dar sensación de “visión de túnel”.
    - En shooters o juegos competitivos, dificulta detectar enemigos a los costados.

**Ejemplo:**
En _Resident Evil 4 Remake_ o _The Last of Us_, un FOV bajo (60°–70°) hace que el jugador vea más de cerca al personaje y el entorno se sienta más cinematográfico.

---

### 🔹 FOV alto (por ejemplo, 100° o más)

- **Efecto visual:** la cámara está más “lejos”; se ve más espacio horizontalmente.
- **Sensación:** más _zoom out_; el entorno se ve más amplio, aunque los objetos parecen más pequeños.
- **Ventajas:**
    - Mejor percepción periférica.
    - Ideal para juegos rápidos o competitivos (_CS2_, _Overwatch_, _Valorant_).
    - Reduce la sensación de mareo en monitores ultra-wide.

- **Desventajas:**
    - Puede introducir **distorsión** en los bordes (efecto “ojo de pez”).
    - Los objetos lejanos se ven más chicos.
    - Menor inmersión en juegos narrativos o de terror.

**Ejemplo:**
En _Call of Duty: Warzone_ o _Doom Eternal_, un FOV de 100°–110° te permite ver enemigos a los costados sin girar tanto la cámara, dándote ventaja táctica.

---

👉 En resumen:

- **FOV bajo = más inmersión, menos visión periférica.**
- **FOV alto = más visión periférica, menos sensación de profundidad.**

---

# Aspect Ratio

El **aspect ratio** (o **relación de aspecto**) es la **proporción entre el ancho y la altura de una imagen, pantalla o video**. Se expresa como dos números separados por dos puntos, por ejemplo:

- **4:3** → formato más cuadrado (usado en televisores antiguos y monitores viejos).
- **16:9** → formato panorámico, estándar actual en pantallas, televisores y videos.
- **21:9** → formato ultrapanorámico, común en monitores de cine o gaming.

### Ejemplo visual:

Imaginá dos pantallas con el mismo alto:

- Una **4:3** se ve más cuadrada.
- Una **16:9** es más alargada hacia los costados.

### En fotografía y cine

También se usa para definir el encuadre:

- **3:2** es el formato clásico de cámaras DSLR.
- **1.85:1** o **2.39:1** son comunes en películas.

En resumen, el _aspect ratio_ determina **la forma del rectángulo** en el que se muestra una imagen o video. Cambiarlo puede recortar, estirar o añadir bordes negros para adaptarse a la pantalla.

En **Three.js**, el **renderer** (renderizador) es el **componente encargado de dibujar la escena en la pantalla**.
Podés pensarlo como el “pincel” que convierte toda la información abstracta (geometrías, luces, materiales, cámara, etc.) en una imagen visible dentro del canvas del navegador.

---

# Three.js Renderer

### 🧩 Qué hace exactamente el renderer

- Toma la **escena (`THREE.Scene`)** y la **cámara (`THREE.Camera`)**.
- Calcula cómo se vería esa escena desde la posición y perspectiva de la cámara.
- Dibuja el resultado en un `<canvas>` HTML usando una tecnología de renderizado (como WebGL, CSS3D o SVG).

---

### 💡 `WebGLRenderer`

El `THREE.WebGLRenderer` es **la implementación más usada del renderer** en Three.js.
Utiliza **WebGL**, una API de bajo nivel que permite a JavaScript comunicarse directamente con la GPU del navegador. Esto le da:

- **Altísimo rendimiento** (renderiza en la GPU, no en CPU).
- **Soporte para iluminación realista, sombras, texturas, shaders personalizados, reflejos**, etc.
- Capacidad para trabajar con **millones de polígonos** y efectos complejos.

---

### 🧠 En resumen

| Concepto          | Descripción                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| **Renderer**      | El sistema que dibuja tu escena.                                           |
| **WebGLRenderer** | La versión que usa WebGL para renderizar con GPU (la más potente y común). |
| **Alternativas**  | `CSS3DRenderer`, `SVGRenderer` (menos usados, más limitados).              |

Podés pensar el `WebGLRenderer` como el **motor gráfico** de Three.js: sin él, no verías nada en pantalla.
