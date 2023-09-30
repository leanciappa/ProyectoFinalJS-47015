class Producto{
    constructor(id, nombre, precio, cantidad){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = cantidad
    }
}
    
    class ControladorProducto{
    constructor(){
        this.listaProductos= []
    }
    agregar (producto){
        this.listaProductos.push(producto)
    }
    mostrar(){
        let descripcion= ""
        this.listaProductos.forEach(producto =>{
            
            descripcion += "Id:"+producto.id+" Nombre:"+producto.nombre+" Precio:"+producto.precio+" Cantidad:"+producto.cantidad+"\n"
        })
    return descripcion;
    }
    seleccionProducto(id){
        return this.listaProductos.find(producto => producto.id == id)
    }
}

class Carrito {
    constructor(){

        this.listaCarrito = [],
        this.total= 0
    }
    agregarCarrito(producto){
        this.listaCarrito.push(producto)

    }
    mostrar(){
            let descripcion= ""
            this.listaCarrito.forEach(producto =>{
            descripcion += "Id:"+producto.id+" Nombre:"+producto.nombre+" Precio:"+producto.precio+" Cantidad:"+producto.cantidad+"\n"
        })
        return descripcion;
    }
}


alert("Ingresar el listado de productos del ecommerce")

const controladorProductos = new ControladorProducto()
const carrito = new Carrito ()


//Generación de listado de productos 
let rta= " "

do{
    let id = prompt ("Ingrese el id del producto: ")
    let nombre = prompt ("Ingrese el nombre del producto: ")
    let precio = Number(prompt ("Ingrese el precio del producto: "))
    let cantidad = Number(prompt ("Ingrese la cantidad: "))
    
    let producto1 = new Producto (id, nombre, precio, cantidad)
    controladorProductos.agregar (producto1)
    alert(controladorProductos.mostrar())
        
    rta = prompt ("Si Desea salir de la carga de productos, escriba 'ESC':")
} while (rta != 'ESC')



// Compra de productos


let rta2=" "
let acumulador2= " "

do{
    
    alert("Elija el productos a comprar:"+"\n"+controladorProductos.mostrar())
    let productoId = Number(prompt ("Ingrese el ID del producto a comprar:"))
    const producto = controladorProductos.seleccionProducto(productoId)
    let cantidadProducto = Number (prompt("Ingrese la cantidad de unidades a comprar:"))
    producto.cantidad = cantidadProducto
    acumulador2 +=  "Id:"+producto.id +" Nombre:"+ producto.nombre+" Precio: $"+producto.precio+" Cantidad:"+producto.cantidad+"\n"
    alert(acumulador2)
    carrito.agregarCarrito(producto )
    rta2 = prompt("Para finalizar la selección ingrese: 'ESC")

}while (rta2 !='ESC')



//

alert("Usted está por comprar:\n"+carrito.mostrar())



