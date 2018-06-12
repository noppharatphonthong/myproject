import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Datacheckmeter } from '../../models/datacheckmeter';
import { CheckMeterServiceProvider } from '../../providers/check-meter-service/check-meter-service';

/**
 * Generated class for the CheckmeterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkmeter',
  templateUrl: 'checkmeter.html',
})
export class CheckmeterPage {
data:any;
dataV=new Array(12);
lengthDataV=new Array(12);
village:any;
selectVN=0;
  constructor(  public navCtrl: NavController, 
                public navParams: NavParams,
                public checkMeterServiceProvider:CheckMeterServiceProvider,
                private loadingCtrl: LoadingController) {
                this.village=["1","2","3","4","5","6","7","8","9","10","11","12"];
             
               
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckmeterPage');
    console.log('selectVN',this.selectVN);
    
    let loader = this.loadingCtrl.create({
      content:'กำลังบันทึกข้อมูล'
  });
  loader.present();
    this.checkMeterServiceProvider.getOrder().subscribe(
      (res: any) => { this.data = res;
                      var i =1;
                      if(this.selectVN!=0&&this.selectVN!=null){
                        this.village=[String(this.selectVN)];
                        i = this.selectVN;
                      }else{
                        this.village=["1","2","3","4","5","6","7","8","9","10","11","12"];
                      }
                      this.village.forEach(element => {
                            var j =0;
                            this.dataV[i]=new Array();
                            this.data.forEach(element => {
                              var detalist= {"address":this.data[j].address,
                                              "village_no":this.data[j].village_no}; 
                              if(i==detalist.village_no){
                                this.dataV[i].push(detalist); 
                                this.lengthDataV[i]=this.dataV[i].length
                              }                       
                               j++;
                            });
                          i++;
                      });

                      console.log('dataV[i]',this.dataV[1].length);
                      console.log('dataV',this.dataV);
                      console.log('village',this.village.length);
                      console.log('lengthDataV',this.lengthDataV);
  });
  loader.dismiss();
  }
}

                   