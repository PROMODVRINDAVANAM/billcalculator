import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-fetchbill',
  templateUrl: './fetchbill.page.html',
  styleUrls: ['./fetchbill.page.scss'],
})
export class FetchbillPage implements OnInit {


  constructor(private inAppBrowser : InAppBrowser, private platform : Platform ) { }
  subscription: any


  fetchbill(){
    this.inAppBrowser.create('https://old.kseb.in/billview/','_system');

  }


  ngOnInit() {
  }

}
