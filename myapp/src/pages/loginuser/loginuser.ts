import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserpPage } from "../userp/userp";
import { UsermPage } from "../userm/userm";
import { StatusPage } from "../status/status";

/**
 * Generated class for the LoginuserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginuser',
  templateUrl: 'loginuser.html',
})
export class LoginuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nextuserp(){
    this.navCtrl.push(UserpPage,{
      address:this.navParams.get('address'),
      villageno:this.navParams.get('villageno') ,
      password:this.navParams.get('password')
    })
  }
  nextuserm(){
    this.navCtrl.push(UsermPage,{
      address:this.navParams.get('address'),
      villageno:this.navParams.get('villageno') ,
      password:this.navParams.get('password')
    })
  }
  nextstatus(){
    this.navCtrl.push(StatusPage,{
      address:this.navParams.get('address'),
      villageno:this.navParams.get('villageno') ,
      password:this.navParams.get('password')
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginuserPage');
  }

}
