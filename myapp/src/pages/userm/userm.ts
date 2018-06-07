import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsermServiceProvider } from '../../providers/userm-service/userm-service';
import { Userm } from '../../models/userm';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


/**
 * Generated class for the UsermPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userm',
  templateUrl: 'userm.html',
})
export class UsermPage {

  public myDate ='2018';
  data:Userm;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    public usermServiceProvider:UsermServiceProvider
    ) {
      
  }
  

  public barChartOptions:any = {scaleShowVerticalLines: false, responsive: true};
  public barChartLabels:string[] = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [ {data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40], label: 'ค่าน้ำ'}];
  
  ionViewDidLoad() {
    this.myDatey();
  }

  myDatey():void {
    console.log('myDate',this.myDate);
   

    this.usermServiceProvider.getMeter('1','1','1',Number(this.myDate)).subscribe(
      (res: any) => {
           this.data = res.json();
           this.barChartData = [ {data:this.data[0].meter, label: 'ค่าน้ำ'}]
           console.log('data',this.data);
           console.log('data',this.data[0].meter);
      },
      error =>{
        console.log('error',error)
        let alert = this.alertCtrl.create({
          title:' การเชื่อมต่อ Server ผิดพลาด ',buttons: ['ตกลง']             
        });                   
        alert.present();      
      }); 
    }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  
}
