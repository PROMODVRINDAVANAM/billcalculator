// my-modal.page.ts
import { Component, OnInit } from '@angular/core';
import {
ModalController,
NavParams
} from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage implements OnInit {


  modalTitle: string;
  consum: number;
  tariffselected: string;
  fc: number;
  fcsub:number;
  ec:number;
  ecsub:number;
  ecwithsub:number;
  duty:number;
  meterrent:number;
  mrfloodcess:number;
  mrcgst:number;
  mrsgst:number;
  grandtotal:number;
  fusur:number;
  tariffDesc:any
  cl:any
  calcMethod:string;


  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.consum = this.navParams.data.paramKwh;
    this.modalTitle = this.navParams.data.paramTitle;
    this.tariffselected = this.navParams.data.paramtariff;
    this.fc=this.navParams.data.paramfc;
    this.fcsub=this.navParams.data.paramFcsub;
    this.ec=this.navParams.data.paramEc;
    this.ecsub=this.navParams.data.paramEcsub;
    this.ecwithsub=this.navParams.data.paramEcwithsub;
    this.duty=this.navParams.data.paramDuty;
    this.meterrent=this.navParams.data.paramMeterrent;
    this.mrfloodcess=this.navParams.data.paramMtrFloodcess;
    this.mrcgst=this.navParams.data.paramMetercgst;
    this.mrsgst=this.navParams.data.paramMetersgst;
    this.grandtotal=this.navParams.data.paramGrandTotal;
    this.fusur=this.navParams.data.paramfusur;
    this.tariffDesc=this.navParams.data.paramtariffDesc;
    this.cl=this.navParams.data.paramCl;
    this.calcMethod=this.navParams.data.paramcalcMethod;



  }

  async closeModal() {


    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);



  }

}
