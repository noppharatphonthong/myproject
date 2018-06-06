import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';


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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  public barChartOptions:any = {scaleShowVerticalLines: false, responsive: true};
  public barChartLabels:string[] = ["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [ {data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40], label: 'ค่าน้ำ'}];
  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UsermPage');
  }

}
