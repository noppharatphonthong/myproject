import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdminPage } from "../admin/admin";
import { UserPage } from "../user/user";
import { OfflinePage } from "../offline/offline";
import { CommonServiceProvider } from '../../providers/common-service/common-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  save;
  ss:any={count:0};
  constructor(public navCtrl: NavController,
              public commonServiceProvider:CommonServiceProvider) {

  }
  
  ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage');
      if(localStorage.getItem('setvalue')!=null){
        var setvalue = JSON.parse(localStorage.getItem('setvalue'));
        console.log('setvalue',setvalue.length.toString());
        this.ss.count = setvalue.length;
        
      }
      this.commonServiceProvider.updateStatus(this.ss);
    }
    
      nextadmin(){
        this.navCtrl.push(AdminPage)
      }
      nextuser(){
        this.navCtrl.push(UserPage)
      }
      nextoffline(){
          this.navCtrl.push(OfflinePage)
      }
}
