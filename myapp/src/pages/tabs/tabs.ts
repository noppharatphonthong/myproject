import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { CommonServiceProvider } from '../../providers/common-service/common-service';


/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1=HomePage;
  tab2: any ;
  checkTab2:any={checkTab2:false};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private commonServiceProvider:CommonServiceProvider) {
                
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad TabsPage');
    if(localStorage.getItem('loginAdmin')!=null||localStorage.getItem('loginUser')!=null){
      this.checkTab2.checkTab2=true;
    }else{
      this.checkTab2.checkTab2=false;
    }
    this.commonServiceProvider.updateTabs(this.checkTab2);
  }


  logOut(){
    console.log('Log Out');
    localStorage.removeItem('loginAdmin');
    localStorage.removeItem('loginUser');
    this.commonServiceProvider.refreshTabs();
    this.navCtrl.setRoot(TabsPage);
  }
}
