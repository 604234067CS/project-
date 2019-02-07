import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NameproviderProvider } from '../providers/nameprovider/nameprovider';
import { HttpClientModule } from '@angular/common/http';
import { FriendsDetailPage } from '../pages/friends-detail/friends-detail';
import { FriendslistPage } from '../pages/friendslist/friendslist';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FriendsDetailPage,
    FriendslistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FriendsDetailPage,
    FriendslistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NameproviderProvider,
   
   
  ]  
})
export class AppModule {}
