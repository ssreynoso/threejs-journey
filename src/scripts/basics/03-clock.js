import * as THREE from 'three'

const scene    = new THREE.Scene()

const sizes = { width: 800, height: 600 }
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // fov: Field Of View, Aspect Ratio
scene.add(camera)
// camera.position.x = 1
// camera.position.y = 1
camera.position.z = 3

const cube = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 'blue' })
const mesh = new THREE.Mesh(cube, material)
scene.add(mesh)


// Axes helper
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

// -----------

const canvasElement = document.getElementById('webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement
})
renderer.setSize(sizes.width, sizes.height)

// Clock
const clock = new THREE.Clock()

// Animations
const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    mesh.rotation.reorder('YXZ')
    // mesh.rotation.y += (Math.PI / 360)
    // mesh.rotation.y = elapsedTime
    // Una vuelta por segundo = (elapsedTime * Math.PI * 2)
    // mesh.rotation.y = (elapsedTime * Math.PI * 2) / 10

    // Movimiento circular
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)

    // Movimiento circular de la cámara
    camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.cos(elapsedTime)
    camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    requestAnimationFrame(tick)
}

tick()





