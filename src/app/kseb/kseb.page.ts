import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-kseb',
  templateUrl: './kseb.page.html',
  styleUrls: ['./kseb.page.scss'],
})
export class KsebPage implements OnInit {

  constructor(private inAppBrowser : InAppBrowser, private platform : Platform) { }
  subscription: any


  opencs(){
    this.inAppBrowser.create('https://wss.kseb.in/selfservices/displayAnonymousComplaintStatus.do', `_blank`);

  }

  openpaybill(){
    this.inAppBrowser.create('https://wss.kseb.in/selfservices/quickpay', `_blank`);

  }
  openksebnc(){
    this.inAppBrowser.create('https://wss.kseb.in/selfservices/ncHome', `_blank`);

  }
  openrc(){
    this.inAppBrowser.create('https://wss.kseb.in/selfservices/showAnonymousComplaint.do', `_blank`);

  }

  openOmsreg(){
    this.inAppBrowser.create('https://wss.kseb.in/selfservices/registermobile', `_blank`);

  }
  openSoura(){
    this.inAppBrowser.create('https://ekiran.kseb.in/', `_blank`);

  }

  ngOnInit() {

  }




}
