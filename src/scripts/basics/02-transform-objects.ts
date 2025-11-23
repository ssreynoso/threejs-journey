import * as THREE from 'three'

const scene = new THREE.Scene()

const sizes = { width: 800, height: 600 }
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // fov: Field Of View, Aspect Ratio
scene.add(camera)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 3

// Objects
const group = new THREE.Group()
scene.add(group)

const createCube = (color: string, position: THREE.Vector3) => {
    // Crea un mesh con una geometría de caja y un material básico
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(position.x, position.y, position.z),
        new THREE.MeshBasicMaterial({ color })
    )
    return cube
}

const cube1 = createCube('#ff0000', new THREE.Vector3(1, 1, 1))
group.add(cube1)

const cube2 = createCube('#00ff00', new THREE.Vector3(0.5, 0.5, 0.5))
cube2.position.y = 0.75
group.add(cube2)

const cube3 = createCube('#0000ff', new THREE.Vector3(0.25, 0.25, 0.25))
cube3.position.y = 0.75 + 0.25 + 0.25 / 2
group.add(cube3)

group.position.y = 1
group.scale.y = 1.5
group.scale.x = 0.5
group.scale.z = 0.5

// Rotation
// Need to reorder the rotation to avoid gimbal lock
group.rotation.reorder('YXZ')
group.rotation.y = Math.PI / 4
group.rotation.x = Math.PI / 4

// Axes helper
const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

// Look at
// camera.lookAt(mesh.position)

// -----------

const canvasElement = document.getElementById('webgl')
if (!canvasElement) {
    throw new Error('Canvas not found')
}
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
