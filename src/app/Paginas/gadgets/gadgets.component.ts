import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent implements OnInit {

  constructor(private carrito:CarritoService) { }

  ngOnInit(): void {
  }

  productos:any[] = [
    {id:1,nombre:'Audífono Inalámbricos',imagen:'assets/Gadgets/Gd1.webp',precio:40000},
    {id:2,nombre:'Cable Cargador UNI',imagen:'assets/Gadgets/Gd2.webp',precio:35000},
    {id:3,nombre:'Mini Power Bank',imagen:'assets/Gadgets/Gd3.webp',precio:50000},
    {id:4,nombre:'Drone 4K',imagen:'assets/Gadgets/Gd4.webp',precio:255000},
    {id:5,nombre:'Reloj Inteligente',imagen:'assets/Gadgets/Gd5.webp',precio:60000},
    {id:6,nombre:'Radio S.O.S',imagen:'assets/Gadgets/Gd6.webp',precio:90000},
    {id:7,nombre:'Amplificador Bluetooth',imagen:'assets/Gadgets/Gd7.webp',precio:100000},
    {id:8,nombre:'Manos Libres',imagen:'assets/Gadgets/Gd8.webp',precio:130000},
    {id:9,nombre:'Reloj Ventilador',imagen:'assets/Gadgets/Gd9.webp',precio:30000},
    {id:10,nombre:'Gafas 3D 4K',imagen:'assets/Gadgets/Gd10.webp',precio:130000},
  ]

}
