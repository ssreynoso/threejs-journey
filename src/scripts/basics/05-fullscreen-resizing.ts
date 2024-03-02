import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.getElementById('webgl') as HTMLCanvasElement
if (!canvas) {
    throw new Error('Canvas not found')
}
// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 600, // window.innerWidth, // 800,
    height: 600 // window.innerHeight // 600
}

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

window.addEventListener('resize', () => {
    // Actualizamos los tamaños
    sizes.width = 600 // window.innerWidth, // 800,
    sizes.height = 600 // window.innerHeight // 600

    // Actualizamos el aspect ratio de la cámara
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Actualizamos el renderizador
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', (e) => {
    // @ts-expect-error I want to verify if the fullscreenElement exists
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if (!fullscreenElement) {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen()
            // @ts-expect-error I want to verify if the requestFullscreen exists
        } else if (canvas.webkitRequestFullscreen) {
            // @ts-expect-error I want to verify if the requestFullscreen exists
            canvas.webkitRequestFullscreen()
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
            // @ts-expect-error I want to verify if the requestFullscreen exists
        } else if (document.webkitExitFullscreen) {
            // @ts-expect-error I want to verify if the requestFullscreen exists
            document.webkitExitFullscreen()
        }
    }
})

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()