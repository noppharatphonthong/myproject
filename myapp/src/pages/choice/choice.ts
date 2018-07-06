import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginadminPage } from "../loginadmin/loginadmin";
import { PaymentPage } from "../payment/payment";
import { AdminpPage } from "../adminp/adminp";
import { CommonServiceProvider } from '../../providers/common-service/common-service';
import { Adp } from '../../models/adp';
import { Subscription } from 'rxjs/Subscription';
import { AdminpServiceProvider } from '../../providers/adminp-service/adminp-service';

/**
 * Generated class for the ChoicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class ChoicePage {
  pp:any={count:0};
  adp:Adp[];
  sub:Subscription;
  photo : string;
  name : string;
  lastname : string;
  errorMessage:string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public commonServiceProvider:CommonServiceProvider,
              public adminpServiceProvider:AdminpServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoicePage');

    this.photo = this.navParams.get('photo');
    this.name = this.navParams.get('name');
    this.lastname = this.navParams.get('lastname');

    console.log('photo', this.photo);
    console.log('name',this.name);
    console.log('lastname',this.lastname);

    this.sub = this.adminpServiceProvider.getOrder().subscribe(        
      (res: any) => {
       this.adp= res;
       localStorage.setItem('adminp',JSON.stringify(this.adp));
       this.pp.count = this.adp.length;
     },       
      (error) => this.errorMessage = <any> error     
      );
        var adminp = JSON.parse(localStorage.getItem('adminp'));
        console.log('adminp',adminp.length);
        // this.pp.count = adminp.length;
   
      this.commonServiceProvider.updateAdminp(this.pp);
     }
  

  nextLoginadmin(){
    this.navCtrl.push(LoginadminPage)
  }
  nextPayment(){
    this.navCtrl.push(PaymentPage)
  }
  nextAdminp(){
    this.navCtrl.push(AdminpPage)
  }
}
