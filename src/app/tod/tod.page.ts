import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodmodalPage } from "../modals/todmodal/todmodal.page";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tod',
  templateUrl: './tod.page.html',
  styleUrls: ['./tod.page.scss'],
})
export class TodPage implements OnInit {

  public onChange(event): void {
    const newVal = event.target.value;
    if (this.selected_tariff==='LT-IVA'){

      this.tariffDesc="LT-IVA-Industrial category";

    }
    if (this.selected_tariff==='LT-IVB'){

      this.tariffDesc="LT-IVB-Industrial,Akshaya,Software Centre etc";

    }


  }

  kwh: any;
  selected_tariff:any;
  fixedCharge:number;
  fcExcess:number;
  fixedChargeT:number;
  energyChages1:number;
  energyChages2:number;
  energyChages3:number;
  energyChargesT:number;
  surchargeonEnergy:number;
  duty:number;
  meterRent:number;
  floodcessMr:number;
  cgstMr:number;
  sgstMr:number;
  grandTotal:number;
  mkwh:number;
  cl:number;
  phaseValue:any;
  tariffDesc:any;
  fusur:boolean;
  rmd1:number;
  rmd2:number;
  rmd3:number;
  bmd:number;
  md:number;
  kwh1:number;
  kwh2:number;
  kwh3:number;
  kvah:number;
  kvarhld:number;
  kvarhlg:number;
  cd:number;
  rate:number;
  pf:number;
  pfinc:number;
  pfpen:number;
  ed1:number;
  ed2:number;
  ed3:number;
  ed:number;
  pfpi:number;
  fsstate:boolean;
  surhidden:boolean;
  survaluehidden:boolean;
  surchRate:number;



  calculateTotal(){
    this.cgstMr= parseFloat((this.meterRent*0.09).toFixed(2));
    this.sgstMr=this.meterRent*0.09;
    this.floodcessMr=this.meterRent*0.01;
    this.duty=this.energyChargesT*0.1;
    this.grandTotal=parseFloat((0.49+this.energyChargesT+this.surchargeonEnergy+this.fixedChargeT-this.pfinc+this.pfpen+this.duty+this.meterRent+this.floodcessMr+this.cgstMr+this.sgstMr).toFixed(0));

}

fuelSurchargefn(){

  if (this.fsstate===true) {
    this.surchargeonEnergy=this.kwh*.10;

   } else {
     this.surchargeonEnergy=0;

   }


}

////WARNING POPUP
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'PF Warning.....',
    subHeader: 'Wrong P.F',
    message: 'Please Check the Reading - PF is Greater than Unity.( KVAH Cumulative must be <= KWH Total (3 zone)',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}


async selectAlert() {
  const alert = await this.alertController.create({
    header: 'Select Tariff',
    subHeader: 'No Tariff Seleted',
    message: 'Please Select a Valid Tariff before Proceed...',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

async phaseAlert() {
  const alert = await this.alertController.create({
    header: 'Select Phase value',
    subHeader: 'No Phase  value Seleted',
    message: 'Please Select a Valid Phase 3ph/3ph-ct before Proceed...',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

async cdclAlert() {
  const alert = await this.alertController.create({
    header: 'Connected Load/Contract Demand',
    subHeader: 'CL/CD Value not valid',
    message: 'Please input Valid Connected Load/Contract Demand in KW before Proceed...',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

async surchAlert() {
  const alert = await this.alertController.create({
    header: 'Fuel Surcharge',
    subHeader: 'Default Fuel Surcharge',
    message: 'Default fuel surcharge is 10 Ps/Unit, If any change in FS rate please enter the value as PAISE, For No FS Please Uncheck this.',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

////WARNIONG POP

  /**
   * surchonChange
   */
  public surchonChange(event) {

    if (this.fsstate===true) {

      this.survaluehidden=false
      this.surchRate=10;
      this.surchAlert();
      return;

    } else {
      this.survaluehidden=true;

    }
  }

  constructor(private modalController:ModalController,
    public alertController: AlertController) {
      this.phaseValue='novalue';
      this.selected_tariff='Select One';
     // this.cd=0;
      //this.cl=0;
     // this.kwh1=0;
    //  this.kwh2=0
    //  this.kwh3=0
     // this.rmd1=0
     // this.rmd2=0
     // this.rmd3=0
     // this.kvah=0
     // this.kvarhld=0
     // this.kvarhlg=0
     // this.kwh=0
      this.surchRate=10;
      this.surhidden=false;
      this.survaluehidden=true;
    }
    showValue(){
      console.log(this.phaseValue);
    }
  async openModal(){

    if (isNaN(this.kwh1)===true){
      this.kwh1=0;
    }
    if (isNaN(this.kwh2)===true){
      this.kwh2=0;
    }
    if (isNaN(this.kwh3)===true){
      this.kwh3=0;
    }
    if (isNaN(this.rmd1)===true){
      this.rmd1=0;
    }
    if (isNaN(this.rmd2)===true){
      this.rmd2=0;
    }
    if (isNaN(this.rmd3)===true){
      this.rmd3=0;
    }
    if (isNaN(this.kvah)===true){
      this.kvah=0;
    }
    if (isNaN(this.kvarhld)===true){
      this.kvarhld=0;
    }
    if (isNaN(this.kvarhlg)===true){
      this.kvarhlg=0;
    }
    if (isNaN(this.cl)===true){
      this.cl=0;
    }
    if (isNaN(this.cd)===true){
      this.cd=0;
    }





    this.fixedCharge=0;
    this.duty=0;
    this.meterRent=0;
    this.floodcessMr=0;
    this.cgstMr=0;
    this.sgstMr=0;
    this.grandTotal=0;
    this.pfinc=0;
    this.pfpen=0
    this.energyChargesT=0
    this.fixedChargeT=0
    this.fcExcess=0
    this.energyChages1=0
    this.energyChages2=0
    this.energyChages3=0
    this.kwh=0;

    if (this.cl<=0 || this.cd<=0){ this.cdclAlert()}

    if (this.phaseValue==='novalue'){
      this.phaseAlert();
      return;}

    if (this.selected_tariff==='Select One'){
       this.selectAlert();
       return;

      }




    ///meter rent

        if (this.phaseValue==='3ph'){this.meterRent=15;}
        if (this.phaseValue==='3ct'){this.meterRent=30;}

    ///ENERGY

    if (this.selected_tariff==='LT-IVA') {
      this.surhidden=false;
      this.rate=5.85;
      this.kwh=this.kwh1+this.kwh2+this.kwh3;
        this.energyChages1=this.kwh1*this.rate;
        this.energyChages2=this.kwh2*this.rate*1.5;
        this.energyChages3=this.kwh3*this.rate*0.75;
        this.energyChargesT=this.energyChages1+this.energyChages2+this.energyChages3;
        this.md=Math.max(this.rmd1,this.rmd2,this.rmd3);
        this.bmd=Math.max(this.md,(Math.round((this.cd*.75)+.49)));
        this.fixedCharge=this.bmd*200;

    } else {this.rate=6.60;
      this.surhidden=false;
      this.kwh=this.kwh1+this.kwh2+this.kwh3;
        this.energyChages1=this.kwh1*this.rate;
        this.energyChages2=this.kwh2*this.rate*1.5;
        this.energyChages3=this.kwh3*this.rate*0.75;
        this.energyChargesT=this.energyChages1+this.energyChages2+this.energyChages3;
        this.md=Math.max(this.rmd1,this.rmd2,this.rmd3);
        this.bmd=Math.max(this.md,(Math.round((this.cd*.75)+.49)));
        this.fixedCharge=this.bmd*200;


    }

        this.pf=parseFloat(((this.kwh1+this.kwh2+this.kwh3)/this.kvah).toFixed(2));

        if (this.pf>1) {
          this.presentAlert();
          return;}

        if (this.pf>.95 && this.pf<=1) {
          this.pfinc=((this.pf*100)-95)*(0.005*this.energyChargesT);


        } else {if (this.pf>=.90 && this.pf<=.95) {
                  this.pfpen=(95-(this.pf*100))*(.005*this.energyChargesT);

        } else {
          if (this.pf<.9) {
                  this.pfpen=((90-(this.pf*100))*(.01*this.energyChargesT))+(.005*this.energyChargesT*5);

          } else {


          }


        }

        }
        if (this.rmd1>this.cd){
          this.ed1=this.rmd1-this.cd}
         else { this.ed1=0;

        }
        if (this.rmd2>this.cd) {
          this.ed2=this.rmd2-this.cd;

        } else {this.ed2=0

        }
        if (this.rmd3>this.cd*1.3) {
          this.ed3=this.rmd3-this.cd;

        } else {this.ed3=0;

        }
        this.ed=Math.max(this.ed1,this.ed2,this.ed3)
        if (this.selected_tariff==='LT-IVA'){
          this.fcExcess=this.ed*0.5*200;

        }
        else{
          this.fcExcess=this.ed*0.5*200;

        }
        this.fixedChargeT=this.fixedCharge+this.fcExcess;

        if (this.kvarhld>this.kvarhlg){ this.pfpen=0}

      ///Fule surcharge
      this.fuelSurchargefn();


       ///total calculations
       this.pfpi=this.pfinc+this.pfpen;

       this.calculateTotal()



    const modal=await this.modalController.create({
      component:TodmodalPage,

      componentProps: {
        "paramec1": parseFloat((this.energyChages1).toFixed(2)),
        "paramec2": parseFloat((this.energyChages2).toFixed(2)),
        "paramec3": parseFloat((this.energyChages3).toFixed(2)),
        "paramfc":parseFloat((this.fixedCharge).toFixed(2)),
        "paramfcexcess":parseFloat((this.fcExcess).toFixed(2)),
        "paramfctotal":parseFloat((this.fixedChargeT).toFixed(2)),
        "paramEc":parseFloat ((this.energyChargesT).toFixed(2)),
        "parampfinc":parseFloat ((this.pfinc).toFixed(2)),
        "parampfpen":parseFloat ((this.pfpen).toFixed(2)),


        "paramDuty":parseFloat((this.duty).toFixed(2)),
        "paramMeterrent":this.meterRent,
        "paramMtrFloodcess":parseFloat((this.floodcessMr).toFixed(2)),
        "paramMetercgst":this.cgstMr,
        "paramMetersgst":parseFloat((this.sgstMr).toFixed(2)),
        "paramGrandTotal":this.grandTotal,

        "paramUnits1":this.kwh1,
        "paramUnits2":this.kwh2,
        "paramUnits3":this.kwh3,
        "paramRmd1":this.rmd1,
        "paramRmd2":this.rmd2,
        "paramRmd3":this.rmd3,
        "paramCd":this.cd,
        "paramCl":this.cl,
        "paramtariffDesc":this.selected_tariff,
        "paramPf":this.pf,
        "paramSurcharge":parseFloat((this.surchargeonEnergy).toFixed(2)),
        "paramkvahCum":this.kvah


      }



    });


    return await modal.present();



  }

  ngOnInit() {
  }

}
