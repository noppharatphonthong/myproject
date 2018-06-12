import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminServiceProvider } from "../../providers/admin-service/admin-service";
import { Admin } from '../../models/admin'; 
import { LoginadminPage } from "../loginadmin/loginadmin";
import { HomePage } from "../home/home";
import { ChoicePage } from "../choice/choice";
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
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  loginForm: FormGroup; //ชื่อฟอรม   
  username: FormControl;   
  password: FormControl;  
  data:Admin;
  checkTab2:any={checkTab2:true};
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private fb: FormBuilder,
              private adminServiceProvider: AdminServiceProvider,
              private alertCtrl: AlertController,
              private commonServiceProvider:CommonServiceProvider) {

                this.username = fb.control('',Validators.required);     
                this.password = fb.control('',Validators.required);  
                this.loginForm = fb.group({'username': this.username,'password': this.password});
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
    if(localStorage.getItem('loginAdmin')!=null){
      console.log('loginAdmin !null :',localStorage.getItem('loginAdmin'))
      var a = JSON.parse(localStorage.getItem('loginAdmin'));
      this.loginForm = this.fb.group({'username':a[0].username,'password':a[0].password});
      this.login();
    }
  }
  login():void {
    //console.log(this.myForm.value);     
    //รบัขอมูลตางๆมาจากฟอรม     
    let username = this.loginForm.controls['username'].value;
    let password = this.loginForm.controls['password'].value;
   

    //เรียกใช provider (AuthServiceProvider)     
   

      try{
        this.adminServiceProvider.login(username,password).subscribe(
          (res: any) => {
              this.data = res.json();
              console.log(this.data);
              if (this.data.status === 'ok') {            
                this.loginForm.reset(); 

                var global2 = [{username:username,password:password}];

                localStorage.setItem('loginAdmin',JSON.stringify(global2));
                console.log('localStorage.getItem ',localStorage);
                
                this.commonServiceProvider.refreshTabs();  
                this.navCtrl.setRoot(TabsPage);  
                this.navCtrl.push(ChoicePage);
                       
              }else  if(this.data.status == 'no') {  
                let alert = this.alertCtrl.create({
                  title: this.data.message,buttons: ['ตกลง']             
                });                   
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
      catch(Error)

          {
  
              alert(Error.message);
              console.log(' ไม่สามารถติดต่อกับ Server ได้ ');
              
  
          }
  }

  

  nextloginadminPage(){
    this.navCtrl.setRoot(LoginadminPage)
  }
}


