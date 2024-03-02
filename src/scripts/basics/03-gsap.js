import * as THREE from 'three'
import gsap from 'gsap'

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

gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

// Animations
const tick = () => {

    // Render
    renderer.render(scene, camera)

    requestAnimationFrame(tick)
}

tick()





