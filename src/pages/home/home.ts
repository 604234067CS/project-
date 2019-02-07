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
 
  showFriendList(LifegoalsName:string){
    console.log(LifegoalsName);
    this.navCtrl.push( FriendslistPage, 
      {Lifegoals:LifegoalsName}
      );

  }


}
