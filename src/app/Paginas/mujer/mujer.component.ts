import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css']
})
export class MujerComponent implements OnInit {

  constructor(private carrito:CarritoService) { }

  ngOnInit(): void {
  }

  productos:any[] = [
    {id:1,nombre:'Blusa Casual',imagen:'assets/Mujer/Blusa1.jpg',precio:40000},
    {id:2,nombre:'Blusa Elegante',imagen:'assets/Mujer/Blusa2.webp',precio:45000},
    {id:3,nombre:'Falda Cinturon',imagen:'assets/Mujer/Falda1.webp',precio:50000},
    {id:4,nombre:'Falda Plisada',imagen:'assets/Mujer/Falda2.webp',precio:55000},
    {id:5,nombre:'Vestido Verano',imagen:'assets/Mujer/Vestido1.jpg',precio:60000},
    {id:6,nombre:'Vestido Fiesta',imagen:'assets/Mujer/Vestido2.webp',precio:90000},
    {id:7,nombre:'Chaqueta Casual',imagen:'assets/Mujer/Chaqueta1.webp',precio:100000},
    {id:8,nombre:'Chaqueta Elegante',imagen:'assets/Mujer/Chaqueta2.webp',precio:130000},
    {id:9,nombre:'Zapatos Sport',imagen:'assets/Mujer/Zapatos1.jpg',precio:90000},
    {id:10,nombre:'Zapatos Casual',imagen:'assets/Mujer/Zapatos2.webp',precio:130000},
  ]


}
