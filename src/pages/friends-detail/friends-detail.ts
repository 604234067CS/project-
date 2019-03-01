import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NameproviderProvider } from '../../providers/nameprovider/nameprovider';
import { Friends } from '../../models/friend.model';



@Component({
  selector: 'page-friends-detail',
  templateUrl: 'friends-detail.html',
})
export class FriendsDetailPage {

  nameId:number;
  name:Friends;
  
  constructor(public friendsRest:NameproviderProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsDetailPage');
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.nameId=this.navParams.get("nameId");
    this.friendsRest.getFriendslist().subscribe( data =>{
        this.name=data.filter(name=> name.nameid === this. nameId)[0];
      }
    );
  }
  goBack(){
    this.navCtrl.pop();
  }
  
}
