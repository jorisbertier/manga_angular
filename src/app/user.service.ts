import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './user/Iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id: any;

  url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {

}

  fetchAll() {
    return this.http.get<Iuser[]>(this.url);
  }

  fetchById(id: number) {
    const userUrl = `${this.url}/${id}`;
    return this.http.get<Iuser>(userUrl);
    // return this.serviceHttpClient.get<IUser[]>(this.url+'/' +id);
  }
}
