import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  public mensajes:any[] = [];

  private borrar(){

    setTimeout(() => {
      this.mensajes.splice(0,1)
    },5000)

  }

  public load(mensaje:string){
    this.mensajes.push({texto:mensaje,color:'primary'})
    this.borrar()
  }
}
