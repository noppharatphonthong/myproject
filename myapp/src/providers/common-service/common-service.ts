import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TabsPage } from '../../pages/tabs/tabs';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CommonServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CommonServiceProvider {
  ss;
  pp;
  checkTab2;
  constructor(public http: Http) {
    console.log('Hello CommonServiceProvider Provider');
  }
 updateStatus(test:any){
  this.ss=test;
 }

 updateAdminp(test:any){
  this.pp=test;
 }

 updateTabs(test:any){
  this.checkTab2=test;
  console.log('checkTab2 update',this.checkTab2.checkTab2);
 }

 refresh(){
  var setvalue = JSON.parse(localStorage.getItem('setvalue'));
  console.log('setvalue',setvalue.length);
  this.ss.count = setvalue.length;
  
 }

 refreshAdminp(){
  var adminp = JSON.parse(localStorage.getItem('adminp'));
  console.log('adminp',adminp.length);
  this.pp.count = adminp.length;
  
  
 }
 refreshTabs(){

  if(localStorage.getItem('loginAdmin')!=null||localStorage.getItem('loginUser')!=null){
    this.checkTab2.checkTab2=true;
    console.log('checkTab2 true',this.checkTab2.checkTab2);
  }else{
    this.checkTab2.checkTab2=false;
    console.log('checkTab2 false',this.checkTab2.checkTab2);

  }
  
  
 }
}
