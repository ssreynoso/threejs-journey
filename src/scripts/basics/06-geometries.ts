import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Threejs } from '../../models/three'

const threejs = new Threejs(document, window)
const scene = threejs.getScene()

// Object
// const geometry = new THREE.BoxGeometry(1, 1, 1, 8, 8, 8)
const geometry = new THREE.BufferGeometry()
const count    = 10
const positionsArray = new Float32Array(count * 3 * 3)
for (let i = 0; i < count * 3 * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 2
}
console.log(positionsArray)

const positionAttribute = new THREE.BufferAttribute(positionsArray, 3)

geometry.setAttribute('position', positionAttribute)
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

threejs.animate()
