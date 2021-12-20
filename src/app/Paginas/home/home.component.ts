import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/Services/peticion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peticion: PeticionService) { }

  ngOnInit(): void {
  }

  registrarusuario(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/contactos/guardar',
      data:{

      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) =>{
      console.log(res)
    })
  }


}
