import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Importing Our In App Cordova Plugin
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
//import { AdMobFree } from '@ionic-native/admob-free/ngx';

//import { AdmobFreeService } from './service/admobfree.service';







@NgModule({
  declarations: [AppComponent],
  ///entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
      StatusBar,
      SplashScreen,
   // AdMobFree,
   // AdmobFreeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        //Add in here too ...
        InAppBrowser

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
