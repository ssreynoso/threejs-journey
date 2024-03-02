import * as THREE from 'three'
import { Threejs } from '../../models/three'
// import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'

THREE.ColorManagement.enabled = false

const threejs = new Threejs(document, window, {
    camera: {
        position: { x: 1, y: 1, z: 2 }
    }

})
const scene = threejs.getScene()

const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/4.png')

const fontLoader = new FontLoader()
const onLoadFont = (font: Font) => {
    const textGeometry = new TextGeometry(
        'Juan Cobo',
        {
            font,
            size: 0.5,
            height: 0.2,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        }
    )
    // textGeometry.computeBoundingBox()
    // console.log(textGeometry.boundingBox)
    // textGeometry.translate(
    //     - (textGeometry.boundingBox!.max.x - 0.02) * 0.5,
    //     - (textGeometry.boundingBox!.max.y - 0.02) * 0.5,
    //     - (textGeometry.boundingBox!.max.z - 0.03) * 0.5
    // )
    textGeometry.center()


    const material = new THREE.MeshMatcapMaterial()
    material.matcap = matcapTexture
    // material.wireframe = true
    const text = new THREE.Mesh(textGeometry, material)
    scene.add(text)

    const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)
    for (let i = 0; i < 100; i++) {
        const donut = new THREE.Mesh(donutGeometry, material)
        donut.position.x = (Math.random() - 0.5) * 10
        donut.position.y = (Math.random() - 0.5) * 10
        donut.position.z = (Math.random() - 0.5) * 10

        donut.rotation.x = Math.random() * Math.PI
        donut.rotation.y = Math.random() * Math.PI

        const scale = Math.random()
        donut.scale.set(scale, scale, scale)

        scene.add(donut)
    }

    const gui = threejs.getGUI()
    gui.add(text.rotation, 'x').min(-Math.PI).max(Math.PI).step(0.01)
    gui.add(text.rotation, 'y').min(-Math.PI).max(Math.PI).step(0.01)
    gui.add(text.rotation, 'z').min(-Math.PI).max(Math.PI).step(0.01)
}
fontLoader.load('/10-3d-text/fonts/helvetiker_regular.typeface.json', onLoadFont)

threejs.animate()
