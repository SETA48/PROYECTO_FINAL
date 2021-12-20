import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http:HttpClient) { }
 
  public urlLocal:string = 'http://localhost:3500'
  Post(url:string,data:{}){

    let promise = new Promise((resolve,reject) => {

      this.http.post(url,data)
      .toPromise()
      .then((res:any) => {
      resolve(res)
      })

    })
    return promise
  }
}
