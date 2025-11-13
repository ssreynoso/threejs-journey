import * as THREE from 'three'

// Creo una escena
const scene = new THREE.Scene()

// Creo el cubo. Cada 1 es una unidad en el espacio 3D.
// Significa que el cubo mide 1 unidad de ancho, 1 de alto y 1 de profundidad.
const geometry = new THREE.BoxGeometry(1, 1, 1)

// Creo un material. En este caso un material básico de color rojo.
const material = new THREE.MeshBasicMaterial({
    color: 'red',
})

// Un mesh está compuesto por una geometría y un material.
const mesh = new THREE.Mesh(geometry, material)

// Añado el mesh a la escena
scene.add(mesh)

// Creo una cámara
const sizes = { width: 800, height: 600 }
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // fov: Field Of View, Aspect Ratio

// Añado la cámara a la  escena
scene.add(camera)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 3

const canvasElement = document.getElementById('webgl')

if (!canvasElement) {
    throw new Error('Canvas not found')
}

// Creo el renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
