import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendslistPage } from '../friendslist/friendslist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 
  showFriendList(NameF:string){
    console.log(NameF);
    this.navCtrl.push( FriendslistPage, 
      {Name:NameF}
      );

  }


}
