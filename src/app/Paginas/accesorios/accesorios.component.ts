import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css']
})
export class AccesoriosComponent implements OnInit {

  constructor(private carrito:CarritoService) { }

  ngOnInit(): void {
  }

  productos:any[] = [
    {id:1,nombre:'Gargantilla perla azul',imagen:'assets/Accesorios/Ac3.webp',precio:30000},
    {id:2,nombre:'Juego Apple',imagen:'assets/Accesorios/Ac4.webp',precio:45000},
    {id:3,nombre:'Gargantilla Lujo',imagen:'assets/Accesorios/Ac5.webp',precio:50000},
    {id:4,nombre:'Pulsera Family',imagen:'assets/Accesorios/Ac6.jpg',precio:55000},
    {id:5,nombre:'Pulsera Nudo',imagen:'assets/Accesorios/Ac7.webp',precio:60000},
    {id:6,nombre:'Reloj Hombre Casual',imagen:'assets/Accesorios/Ac8.webp',precio:90000},
    {id:7,nombre:'Reloj Mujer Casual',imagen:'assets/Accesorios/Ac9.webp',precio:100000},
    {id:8,nombre:'Reloj Mujer Elegante',imagen:'assets/Accesorios/Ac10.webp',precio:130000},
    {id:9,nombre:'Juego Gota',imagen:'assets/Accesorios/Acces1.webp',precio:90000},
    {id:10,nombre:'Juego Corazón',imagen:'assets/Accesorios/Acces2.webp',precio:130000},
  ]
}
