import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private actroute: ActivatedRoute,private carrito:CarritoService) { }

  ngOnInit(): void {
    let id = this.actroute.snapshot.params['id']
    console.log(id)
    this.cargarId(id)
  }


  productos:any[] = [
    {id:1,nombre:'Camisa Leñador',imagen:'assets/Hombre/Camisa1.webp',precio:40000},
    {id:2,nombre:'Camisa Casual',imagen:'assets/Hombre/Camisa2.jpg',precio:45000},
    {id:3,nombre:'Polo Casual',imagen:'assets/Hombre/Camiseta1.jpg',precio:30000},
    {id:4,nombre:'Polo Colores',imagen:'assets/Hombre/Camiseta2.webp',precio:35000},
    {id:5,nombre:'Pantalón Sport',imagen:'assets/Hombre/Pantalon1.webp',precio:60000},
    {id:6,nombre:'Pantalón Casual',imagen:'assets/Hombre/Pantalon2.webp',precio:70000},
    {id:7,nombre:'Chaqueta Sport',imagen:'assets/Hombre/Chaqueta1.jpg',precio:90000},
    {id:8,nombre:'Chaqueta Invierno',imagen:'assets/Hombre/Chaqueta2.webp',precio:100000},
    {id:9,nombre:'Zapatos Sport',imagen:'assets/Hombre/Zapatos1.webp',precio:120000},
    {id:10,nombre:'Zapatos Casual',imagen:'assets/Hombre/Zapatos2.webp',precio:140000},
  ]

  datos:any = {};
  cargarId(id:string){
    console.log(id)

    let posicion = this.productos.findIndex((item) => item.id == id)
    console.log(posicion)
    this.datos = this.productos[posicion]
  }

  Agregar(objeto:any){
    console.log(objeto)
    this.carrito.AgregarCarrito(objeto)
  }

}
