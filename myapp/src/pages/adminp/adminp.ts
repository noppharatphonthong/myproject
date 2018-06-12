import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Adp } from "../../models/adp";
import { AdminpServiceProvider } from "../../providers/adminp-service/adminp-service";
import { NextpServiceProvider } from "../../providers/nextp-service/nextp-service";
import { ID } from "../../models/id";
import { CommonServiceProvider } from '../../providers/common-service/common-service';
/*
 * Generated class for the Test1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminp',
  templateUrl: 'adminp.html',
})
export class AdminpPage {
  adp:Adp[];
  sub:Subscription;
  data:ID;
  errorMessage:string;
  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               public adminpServiceProvider: AdminpServiceProvider,
               public nextpServiceProvider: NextpServiceProvider,
               private loadingCtrl: LoadingController,
               private alertCtrl: AlertController,
               private commonServiceProvider:CommonServiceProvider) {
  }

  ionViewDidLoad() {
  	this.getOrder();
  
  }

    private getOrder() {         
       this.sub = this.adminpServiceProvider.getOrder().subscribe(        
           (res: any) => {
            this.adp= res;
            localStorage.setItem('adminp',JSON.stringify(this.adp));
            this.commonServiceProvider.refreshAdminp();
            console.log("data adp :", this.adp.length);
          },       
           (error) => this.errorMessage = <any> error     
           );
           
          }

    nextp(id:number):void {
     
    let loader = this.loadingCtrl.create({
      content:'กำลังบันทึกข้อมูล'
  });
  loader.present();
    //เรียกใช provider (AuthServiceProvider)     
    this.nextpServiceProvider.status(id).subscribe(
      res => {
                      this.data = res;
                      this.getOrder();
                      
                      let alert = this.alertCtrl.create({               
                        title: "แก้ไขปัญหา เรียบร้อย",buttons: ['ตกลง']             
                      });       
                      alert.present();
                      
                    },
                      error => {          
                          this.errorMessage = <any> error          
                          console.log(this.errorMessage);          
                          loader.dismiss(); 
                        
                            },        
                            () => {          
                                loader.dismiss();        
                            
                              
                    }); 
                          
        
   }
   ionViewWillLeave() {       
    this.sub.unsubscribe(); // unsubscribe ขอมูลที่มาจาก server   
}   

}
