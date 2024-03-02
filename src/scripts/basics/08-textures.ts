import * as THREE from 'three'
import { Threejs } from '../../models/three'

const threejs = new Threejs(document, window)
const scene = threejs.getScene()

THREE.ColorManagement.enabled = false

const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = (url, loaded, total) => {
    console.log('onStart event', url, loaded, total);
}
loadingManager.onProgress = (url, loaded, total) => {
    console.log('onProgress event', url, loaded, total);
}
loadingManager.onLoad = () => {
    console.log('onLoad');
}
loadingManager.onError = (url) => {
    console.log('onError event', url);
}
const textureLoader = new THREE.TextureLoader(loadingManager)
// Recibe 3 parámetros más que son un onload, onprocess y onerror
const colorTexture = textureLoader.load('/textures/minecraft.png')
// const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
// const heightTexture = textureLoader.load('/textures/door/height.jpg')
// const normalTexture = textureLoader.load('/textures/door/normal.jpg')
// const ambientTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
// const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
// const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

// colorTexture.repeat.x = 2
// colorTexture.repeat.y = 2
// colorTexture.wrapS = THREE.RepeatWrapping
// colorTexture.wrapT = THREE.RepeatWrapping
// colorTexture.wrapS = THREE.MirroredRepeatWrapping
// colorTexture.wrapT = THREE.MirroredRepeatWrapping

// colorTexture.offset.x = 0.2
// colorTexture.rotation = Math.PI / 4

// Puedo mover el punto de rotacion
// colorTexture.center.x = 0.5
// colorTexture.center.y = 0.5

// Podemos cambiar el minification filter de la textura utilizando la propiedad minFilter con 6 valores
// colorTexture.minFilter = THREE.NearestFilter
// colorTexture.minFilter = THREE.LinearFilter
// colorTexture.minFilter = THREE.NearestMipMapNearestFilter
// colorTexture.minFilter = THREE.NearestMipMapLinearFilter
// colorTexture.minFilter = THREE.LinearMipMapNearestFilter
// colorTexture.minFilter = THREE.LinearMipMapLinearFilter

// Tambien podemos ver el maxification filter
// colorTexture.magFilter = THREE.LinearFilter
// colorTexture.magFilter = THREE.NearestFilter

// Podemos dehabilitar el mipmapping
colorTexture.generateMipmaps = false
colorTexture.minFilter = THREE.NearestFilter
colorTexture.magFilter = THREE.NearestFilter

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ map: colorTexture })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

threejs.animate()
