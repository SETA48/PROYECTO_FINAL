import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/Services/mensajes.service';
import { PeticionService } from 'src/app/Services/peticion.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  constructor(private peticion : PeticionService, private msg: MensajesService) { }

  ngOnInit(): void {
    this.listar()
  }

  nombreusuario:string = ''
  apellidousuario:string = ''
  correousuario:string = ''

  datos:any[] = []

  Identificador:string = ''

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
      this.listar()
    })

  }

  listar(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/contactos/listar',
      data:{}
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      this.datos = res.data
    })

  }

  editar(identi:string){
    this.Identificador = identi
    var post = {
      host:this.peticion.urlLocal,
      path:'/contactos/listarid',
      data:{
        id:identi
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      this.nombreusuario = res.data[0].nombre
      this.apellidousuario = res.data[0].apellido
      this.correousuario = res.data[0].correo
    })
  }

  modificar(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/contactos/modificar',
      data:{
        id:this.Identificador,
        nombre:this.nombreusuario,
        apellido:this.apellidousuario,
        correo:this.correousuario
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      this.msg.load(res.mensaje)
      this.listar()
    })
  }

  eliminar(id:string){
    var post = {
      host:this.peticion.urlLocal,
      path:'/contactos/eliminar',
      data:{
        id:id
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) => {
      console.log(res)
      this.msg.load(res.mensaje)
      this.listar()
    })
  }

}
