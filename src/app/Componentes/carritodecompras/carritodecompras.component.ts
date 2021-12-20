import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/Services/carrito.service';

declare var Swal:any
@Component({
  selector: 'app-carritodecompras',
  templateUrl: './carritodecompras.component.html',
  styleUrls: ['./carritodecompras.component.css']
})
export class CarritodecomprasComponent implements OnInit {

  constructor(public carrito:CarritoService) { }

  nombre:string = '';
  telefono:string = '';
  direccion:string = '';
  ngOnInit(): void {
  }

  QuitarElemento(id:string){
    console.log(id)
    this.carrito.EliminarItem(id)
  }

  realizarpedido(){

    this.carrito.realizarpedido(this.nombre,this.direccion)

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Felicitaciones! Pedido Realizado',
      text: 'Te esperamos pronto',
      showConfirmButton: false,
      timer: 1500
    })
    this.carrito.vaciarcarrito()
  }
}
