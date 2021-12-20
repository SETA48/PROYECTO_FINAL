import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor() { }
  public carrito:any[] = []
  public Total:number = 0
  public pedidos:any[] = [];
  nropedido:number = 0;

  AgregarCarrito(elemento:any){
    if(this.carrito.length > 0){
      var posicion = this.carrito.findIndex((item) => item.id == elemento.id)
      if(posicion >= 0){
        this.carrito[posicion].cantidad += 1
      }
      else{
        elemento.cantidad = 1
        this.carrito.push(elemento)
      }
    }
    else{
      elemento.cantidad = 1
      this.carrito.push(elemento)
    }
    this.calcularTotal()
    localStorage.setItem('carrito',JSON.stringify(this.carrito))
  }

  CargarCarrito(){
    let carro:any = localStorage.getItem('carrito')
    if(carro == undefined || this.carrito == null){
      this.carrito = []
    }
    else{
      this.carrito = JSON.parse(carro)
      this.calcularTotal()
    }

    let pedido:any = localStorage.getItem('pedidos')
    if(pedido == undefined || pedido == null){
      this.pedidos = []
    }
    else{
      this.pedidos = JSON.parse(pedido)
      this.nropedido = this.pedidos.length
    }
  }

  EliminarItem(id:string){
    let posicion = this.carrito.findIndex((item) => item.id == id )
    console.log(posicion)
    if(this.carrito[posicion].cantidad > 1){
      this.carrito[posicion].cantidad -= 1
    }
    else{
      this.carrito.splice(posicion,1)
    }
    this.calcularTotal()
    localStorage.setItem('carrito',JSON.stringify(this.carrito))
  }

  calcularTotal(){
    this.Total = 0
    for (let a = 0; a < this.carrito.length; a++) {
     this.Total = this.Total + (this.carrito[a].cantidad * this.carrito[a].precio)
    }
  }

  

  realizarpedido(nombre:string,direccion:string){
    this.nropedido = this.nropedido + 1
    this.pedidos.push({nro:this.nropedido, nombre:nombre,direccion:direccion, fecha:new Date(),items:this.carrito})
    localStorage.setItem('pedidos',JSON.stringify(this.pedidos))
  }

  vaciarcarrito(){
    this.carrito = [];
    this.calcularTotal();
    localStorage.setItem('carrito',JSON.stringify(this.carrito))
  }


}
