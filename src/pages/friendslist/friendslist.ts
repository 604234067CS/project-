import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NameproviderProvider } from '../../providers/nameprovider/nameprovider';
import { FriendsDetailPage } from '../friends-detail/friends-detail';
import { Firend } from '../../models/friend.model';



@Component({
  selector: 'page-friendslist',
  templateUrl: 'friendslist.html',
})
export class FriendslistPage {

  Lifegoals:string;
  friends:Firend;

  constructor(public friendsRest:NameproviderProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.Lifegoals=this.navParams.get("Lifegoals");
    console.log(this.Lifegoals);
    this.friendsRest.getFriendslist().subscribe( data =>{
      this.friends=data.filter(friend=> friend.Lifegoals === this. Lifegoals);
         }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendslistPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  showFriends(nameid:string){
    this.navCtrl.push( FriendsDetailPage, 
    {nameId:nameid}
    );

}
}
