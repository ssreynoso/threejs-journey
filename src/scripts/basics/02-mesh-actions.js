const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    color: 'red',
})

// Un mesh está compuesto por una geometría y un material.
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Puedo reoposicionar el mesh
// Reemplazando cada propiedad
// mesh.position.x = -1
// mesh.position.y = 2
// mesh.position.z = -2
// O utilizando el método set(x, y, z)
mesh.position.set(-1, 2, -2)

// Puedo saber la distancia del mesh al centro de la escena
console.log('Distancia del cubo al centro: ', mesh.position.length())

// Puedo saber la distancia del mesh a otro Vector3
console.log('Distancia del cubo a la cámara: ', mesh.position.distanceTo(camera.position))

// Para normalizar un vector (hacer que su norma sea 1), utilizamos el método normalize()
mesh.position.normalize()
console.log('Nueva longitud después de normalize()', mesh.position.length())
console.log('Nueva posicion x después de normalize()', mesh.position.x)
console.log('Nueva posicion y después de normalize()', mesh.position.y)
console.log('Nueva posicion z después de normalize()', mesh.position.z)

// Scale
// mesh.scale.y = 2
// mesh.scale.x = 0.5
// mesh.scale.y = 2
mesh.scale.set(0.5, 2, 2)

// Rotation
// We can made rotations with PI. PI = 180°, 2PI = 360° etc.
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI / 4
mesh.rotation.x = Math.PI / 3
// mesh.rotation.z = (Math.PI / 2)
