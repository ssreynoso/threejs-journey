import * as THREE from 'three'

const scene    = new THREE.Scene()

const sizes = { width: 800, height: 600 }
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // fov: Field Of View, Aspect Ratio
scene.add(camera)
camera.position.x = 1
camera.position.y = 1
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

// FIRST SOLUTION TO THE FPS PROBLEM.
let time = Date.now()

// Animations
const tick = () => {
    const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime

    // console.log(deltaTime)

    // Update objects
    mesh.rotation.reorder('YXZ')
    mesh.rotation.y += (Math.PI / 360) * deltaTime * 0.1
    // mesh.rotation
    
    // Render
    renderer.render(scene, camera)

    requestAnimationFrame(tick)
}

tick()





