import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate:any;
  constructor(
    public alert: AlertController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _location: Location,
    public alertController: AlertController
  ) {

    this.sideMenu();
    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      this.splashScreen.show();
      this.splashScreen.hide();
    });

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/home')) {

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {

        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();

      }

    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });

  }

  showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });


  }

  sideMenu()
{
  this.navigate =
  [
    {
      title : "Home",
      url   : "/home",
      icon  : "home"
    },
    {
      title : "KSEB in Touch",
      url   : "/kseb",
      icon  : "flash"
    },

    {
      title : "View my latest Bill",
      url   : "fetchbill",
      icon  : "copy"
    },

    {
      title : "TOD Bill(LT-IVA/B)",
      url   : "/tod",
      icon  : "timer"
    },


    {
      title : "Help",
      url   : "/help",
      icon  : "help-circle-sharp"
    },
    {
      title : "About",
      url   : "/about",
      icon  : "chatbubble-ellipses-sharp"
    },


  ]
}

}

