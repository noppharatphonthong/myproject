import { Injectable } from '@angular/core';
import {Http , Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 
import { Adp } from "../../models/adp";
import { Ipv4ServiceProvider } from '../ipv4-service/ipv4-service';


@Injectable()
export class AdminpServiceProvider {

  constructor(public http: Http,
    public ipv4ServiceProvider: Ipv4ServiceProvider) {
    console.log('Hello AdminpServiceProvider Provider');
  }

  getOrder():Observable<Adp[]> {    
    
   
    let ipv4 = this.ipv4ServiceProvider.getIpv4();
    console.log('ipv4 :',ipv4) ;  
    return this.http.get('http:// '+ipv4+'/backend/loadadminp.php')
      .map((res:Response) => <Adp[]> res.json())     
      .catch(this.handleError); 

}
private handleError(error:any) {     
  return Observable.throw(error.json().errorMessage || 'เกิดข้อผิดพลาดจาก Server');   
}
}