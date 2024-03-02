import * as THREE from 'three'
import { Threejs } from '../../models/three'
import * as lil from 'lil-gui'

const threejs = new Threejs(document, window, {
    camera: {
        position: { x: 0, y: 0, z: 0.7 }
    }

})
const scene = threejs.getScene()

THREE.ColorManagement.enabled = false

// Textures
const loadingManager = new THREE.LoadingManager()
const textureLoader = new THREE.TextureLoader(loadingManager)
const cubeTextureLoader = new THREE.CubeTextureLoader(loadingManager)
// Door
const colorTexture = textureLoader.load('/textures/door/color.jpg')
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const ambientTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
// Gradients
const matcapTexture = textureLoader.load('/textures/matcaps/3.png')
const gradientTexture = textureLoader.load('/textures/gradients/5.jpg')

// Environment maps
const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/je/px.png',
    '/textures/environmentMaps/je/nx.png',
    '/textures/environmentMaps/je/py.png',
    '/textures/environmentMaps/je/ny.png',
    '/textures/environmentMaps/je/pz.png',
    '/textures/environmentMaps/je/nz.png',
]) 

// Objects
// const material = new THREE.MeshBasicMaterial()
// material.map = colorTexture
// Podemos cambiar el color
// material.color = new THREE.Color('red')
// O visualizar el wireframe
// material.wireframe = true
// También podemos añqadirle opacidad (necesitamos transparencia)
// material.transparent = true
// material.opacity = 0.5
// material.alphaMap = alphaTexture
// Sides
// material.side = THREE.FrontSide // Default
// material.side = THREE.BackSide
// material.side = THREE.DoubleSide // Más calculos para el GPU

// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// const material = new THREE.MeshMatcapMaterial()
// material.matcap = matcapTexture

// Profundidad de la cámara
// const material = new THREE.MeshDepthMaterial()

// Reacciona a las luces
// const material = new THREE.MeshLambertMaterial()

// const material = new THREE.MeshPhongMaterial()
// material.shininess = 100
// material.specular = new THREE.Color('red')
// material.color = new THREE.Color('blue')

// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.magFilter = THREE.NearestFilter
// gradientTexture.generateMipmaps = false
// const material = new THREE.MeshToonMaterial()
// material.gradientMap = gradientTexture

const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
material.roughness = 0.2
material.envMap = environmentMapTexture
material.map = colorTexture
material.aoMap = ambientTexture
material.aoMapIntensity = 1
material.displacementMap = heightTexture
material.displacementScale = 0.05
material.metalnessMap = metalnessTexture
material.roughnessMap = roughnessTexture
material.normalMap = normalTexture
material.normalScale.set(0.5, 0.5)
material.alphaMap = alphaTexture
material.transparent = true

// Debug
const gui = new lil.GUI()

gui.add(material, 'metalness').min(0).max(1).step(0.01)
gui.add(material, 'roughness').min(0).max(1).step(0.01)
gui.add(material, 'wireframe').min(0)
gui.add(material, 'aoMapIntensity').min(0).max(10).step(0.01)
gui.add(material, 'displacementScale').min(0).max(1).step(0.01)
gui.add(material.normalScale, 'x').min(0).max(1).step(0.01)
gui.add(material.normalScale, 'y').min(0).max(1).step(0.01)

// Objects

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    material
)

scene.add(sphere)

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 100, 100),
    material
)

scene.add(plane)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 64, 128),
    material
)

scene.add(torus)

sphere.position.x = -1.5
torus.position.x = 1.5


// Lights
const ambientLight = new THREE.AmbientLight('#fff02f', 0.5)
scene.add(ambientLight)

const pointLight = new THREE.PointLight('#fff', 0.5)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

threejs.animate()
