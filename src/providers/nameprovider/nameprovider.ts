import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friends } from '../../models/friend.model';





@Injectable()
export class NameproviderProvider {

  private url="https://raw.githubusercontent.com/604234067CS/HomeWork-/master/friends2.json";

  constructor(public http: HttpClient) {
    console.log('Hello NameproviderProvider Provider');
  }
 
  getFriendslist() :Observable<any>
  {
    return this.http.get<Friends>(this.url);
  }
}
