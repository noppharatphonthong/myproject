import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
import { Meter }from '../../models/meter';
import { Addmeter } from "../../models/addmeter";
import { Ipv4ServiceProvider } from '../ipv4-service/ipv4-service';

@Injectable()
export class AddmeterServiceProvider {

  constructor(public http: Http,public ipv4ServiceProvider:Ipv4ServiceProvider) {}
  public addmeter(savemeter:string,villageid:string,total_meter:string):  Observable<Addmeter> 
  {  
    let myHeader = new Headers();     
    myHeader.append('Content-Type', 'application/json'); 
    //กําหนด header  
    //ประกาศตวัแปร data เพื่อเก็บข้อมูลที่รบัมา  
    console.log(savemeter) ; 
    
    let ipv4 = this.ipv4ServiceProvider.getIpv4();
    console.log('ipv4 :',ipv4) ; 

    let datameter = { 'savemeter': savemeter,
                      'villageid':villageid,
                      'total_meter':total_meter}
                      console.log(datameter);
    //ใช method post() สําหรับสง data เพื่อไปบนัทึกขอมูล     
    return this.http.post('http://'+ipv4+'/backend/addmeter.php',datameter, { headers: myHeader })
    .map((res: Response) => 
    {
      let datameter = res;//รบั json จาก Backend แลว return ออกไปใหเพจ  
      console.log(datameter);       
      return datameter;
    }).catch(this.handleError);   
  }
  private handleError(error: any) { 
    return Observable.throw(error.json().errorMessage || 'Server เกิดข้อผดิพลาด');
  }
} 


