import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { User } from '../../models/user'; 
import { LoginuserPage } from "../loginuser/loginuser";
import { CommonServiceProvider } from '../../providers/common-service/common-service';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginadminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  loginForm: FormGroup; //ชื่อฟอรม   
  address: FormControl;
  villageno: FormControl;    
  password: FormControl;  
  data:User;
  checkTab2:any={checkTab2:true};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private fb: FormBuilder,
              private userServiceProvider: UserServiceProvider,
              private alertCtrl: AlertController,
              private commonServiceProvider:CommonServiceProvider) {

                this.address = fb.control('',Validators.required);     
                this.villageno = fb.control('',Validators.required);
                this.password = fb.control('',Validators.required);  
                this.loginForm = fb.group({'address': this.address,'villageno': this.villageno,'password': this.password});
                
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    if(localStorage.getItem('loginUser')!=null){
      console.log('loginAdmin !null :',localStorage.getItem('loginUser'))
      var a = JSON.parse(localStorage.getItem('loginUser'));
      this.loginForm = this.fb.group({'address':a[0].address,'villageno':a[0].villageno,'password':a[0].password});
      this.login();
     }
  }
  login():void {
    //console.log(this.myForm.value);     
    //รบัขอมูลตางๆมาจากฟอรม     
    let address = this.loginForm.controls['address'].value;
    let villageno = this.loginForm.controls['villageno'].value;
    let password = this.loginForm.controls['password'].value;
    
    //เรียกใช provider (AuthServiceProvider)     
    this.userServiceProvider.login(address,villageno,password).subscribe(
      (res: any) => {
           this.data = res.json();
           if (this.data.status === 'ok') {          
            this.loginForm.reset(); 
            //reset form 

            var global2 = [{address:address,
                            villageno:villageno,
                            password:password}];

            localStorage.setItem('loginUser',JSON.stringify(global2));
            console.log('localStorage.getItem ',localStorage);

           
            this.commonServiceProvider.refreshTabs();   
            this.navCtrl.setRoot(TabsPage);
            this.navCtrl.push(LoginuserPage,{
              address:address,
              villageno:villageno,
              password:password

            })   
          } else{ 
            //ถาสถานะเทากับ 'error' ใหทํางานและแสดงขอความในสวนนี้ 
            let alert = this.alertCtrl.create({
              title: this.data.message,buttons: ['ตกลง']             
            });          
            // console.log('signup not ok');             
            alert.present();          
          }       
        },
        error =>{
          console.log('error',error)
          let alert = this.alertCtrl.create({
            title:' การเชื่อมต่อ Server ผิดพลาด ',buttons: ['ตกลง']             
          });                   
          alert.present();      
        }); 
      }
  
}
