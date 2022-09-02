import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }
  UsersData()
  {
    return this.http.get('http://localhost:3000/UserDetail');
  }
  saveUserDetail(data:any)
  {
    return this.http.post('http://localhost:3000/UserDetail',data);
  }
  deleteData(id:number)
  {
    return this.http.delete(`http://localhost:3000/UserDetail/${id}`);
  }
  getCurrentData(id:number)
  {
    return this.http.get(`http://localhost:3000/UserDetail/${id}`);
  }
  editData(id:number,data:any)
  {
    return this.http.put(`http://localhost:3000/UserDetail/${id}`,data);
  }
}
