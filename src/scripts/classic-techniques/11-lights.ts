import * as THREE from 'three'
import { Threejs } from '../../models/three'
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js'

THREE.ColorManagement.enabled = false

const threejs = new Threejs(document, window, {
    camera: {
        position: { x: 1, y: 1, z: 2 }
    }

})
const scene = threejs.getScene()
const gui = threejs.getGUI()

/**
 * Lights
 */

// Ambient Light -> Minimal cost for the gpu
const ambientLight = new THREE.AmbientLight('#fff', 0.5)
ambientLight.color = new THREE.Color('#fff')
ambientLight.intensity = 0.5
scene.add(ambientLight)
gui.add(ambientLight, 'intensity').min(0).max(3).step(0.01)
gui.addColor(ambientLight, 'color')

// Directional Light -> Moderate cost for the gpu
const directionalLight = new THREE.DirectionalLight('#00fffc', 0.9)
directionalLight.position.set(2, 3, 4)
scene.add(directionalLight)

// Hemisphere Light -> Minimal cost for the gpu
const hemisphereLight = new THREE.HemisphereLight('#4b00ff', '#ff00ff', 0.8)
scene.add(hemisphereLight)

// Point Light -> Moderate cost for the gpu
const pointLight = new THREE.PointLight('#fff', 0.8, 10, 2)
pointLight.position.set(0, 0, 3)
scene.add(pointLight)

// Rect Area Light (only works with MeshStandardMaterial and MeshPhysicalMaterial)
// High cost for the gpu
const rectAreaLight = new THREE.RectAreaLight('#ffff0f', 2, 1, 1)
rectAreaLight.position.set(- 1.5, 0, 1.5)
rectAreaLight.lookAt(new THREE.Vector3())
scene.add(rectAreaLight)

// Spot Light -> High cost for the gpu
const spotLight = new THREE.SpotLight('#fff', 0.5, 10, Math.PI * 0.14, 0.25, 1)
spotLight.position.set(0, 2, 3)
scene.add(spotLight)
spotLight.target.position.x = - 1.5
scene.add(spotLight.target)

// Helpers
const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2)
scene.add(hemisphereLightHelper)

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 0.2)
scene.add(directionalLightHelper)

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2)
scene.add(pointLightHelper)

const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)

const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
scene.add(rectAreaLightHelper)

/**
 * Objects
 */
// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.4

// Objects
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    material
)
sphere.position.x = - 1.5

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.75, 0.75),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 32, 64),
    material
)
torus.position.x = 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(sphere, cube, torus, plane)

const clock = new THREE.Clock()

threejs.animate(() => {
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    cube.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    cube.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime
})


// Baking is the process of pre-computing the light and shadow information for a scene and storing it in a texture.