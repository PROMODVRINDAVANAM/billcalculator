import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-todmodal',
  templateUrl: './todmodal.page.html',
  styleUrls: ['./todmodal.page.scss'],
})
export class TodmodalPage implements OnInit {

  fc: number;
  fcexcess:number;
  fctotal:number
  ec1:number;
  ec2:number;
  ec3:number;
  ectotal:number;
  pfpi:number;

  duty:number;
  meterrent:number;
  mrfloodcess:number;
  mrcgst:number;
  mrsgst:number;
  grandtotal:number;
  pfpen:number;
  pfinc:number;
  kwh1:number
  kwh2:number
  kwh3:number
  rmd1:number
  rmd2:number
  rmd3:number
  tariffDesc:any
  cl:number
  cd:number
  pf:number
  surchargeonEnergy:number
  kvahcum:number;



  constructor(private modalController:ModalController,
    private navParams: NavParams
    ) { }


  ngOnInit() {

    console.table(this.navParams);
    this.ec1 = this.navParams.data.paramec1;
    this.ec2 = this.navParams.data.paramec2;
    this.ec3 = this.navParams.data.paramec3;
    this.ectotal = this.navParams.data.paramEc;

    this.fc=this.navParams.data.paramfc;

    this.fcexcess=this.navParams.data.paramfcexcess;

    this.fctotal=this.navParams.data.paramfctotal;

    this.pfpi=this.navParams.data.parampfpi;

    this.duty=this.navParams.data.paramDuty;
    this.meterrent=this.navParams.data.paramMeterrent;
    this.mrfloodcess=this.navParams.data.paramMtrFloodcess;
    this.mrcgst=this.navParams.data.paramMetercgst;
    this.mrsgst=this.navParams.data.paramMetersgst;
    this.grandtotal=this.navParams.data.paramGrandTotal;
    this.pfpen=this.navParams.data.parampfpen;
    this.pfinc=this.navParams.data.parampfinc;
    this.cl=this.navParams.data.paramCl;
    this.cd=this.navParams.data.paramCd;
    this.pf=this.navParams.data.paramPf;
    this.rmd1=this.navParams.data.paramRmd1;
    this.rmd2=this.navParams.data.paramRmd2;
    this.rmd3=this.navParams.data.paramRmd3;
    this.kwh1=this.navParams.data.paramUnits1;
    this.kwh2=this.navParams.data.paramUnits2;
    this.kwh3=this.navParams.data.paramUnits3;
    this.tariffDesc=this.navParams.data.paramtariffDesc;
    this.surchargeonEnergy=this.navParams.data.paramSurcharge;
    this.kvahcum=this.navParams.data.paramkvahCum;


  }

  async closeModal(){
    await this.modalController.dismiss();

  }

}
