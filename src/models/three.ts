import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as lil from 'lil-gui'

interface Options {
    shadowMap?: { enabled?: boolean, type?: THREE.ShadowMapType }
    camera?: { position?: { x: number, y: number, z: number } }
}

export class Threejs {
    private scene: THREE.Scene
    private camera: THREE.PerspectiveCamera
    private renderer: THREE.WebGLRenderer
    private controls: OrbitControls
    private gui: lil.GUI
    
    constructor(d: Document, w: Window & typeof globalThis, options?: Options) {
        // Canvas
        const canvas = d.getElementById('webgl') as HTMLCanvasElement
        if (!canvas) {
            throw new Error('Canvas not found')
        }

        // Scene
        this.scene = new THREE.Scene()

        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        // Camera
        this.camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        this.camera.position.x = 1
        this.camera.position.y = 1
        this.camera.position.z = 3
        if (options?.camera?.position) {
            this.camera.position.x = options.camera.position.x
            this.camera.position.y = options.camera.position.y
            this.camera.position.z = options.camera.position.z
        }
        this.scene.add(this.camera)

        // Controls
        this.controls = new OrbitControls(this.camera, canvas)
        this.controls.enableDamping = true

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace
        this.renderer.setSize(sizes.width, sizes.height)
        this.renderer.setPixelRatio(Math.min(w.devicePixelRatio, 2))
        if (options?.shadowMap?.enabled) {
            this.renderer.shadowMap.enabled = true
            this.renderer.shadowMap.type = options.shadowMap.type ?? THREE.PCFShadowMap
        }

        // Resize
        w.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = w.innerWidth
            sizes.height = w.innerHeight

            // Update camera
            this.camera.aspect = sizes.width / sizes.height
            this.camera.updateProjectionMatrix()

            // Update renderer
            this.renderer.setSize(sizes.width, sizes.height)
            this.renderer.setPixelRatio(Math.min(w.devicePixelRatio, 2))
        })

        // Debug
        this.gui = new lil.GUI()

        // Axes helper
        const axesHelper = new THREE.AxesHelper()
        this.scene.add(axesHelper)

    }

    getScene = () => this.scene
    getCamera = () => this.camera
    getRenderer = () => this.renderer
    getGUI = () => this.gui

    animate = (callback?: () => void) => {
        const tick = () => {
            callback && callback()
            this.controls.update()
            this.renderer.render(this.scene, this.camera)
            window.requestAnimationFrame(tick)
        }

        tick()
    }
}