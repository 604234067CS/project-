import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NameproviderProvider } from '../../providers/nameprovider/nameprovider';
import { FriendsDetailPage } from '../friends-detail/friends-detail';
import { Friends } from '../../models/friend.model';




@Component({
  selector: 'page-friendslist',
  templateUrl: 'friendslist.html',
})
export class FriendslistPage {

  Name:string;
  friends:Friends;

  constructor(public friendsRest:NameproviderProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.Name=this.navParams.get("Name");
    console.log(this.Name);
    this.friendsRest.getFriendslist().subscribe( data =>{
      this.friends=data.filter(friend=> friend.Name === this. Name);
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
