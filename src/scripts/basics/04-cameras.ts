import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

/**
 * Base
 */
// Canvas
const canvas = document.getElementById('webgl')
if (!canvas) {
    throw new Error('Canvas not found')
}

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Cursor
const cursor = { x: 0, y: 0 }
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / sizes.width - 0.5
    cursor.y = - (e.clientY / sizes.height - 0.5)
})

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)
const aspectRatio = sizes.width / sizes.height 

// Camera
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100)
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.dampingFactor = 0.036

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime;

    // Render
    renderer.render(scene, camera)

    // Update controls
    controls.update()

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()