# Transformations

All objects that inherits from Object3D, have the properties

- `position`
- `scale`
- `rotation`
- `quaternion`

Estas propiedades van a ser compiladas en matrices. No necesitamos entender matrices por el momento (me debo la de álgebra, en algún momento)

### Position
Tenemos tres propiedades, `x`, `y`, `z`.

La distancia de `1` es arbitraria. Deberíamos pensar al `1` con la unidad de medida relativa a lo que necesitamos. 
Por ejemplo, si estamos haciendo una casa podemos pensar al 1 como un metro.

position no es un objeto. Hereda de Vector3..

Esta clase tiene un monton de métodos.
- Por ejemplo, la distancia del objeto al centro, con `.length()`
- Otra cosa qeu podemos hacer es obtener la distancia entre dos elementos. Lo hacemos con `.distanceTo(camera.position)` o tambien podemos usar un `mesh.position`
- `normalize` lo que va a hacer es hacer que la distancia del objeto al centro sea de 1. Por lo tanto va a cambiar el vector posicion.