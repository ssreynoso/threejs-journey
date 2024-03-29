import * as THREE from 'three'

const scene    = new THREE.Scene()
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    color: 'red'
})
// Un mesh está compuesto por una geometría y un material.
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const sizes = { width: 800, height: 600 }
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // fov: Field Of View, Aspect Ratio
scene.add(camera)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 3

const canvasElement = document.getElementById('webgl')

if (!canvasElement) {
    throw new Error('Canvas not found')
}

const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)