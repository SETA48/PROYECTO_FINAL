import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/Services/mensajes.service';
import { PeticionService } from 'src/app/Services/peticion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private peticion : PeticionService, private msg: MensajesService) { }

  ngOnInit(): void {
  }

  nombreusuario:string = ''
  apellidousuario:string = ''
  correousuario:string = ''

  
  guardar(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/contactos/guardar',
      data:{
        nombre:this.nombreusuario,
        apellido:this.apellidousuario,
        correo:this.correousuario
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      this.msg.load('Usuario Registrado')
    })

  }
}