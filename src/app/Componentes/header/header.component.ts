import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public carrito:CarritoService) { }

  itemscarro:string = '0'
  ngOnInit(): void {
    this.carrito.CargarCarrito()
  }

}
