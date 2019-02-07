import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Firend } from '../../models/friend.model';
import { NameproviderProvider } from '../../providers/nameprovider/nameprovider';

/**
 * Generated class for the FriendsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-friends-detail',
  templateUrl: 'friends-detail.html',
})
export class FriendsDetailPage {

  nameId:number;
  name:Firend;
  
  constructor(public friendsRest:NameproviderProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsDetailPage');
  }
  ionViewWillEnter(){
    console.log('ionViewWillEnter');
    this.nameId=this.navParams.get("nameId");
    this.friendsRest.getFriendslist().subscribe( data =>{
        this.name=data.filter(book=> book.bookid === this. nameId)[0];
      }
    );
  }
  goBack(){
    this.navCtrl.pop();
  }
  
}
