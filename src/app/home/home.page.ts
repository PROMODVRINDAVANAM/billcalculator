// home.page.ts
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../modals/my-modal/my-modal.page';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
//import { AdmobFreeService } from '@ionic-native/admob-free';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage   {

  public onChange(event): void {
    const newVal = event.target.value;
    if (this.selected_tariff==='LT-I'){
      this.bplhidden=false;
      this.surhidden=false;
      this.clhidden=true;
      this.survaluehidden=true;
      this.surchRate=10;

      this.dayshidden=true;
      this.tariffDesc="LT-IA-Domestic";

    }
    if (this.selected_tariff==='LT-II'){
      this.dayshidden=true;
      this.bplhidden=false;
      this.surhidden=true;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT II Colonies";

    }
    if (this.selected_tariff==='LT-IIIA'){
      this.dayshidden=false;
      this.surhidden=false;
      this.clhidden=false;
      this.bplhidden=true;
      this.surchRate=10;

      this.tariffDesc="LT-III (A) Temporary Connections";
    }
    if (this.selected_tariff==='LT-IIIB'){
      this.dayshidden=false;
      this.surhidden=false;
      this.clhidden=false;
      this.bplhidden=true;
      this.surchRate=10;


      this.bplhidden=true;
      this.tariffDesc="LT-III (B) Temporary Extensions";
    }
    if (this.selected_tariff==='LT-IVA'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT IV (A) Industrial Category";
    }
    if (this.selected_tariff==='LT-IVB'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;


      this.tariffDesc="LT IV (B) Industrial Category";
    }
    if (this.selected_tariff==='LT-VA'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT V(A) Agriculture Category";
    }
    if (this.selected_tariff==='LT-VB'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT V(B) Agriculture Nursery Category";
    }

    if (this.selected_tariff==='LT-VIA'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT VI General (A) {church, temple etc}";
    }
    if (this.selected_tariff==='LT-VIB'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT VI(B)  Category( advocate office, guest house hostel etc";
    }
    if (this.selected_tariff==='LT-VIC'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;


      this.tariffDesc="LT VI(C)  Category( Airport,excise, bank, CD Office etc";
    }

    if (this.selected_tariff==='LT-VID'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=true;
      this.surchRate=10;


      this.tariffDesc="LT VI(D)  Category( Library,polio home etc)";
    }
    if (this.selected_tariff==='LT-VIE'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=true;
      this.surchRate=10;


      this.tariffDesc="LT VI(E)  Category(Prty Office, Gym, press club etc)";
    }

    if (this.selected_tariff==='LT-VIF'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;


      this.tariffDesc="LT VI(F)  Category(Comp.trng instt,cable tv etc)";
    }
    if (this.selected_tariff==='LT-VIG'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT VI(G)  Category(Private Hospital, lab etc)";
    }

    if (this.selected_tariff==='LT-VIIA'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT VII(A)  Category(Commercial)";
    }


    if (this.selected_tariff==='LT-VIIB'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT VII(B)  Category(Commercial, Hotel, shope)";
    }

    if (this.selected_tariff==='LT-VIIC'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;


      this.tariffDesc="LT VII(C)  Category(Commercial, Swimming club, theatre etc)";
    }

    if (this.selected_tariff==='LT-VIIIB'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=true;
      this.surchRate=10;


      this.tariffDesc="LT VIII(B)  Category(Metered Street Lights and Traffic Signal Lights";
    }

    if (this.selected_tariff==='LT-IX'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT-IX  Category(Display Lightings and Hordings)";
    }

    if (this.selected_tariff==='LT-X'){
      this.dayshidden=true;
      this.bplhidden=true;
      this.surhidden=false;
      this.clhidden=false;
      this.surchRate=10;

      this.tariffDesc="LT-IX  Category(Electric vehicle charging stations)";
    }

  }
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

  /**
   * bplChange
event   */
  public bplChange(event) {
    if (this.bplstate===true) {
      this.tariffDesc="LT-IA Domestic-BPL"
      this.clhidden=false;

    } else {
      this.clhidden=true;
      this.tariffDesc="LT-IA-Domestic";



    }


  }

  backButtonSubscription;

  dataReturned: any;
  kwh: any;
  selected_tariff:any;
  fixedCharge:number;
  fcSubsidy:number;
  energyChages:number;
  energySubsidy:number;
  ecwithSubsidy:number;
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
  billingFrequency:any;
  tariffDesc:any;
  fusur:boolean;
  bplhidden:boolean;
  dayshidden:boolean;
  noDays:number;
  surhidden:boolean;
  clhidden:boolean;
  survaluehidden:boolean;
  surchRate:number;
  clacMethod:string;




///back press exit app

  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
   // private admobFreeService: AdmobFreeService,
    private platform: Platform
  ) { this.noDays=0;
      this.selected_tariff='Select One';
      //this.kwh=0;
      this.billingFrequency='novalue'
      this.phaseValue='novalue'
      this.surchRate=10;
      this.survaluehidden=true;
    }
    showValue(){
      console.log(this.phaseValue);
    }


    ///exit app
    exitApp(){
      navigator['app'].exitApp();}
    ///exit app


  fsstate = false;
  bplstate=false;
  enabled = true;
ngOnInit(){
  //this.admobFreeService.BannerAd();

}
showInterstitial(){
  //this.admobFreeService.InterstitialAd();
}

showRewardVideo(){
  //this.admobFreeService.RewardVideoAd();
}

  ////back button to close the application
 // ngOnInit() { }
 // ngAfterViewInit() {
  //  this.backButtonSubscription = this.platform.backButton.subscribe(() => {
 //     navigator['app'].exitApp();
 //   });
 // }


 // ngOnDestroy() {
 //   this.backButtonSubscription.unsubscribe();
 // }

  //...........................................................

////WARNING POPUP
async ltsvenbAlert() {
  const alert = await this.alertController.create({
    header: 'Tariff Error Warning.....',
    subHeader: 'Wrong Tariff',
    message: 'Connected load above 1kw consumer  must be billed on LT-VIIA Tariff ',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

////WARNIONG POP

async ltfourAlert() {
  const alert = await this.alertController.create({
    header: 'Tariff Error Warning.....',
    subHeader: 'Wrong Tariff',
    message: 'LT-IV Tariff Connected load above 20 kw consumer must be billed on TOD Tariff ',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

async ltthreeAlert() {
  const alert = await this.alertController.create({
    header: 'No. of Dayas.....',
    subHeader: 'Wrong Days number',
    message: 'Number of Days is not valid',
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

async billfrAlert() {
  const alert = await this.alertController.create({
    header: 'Select Billing Frequency',
    subHeader: 'No Billing Frequency Seleted',
    message: 'Please Select a Valid Billing Frequency Monthly/Bi-Monthly before Proceed...',
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
    message: 'Please Select a Valid Phase 1ph/3ph/3ph-ct before Proceed...',
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

async loadAlert() {
  const alert = await this.alertController.create({
    header: 'Above 10 KW',
    subHeader: 'Phase error',
    message: 'Connected Load above 10 KW it mus be a Three Phase Connection',
    buttons: ['OK'],
  });

  await alert.present();
  let result = await alert.onDidDismiss();
  console.log(result);
}

  calculateTotal(){
       this.cgstMr= parseFloat((this.meterRent*0.09).toFixed(2));
       this.sgstMr=this.meterRent*0.09;
       this.floodcessMr=this.meterRent*0.01;
       this.ecwithSubsidy=this.energyChages+this.energySubsidy;
       this.duty=this.energyChages*0.1;
       this.grandTotal=parseFloat((-0.49+this.surchargeonEnergy+this.energyChages+this.energySubsidy+this.fixedCharge+this.fcSubsidy+this.duty+this.meterRent+this.cgstMr+this.sgstMr).toFixed(0));

  }

  monthlyBimonthly(){
    if (this.billingFrequency==='2m'){
      this.meterRent=this.meterRent*2;
      this.energyChages=this.energyChages*2;
      this.energySubsidy=this.energySubsidy*2;
      this.surchargeonEnergy=this.surchargeonEnergy*2;
      this.fixedCharge=this.fixedCharge*2;
      this.fcSubsidy=this.fcSubsidy*2;

     }

  }

  meterRentfn(){
      if (this.phaseValue==='1ph'){this.meterRent=6;}
      if (this.phaseValue==='3ph'){this.meterRent=15;}
      if (this.phaseValue==='3ct'){this.meterRent=30;}
  }

  fuelSurchargefn(){

    if (this.fsstate===true && this.mkwh>20) {
      this.surchargeonEnergy=this.mkwh*(this.surchRate*.01);

     } else {
       this.surchargeonEnergy=0;

     }


  }

  initialiseZero(){
    this.fixedCharge=0;
    this.energyChages=0;
    this.fcSubsidy=0;
    this.energySubsidy=0;
    this.ecwithSubsidy=0;
    this.duty=0;
    this.meterRent=0;
    this.floodcessMr=0;
    this.cgstMr=0;
    this.sgstMr=0;
    this.grandTotal=0;
    this.mkwh=0;
    this.fixedCharge=0;
    this.energyChages=0;
    this.fcSubsidy=0;
    this.energySubsidy=0;
    this.ecwithSubsidy=0;
    this.duty=0;
    this.meterRent=0;
    this.floodcessMr=0;
    this.cgstMr=0;
    this.sgstMr=0;
    this.grandTotal=0;
    this.mkwh=0;
    this.fcSubsidy=0
    this.clacMethod="";

  }


///opening modal page

  async openModal() {

    this.initialiseZero();

    if (this.billingFrequency==='novalue'){
      this.billfrAlert();
      return;}

    if (this.phaseValue==='novalue'){
      this.phaseAlert();
      return;}



    if (this.selected_tariff==='Select One'){
      this.selectAlert();
      return;

    }
    if (this.cl>=10 && this.phaseValue==='1ph'){
      this.loadAlert();
      return;
    }

    if (this.billingFrequency==='2m'){
      this.mkwh=this.kwh/2;

    } else {this.mkwh=this.kwh;

    }

    this.cl=Math.round(this.cl+0.49);

    switch (this.selected_tariff) {

      case 'LT-I':

        if (this.mkwh <= 50) {
          this.energyChages=this.mkwh*3.25
          if (this.phaseValue==='1ph'){this.fixedCharge = 40;}
          if (this.phaseValue==='3ph'){this.fixedCharge=100;}
          if (this.phaseValue==='3ct'){this.fixedCharge=100;}
          this.clacMethod=this.clacMethod+'Energy charge -Per Month for'+this.mkwh+' Units ='+this.mkwh+'X 3.25';

        } else {
            if (this.mkwh<=100) {
            if (this.phaseValue==='1ph'){this.fixedCharge = 65;}
            if (this.phaseValue==='3ph'){this.fixedCharge=140;}
            if (this.phaseValue==='3ct'){this.fixedCharge=140;}

            this.energyChages=(this.mkwh-50)*4.05+50*3.25;
            this.clacMethod=this.clacMethod+'Energy charge -Per Month for '+this.mkwh+' Units ='+50+'X'+3.25+'+'+(this.mkwh-50)+'X 4.05';


          } else {
            if (this.mkwh<=150){
              if (this.phaseValue==='1ph'){this.fixedCharge = 85;}
              if (this.phaseValue==='3ph'){this.fixedCharge=170;}
              if (this.phaseValue==='3ct'){this.fixedCharge=170;}

              this.energyChages=(this.mkwh-100)*5.10+50*3.25+ 50*4.05;

              this.clacMethod=this.clacMethod+'Energy charge -Per Month for '+this.mkwh+' Units ='+50+'X'+3.25+'+'+50+'X'+4.05+'+'+(this.mkwh-100)+'X 5.10';



            } else {
              if (this.mkwh<=200) {
                if (this.phaseValue==='1ph'){this.fixedCharge = 120;}
                if (this.phaseValue==='3ph'){this.fixedCharge=180;}
                if (this.phaseValue==='3ct'){this.fixedCharge=180;}

                this.energyChages=(this.mkwh-150)*6.95+50*3.25+ 50*4.05+50*5.10;

                this.clacMethod=this.clacMethod+'Energy charge -Per Month for'+this.mkwh+' Units ='+50+'X'+3.25+'+'+50+'X'+4.05+'+'+'50'+'X'+5.10+'+'+(this.mkwh-150)+'X 6.95';


              } else {
                if (this.mkwh<=250) {
                if (this.phaseValue==='1ph'){this.fixedCharge = 130;}
                if (this.phaseValue==='3ph'){this.fixedCharge=200;}
                if (this.phaseValue==='3ct'){this.fixedCharge=200;}

                this.energyChages=(this.mkwh-200)*8.2+50*3.25+ 50*4.05+50*5.10+50*6.95;
                this.clacMethod=this.clacMethod+'Energy charge -Per Month for'+this.mkwh+' Units ='+50+'X'+3.25+'+'+50+'X'+4.05+'+'+'50'+'X'+5.10+'+'+50+'X'+6.95+'+'+(this.mkwh-200)+'X 8.20';

                } else {
                  if (this.mkwh<=300) {

                    if (this.phaseValue==='1ph'){this.fixedCharge = 150;}
                    if (this.phaseValue==='3ph'){this.fixedCharge=205;}
                    if (this.phaseValue==='3ct'){this.fixedCharge=205;}

                    this.energyChages=(this.mkwh)*6.4;
                    this.clacMethod=this.clacMethod+'Energy charge -Per Month (Non Telescpic) for'+this.mkwh+' Units ='+this.mkwh+'X 6.40';


                  } else {
                    if (this.mkwh<=350) {
                      if (this.phaseValue==='1ph'){this.fixedCharge = 175;}
                      if (this.phaseValue==='3ph'){this.fixedCharge=210;}
                      if (this.phaseValue==='3ct'){this.fixedCharge=210;}

                      this.energyChages=(this.mkwh)*7.25;
                      this.clacMethod=this.clacMethod+'Energy charge -Per Month (Non Telescpic) for'+this.mkwh+' Units ='+this.mkwh+'X 7.25';



                    } else {
                      if (this.mkwh<=400) {
                        if (this.phaseValue==='1ph'){this.fixedCharge = 200;}
                        if (this.phaseValue==='3ph'){this.fixedCharge=210;}
                        if (this.phaseValue==='3ct'){this.fixedCharge=210;}

                        this.energyChages=(this.mkwh)*7.60;

                        this.clacMethod=this.clacMethod+'Energy charge  -Per Month (Non Telescpic) for'+this.mkwh+' Units ='+this.mkwh+'X 7.60';

                      } else {
                        if (this.mkwh<=500) {

                          if (this.phaseValue==='1ph'){this.fixedCharge = 230;}
                          if (this.phaseValue==='3ph'){this.fixedCharge=235;}
                          if (this.phaseValue==='3ct'){this.fixedCharge=235;}

                          this.energyChages=(this.mkwh)*7.90;
                          this.clacMethod=this.clacMethod+'Energy charge -Per Month (Non Telescpic) for'+this.mkwh+' Units ='+this.mkwh+'X 7.90';


                        } else {
                          if (this.mkwh>500){
                            if (this.phaseValue==='1ph'){this.fixedCharge = 260;}
                            if (this.phaseValue==='3ph'){this.fixedCharge=260;}
                            if (this.phaseValue==='3ct'){this.fixedCharge=260;}

                            this.energyChages=(this.mkwh)*8.80;
                            this.clacMethod=this.clacMethod+'Energy charge -Per Month (Non Telescpic) for'+this.mkwh+' Units ='+this.mkwh+'X 8.80';


                          }


                        }

                      }
                    }

                  }

                }
              }

            }
          }
        }

        ///meter rent
        this.meterRentfn();


        ///energy subsidy
        if (this.phaseValue==='1ph') {


        if (this.mkwh<=20) {
          this.energySubsidy=0;

          this.clacMethod=this.clacMethod+':: Energy Subsidy Per Month for'+this.mkwh+' Units =' +this.mkwh+'X'+0;

        } else {
          if (this.mkwh<=26) {
            this.energySubsidy= (this.mkwh-20)*-1.5;
            this.clacMethod=this.clacMethod+'::  Energy Subsidy Per Month for'+this.mkwh+' Units =' +20+'X'+0+'+'+ (this.mkwh-20)+'X'+1.50;


          } else {
            if (this.mkwh<=27) {
              this.energySubsidy=-9.45;
              this.clacMethod=this.clacMethod+':: Energy Subsidy Per Month for'+this.mkwh+' Units =' +20+'X'+0+'+'+ 6 +'X'+1.50+'+'+0.45;


            } else {
              if (this.mkwh<=40) {

                this.energySubsidy=-9.45+(this.mkwh-27)*-0.35;
                this.clacMethod=this.clacMethod+':: Energy Subsidy Per Month for'+this.mkwh+' Units =' + 20+'X'+0+'+'+6+'X'+1.50+'+'+0.45+'+'+(this.mkwh-27)+'X'+0.35;


              } else {
                if (this.mkwh<=120) {
                  this.energySubsidy=-14+(this.mkwh-40)*-0.5;
                  this.clacMethod=this.clacMethod+ ':: Energy Subsidy Per Month for'+this.mkwh+' Units =' + 20+'X'+0+'+'+6+'X'+1.50+'+'+0.45+'+'+13+'X'+0.35+'+'+(this.mkwh-40)+'X'+0.5;


                } else {
                  this.energySubsidy=0;
                  this.clacMethod=this.clacMethod+  "::  No subsidy on Energy charge for monthly consumption above 120 Units";

                }

              }

            }
          }

        }
      }
        ///fcsubsidy
        if (this.mkwh>120){
          this.fcSubsidy=0;
          } else {
            this.fcSubsidy=-20;
            if (this.phaseValue==='3ph' || this.phaseValue==='3ct') {
              this.fcSubsidy=0;

            } else {
            }

        }
        //3phase ec subsidy

        if (this.phaseValue==='3ph' || this.phaseValue==='3ct') {
          if (this.mkwh<=60) {
            this.energySubsidy=0;
            this.clacMethod=this.clacMethod + " :: Energy Subsidy Per Month is zero up to 60 units";

          } else {
            if (this.mkwh<=61) {
              this.energySubsidy=-0.4;
              this.clacMethod=this.clacMethod + " :: Energy Subsidy Per Month is " + 0.4 ;


            } else {
              if (this.mkwh<=73) {
                this.energySubsidy=((this.mkwh-61)*-2.4)-0.4;
                this.clacMethod=this.clacMethod + " :: Energy Subsidy Per Month is  "+0.40+'+'+(this.mkwh-61)+'X'+2.40;



              } else {
                if (this.mkwh<=74) {
                  this.energySubsidy=-31;
                  this.clacMethod=this.clacMethod + "::  Energy Subsidy Per Month is  "+31;


                } else {
                  if (this.mkwh<=120){
                    this.energySubsidy=-31+(this.mkwh-74)*-0.5;
                    this.clacMethod=this.clacMethod + " :: Energy Subsidy-Per Month is  "+31+'+'+(this.mkwh-74)+'X'+0.5;

                  }

                }

              }

            }

          }

          } else {

       }
//       if (this.mkwh<=0){this.fcSubsidy=0}



      ///bpl category

       if (this.bplstate===true){
         if (this.mkwh<=20 && this.cl<=1000) {
           this.energyChages=this.mkwh*1.5;
           this.energySubsidy=0;
           this.fixedCharge=0;
           this.fcSubsidy=0;


         } else {
           if (this.mkwh<=26 && this.cl<=1000) {
             this.energyChages=this.mkwh*1.5;
             this.energySubsidy=((this.mkwh)-20)*(-1.5);
             this.fixedCharge=0;
             this.fcSubsidy=0;


           } else {
             if (this.mkwh===27 && this.cl<=1000) {
               this.energyChages=this.mkwh*1.5;
               this.energySubsidy=-9.45;
               this.fixedCharge=0;
               this.fcSubsidy=0;


             } else {
               if (this.mkwh<=40 && this.cl<=1000){
                 this.energyChages=this.mkwh*1.5;
                 this.energySubsidy=-9.45+(this.mkwh-27)*-0.35;
                 this.fixedCharge=0;
                 this.fcSubsidy=0;


               }

             }

           }
         }

       }

      ///fuel surcharge
      this.fuelSurchargefn();


      ///monthly bimonthly

      this.monthlyBimonthly()


       ///total calculations

       this.calculateTotal()


        break;

        case 'LT-II':

            //// fixed charge
              if (this.phaseValue==='1ph') {
                this.fixedCharge=50;

              }
              if(this.phaseValue==='3ph'){
                this.fixedCharge=100;

              }
              ///meter rent
              this.meterRentfn();

              this.surchargeonEnergy=0;
              this.fcSubsidy=0;
              this.energySubsidy=0


              ///monthly bimonthly


              this.monthlyBimonthly()

              ///total calculations

              this.calculateTotal()


        break;

        case 'LT-IIIA':

              if (this.noDays<=0){
                this.ltthreeAlert();
                return;
              }

              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }

              //// fixed charge
              this.fixedCharge=this.cl*150*this.noDays;
              this.energyChages=this.kwh*15;

              if (this.energyChages >=this.fixedCharge){this.fixedCharge=0}

              if (this.energyChages<= this.fixedCharge){
                this.energyChages=this.fixedCharge
                this.fixedCharge=0;}

              ///meter rent

              if (this.phaseValue==='1ph'){ this.meterRent= (6/30)*this.noDays}
              if (this.phaseValue==='3ph'){ this.meterRent=(15/30)*this.noDays}
              if (this.phaseValue==='3ct'){ this.meterRent=(30/30)*this.noDays}

              ///monthly bimonthly

              this.fcSubsidy=0;
              this.energySubsidy=0

              ///fuel surcharge
              this.fuelSurchargefn();



              ///total calculations

              this.calculateTotal()

        break;


        case 'LT-IIIB':

              //// fixed charge
              if (this.noDays<=0){
                this.ltthreeAlert();
                return;
              }
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              this.fixedCharge=this.cl*65*this.noDays;
              this.energyChages=0;

              ///meter rent

              this.meterRentfn();

              ///fuel surcharge

              this.fuelSurchargefn();



              this.fcSubsidy=0;
              this.energySubsidy=0

              ///monthly bimonthly
              this.monthlyBimonthly();


              ///total calculations

              this.calculateTotal()

        break;

        case 'LT-IVA':

          if (this.cl>=10 && this.phaseValue==='1ph'){
            this.loadAlert();
            return;
          }


          //// fixed charge
          if(this.cl<=10) {
            this.fixedCharge=140
            this.energyChages=this.mkwh*5.80
          }
          if (this.cl>10 && this.cl<20){
            this.fixedCharge=this.cl*85;
            this.energyChages=this.mkwh*5.80;

          }
          if (this.cl>=20){
            this.ltfourAlert();
            return;
          }
          if (this.cl>=20){
            this.fixedCharge=this.cl*200;
            this.energyChages=this.mkwh*5.85;

          }

          ///meter rent
          this.meterRentfn();

          ////surcharge

          this.fuelSurchargefn();


          ///monthly bimonthly
          this.monthlyBimonthly();


          this.fcSubsidy=0;
          this.energySubsidy=0


          ///total calculations

          this.calculateTotal()

        break;


        case 'LT-IVB':
          if (this.cl>=10 && this.phaseValue==='1ph'){
            this.loadAlert();
            return;
          }

          //// fixed charge
          if(this.cl<=10) {
            this.fixedCharge=165
            this.energyChages=this.mkwh*6.50;
          }
          if (this.cl>10 && this.cl<20){
            this.fixedCharge=this.cl*120;
            this.energyChages=this.mkwh*6.50;

          }
          if (this.cl>=20){
            this.ltfourAlert();
            return;
          }
          if (this.cl>=20){
            this.fixedCharge=this.cl*200;
            this.energyChages=this.mkwh*6.60;

          }

          ///meter rent
          this.meterRentfn();

          ////surcharge

          this.fuelSurchargefn();


          ///monthly bimonthly
          this.monthlyBimonthly();


          this.fcSubsidy=0;
          this.energySubsidy=0


          ///total calculations

          this.calculateTotal()

          break;


          case 'LT-VA':
            if (this.cl>=10 && this.phaseValue==='1ph'){
              this.loadAlert();
              return;
            }

            //// fixed charge
            this.fixedCharge=this.cl*20;
            this.energyChages=this.mkwh*2.30;

            ///meter rent
            this.meterRentfn();

            ////surcharge

            this.fuelSurchargefn();


            ///monthly bimonthly
            this.monthlyBimonthly();


            this.fcSubsidy=0;
            this.energySubsidy=this.mkwh*-.85;


            ///total calculations

            this.calculateTotal()

            break;


            case 'LT-VB':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge
              this.fixedCharge=this.cl*20;
              this.energyChages=this.mkwh*3.40;

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-VIA':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }

              //// fixed charge
              this.fixedCharge=this.cl*80;

              ///energy charges

              if (this.mkwh<=500){ this.energyChages=this.mkwh*5.80}
              if (this.mkwh>500){ this.energyChages=this.mkwh*6.65};

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-VIB':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge
              this.fixedCharge=this.cl*105;

              ///energy charges

              if (this.mkwh<=500){ this.energyChages=this.mkwh*6.50}
              if (this.mkwh>500){ this.energyChages=this.mkwh*7.15};

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;
            case 'LT-VIC':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge
              this.fixedCharge=this.cl*190;

              ///energy charges

              if (this.mkwh<=500){ this.energyChages=this.mkwh*7.15}
              if (this.mkwh>500){ this.energyChages=this.mkwh*8.65};

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-VID':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge
              this.fixedCharge=35;

              ///energy charges

              this.energyChages=this.mkwh*2.10;

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();

              ///monthly bimonthly
              this.monthlyBimonthly();

              this.fcSubsidy=0;
              this.energySubsidy=0

              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-VIE':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge
              if (this.phaseValue==='1ph'){this.fixedCharge=50}
              if (this.phaseValue==='3ph' || this.phaseValue==='3ct'){ this.fixedCharge=120}

              ///energy charges

              if (this.mkwh<=50) {
                this.energyChages=this.mkwh*3.70;

              } else {if (this.mkwh<=100) {
                this.energyChages=this.mkwh*4.70;

              } else {if (this.mkwh<=200) {
                this.energyChages=this.mkwh*5.40;

              } else {
                this.energyChages=this.mkwh*7.10;

              }

              }

              }
              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-VIF':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }

              //// fixed charge
              if (this.phaseValue==='1ph'){this.fixedCharge=90*this.cl}
              if (this.phaseValue==='3ph' || this.phaseValue==='3ct'){ this.fixedCharge=180*this.cl}

              ///energy charges

              if (this.mkwh<=100) {
                this.energyChages=this.mkwh*6;

              } else {if (this.mkwh<=200) {
                this.energyChages=this.mkwh*6.8;

              } else {if (this.mkwh<=300) {
                this.energyChages=this.mkwh*7.5;

              } else {if (this.mkwh<=500) {
                this.energyChages=this.mkwh*8.15;

              } else {
                this.energyChages=this.mkwh*9.25;


              }

              }

              }

              }
              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();

              ///monthly bimonthly
              this.monthlyBimonthly();

              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-VIG':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge
              if (this.phaseValue==='1ph'){this.fixedCharge=80*this.cl}
              if (this.phaseValue==='3ph' || this.phaseValue==='3ct'){ this.fixedCharge=165*this.cl}

              ///energy charges

              if (this.mkwh<=500) {
                this.energyChages=this.mkwh*5.85;

              } else {if (this.mkwh<=1000) {
                this.energyChages=this.mkwh*6.6;

              } else {if (this.mkwh<=2000) {
                this.energyChages=this.mkwh*7.7;

              } else {this.energyChages=this.mkwh*8.60;

              }

              }

              }

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;


            case 'LT-VIIA':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge
              if (this.phaseValue==='1ph'){this.fixedCharge=90*this.cl}
              if (this.phaseValue==='3ph' || this.phaseValue==='3ct'){ this.fixedCharge=175*this.cl}

              ///energy charges

              if (this.mkwh<=100) {
                this.energyChages=this.mkwh*6.05;

              } else {if (this.mkwh<=200) {
                this.energyChages=this.mkwh*6.80;

              } else {if (this.mkwh<=300) {
                this.energyChages=this.mkwh*7.5;

              } else {if (this.mkwh<=500) {
                this.energyChages=this.mkwh*8.15;

              } else {this.energyChages=this.mkwh*9.4;


              }

              }

              }

              }

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-VIIB':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }

              ///above 1kw cl warning

              if (this.cl>1 ) {
                this.ltsvenbAlert();
                return;
              }


              //// fixed charge
              if (this.cl<1){
                this.fixedCharge=60;
              }
              else{
                this.fixedCharge=this.cl*70;

              }

              ///energy charges



              if (this.mkwh<=100) {
                this.energyChages=this.mkwh*5.3;

              } else {if (this.mkwh<=200) {
                this.energyChages=this.mkwh*6.1;

              } else {if (this.mkwh<=300) {
                this.energyChages=this.mkwh*6.70;

              } else {if (this.mkwh<=500) {
                this.energyChages=this.mkwh*8.1;

              } else {this.energyChages=this.mkwh*9.4;

              }


              }

              }

              }



              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-VIIC':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge

              this.fixedCharge=130*this.cl;
              ///energy charges

              if (this.mkwh<=1000) {
                this.energyChages=this.mkwh*6.3;

              } else {
                this.energyChages=this.mkwh*7.7;
              }


              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-VIIIB':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge

              this.fixedCharge=90;
              ///energy charges

              this.energyChages=this.mkwh*4.80;

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-IX':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }

              //// fixed charge
              if (this.cl<1){
                this.fixedCharge=700;

              }
              else{
                this.fixedCharge=700+(this.cl-1)*150;

              }

              ///energy charges

              this.energyChages=this.mkwh*12.5;

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;

            case 'LT-X':
              if (this.cl>=10 && this.phaseValue==='1ph'){
                this.loadAlert();
                return;
              }


              //// fixed charge

              this.fixedCharge=this.cl*100;
              ///energy charges

              this.energyChages=this.mkwh*5.5;

              ///meter rent
              this.meterRentfn();

              ////surcharge

              this.fuelSurchargefn();


              ///monthly bimonthly
              this.monthlyBimonthly();


              this.fcSubsidy=0;
              this.energySubsidy=0


              ///total calculations

              this.calculateTotal()

            break;









          default:
          break;
    }

    const modal = await this.modalController.create({
      component: MyModalPage,
      componentProps: {
        "paramKwh": this.kwh,
        "paramTitle": "Test Title",
        "paramtariff": this.selected_tariff,
        "paramtariffDesc":this.tariffDesc,
        "paramfc":this.fixedCharge,
        "paramEc":parseFloat ((this.energyChages).toFixed(2)),
        "paramFcsub":this.fcSubsidy,
        "paramEcsub":parseFloat ((this.energySubsidy).toFixed(2)),
        "paramEcwithsub":parseFloat((this.ecwithSubsidy).toFixed(2)),
        "paramDuty":parseFloat((this.duty).toFixed(2)),
        "paramMeterrent":this.meterRent,
//        "paramMtrFloodcess":parseFloat((this.floodcessMr).toFixed(2)),
        "paramMetercgst":this.cgstMr,
        "paramMetersgst":parseFloat((this.sgstMr).toFixed(2)),
        "paramGrandTotal":this.grandTotal,
        "paramfusur":parseFloat((this.surchargeonEnergy).toFixed(2)),
        "paramCl":this.cl,
        "paramcalcMethod":this.clacMethod


      }


    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);


      }
    });

    return await modal.present();
  }

}
