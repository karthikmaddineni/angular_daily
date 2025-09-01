import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  user_name?: string;
  address?: string;
  url?: string;
  company?: string;
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeHttp {
  private api = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient){

  }
  addUser(user : User){
    return this.http.post<User>(this.api,user);
  }

  updateUser(id:number, user:Partial<User>){
    return this.http.put<User>(`${this.api}/{id}`,user);
  }

  deleteUser(id:number){
    return this.http.delete(`${this.api}/${id}`);
  }
  }

