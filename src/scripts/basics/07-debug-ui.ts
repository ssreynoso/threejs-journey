import * as THREE from 'three'
import { Threejs } from '../../models/three'
import gsap from 'gsap'
import * as lil from 'lil-gui'

const threejs = new Threejs(document, window)
const scene = threejs.getScene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Debug
const gui = new lil.GUI()

gui.add(mesh.position, 'x').min(-2).max(2).step(0.01).name('x position')
gui.add(mesh.position, 'y').min(-2).max(2).step(0.01).name('y position')
gui.add(mesh.position, 'z').min(-2).max(2).step(0.01).name('z position')
gui.add(mesh, 'visible')
gui.add(mesh.material, 'wireframe')
gui.addColor(material, 'color')
const parameters = {
    spin: () => {
        gsap.to(mesh.rotation, { y: mesh.rotation.y + 10, duration: 2 })
    }
}
gui.add(parameters, 'spin')


threejs.animate()
