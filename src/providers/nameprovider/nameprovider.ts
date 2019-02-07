import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Firend } from '../../models/friend.model';




@Injectable()
export class NameproviderProvider {

  private url="https://raw.githubusercontent.com/604234067CS/HomeWork-/master/friends.json";

  constructor(public http: HttpClient) {
    console.log('Hello NameproviderProvider Provider');
  }
 
  getFriendslist() :Observable<any>
  {
    return this.http.get<Firend>(this.url);
  }
}
