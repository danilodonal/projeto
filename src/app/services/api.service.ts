import { HttpClient } from '@angular/common/http';
import { Injectable, reflectComponentType } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postNome(data : any){
    return this.http.post<any>("http://localhost:3000/nameList/",data);
  }
  getname(){
    return this.http.get<any>("http://localhost:3000/nameList/");
  }
  putNome(data:any,id : number){
    return this.http.put<any>("http://localhost:3000/nameList/"+id,data);
  }
  deleteNome(id:number){
    return this.http.delete<any>("http://localhost:3000/nameList/"+id);
  }
}
