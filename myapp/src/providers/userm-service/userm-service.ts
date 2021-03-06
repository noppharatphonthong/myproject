import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Ipv4ServiceProvider } from '../ipv4-service/ipv4-service';
import { Userm } from '../../models/userm';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UsermServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UsermServiceProvider {

  constructor(public http: Http,
    public ipv4ServiceProvider: Ipv4ServiceProvider) {}
  public getMeter(address:string,villageno:string,password:string,year:Number):  Observable<Userm> 
  {  
    let myHeader = new Headers();     
    myHeader.append('Content-Type', 'application/json'); 
    //กําหนด header  
    //ประกาศตวัแปร data เพื่อเก็บข้อมูลที่รบัมา  
    console.log(address,villageno,password,year) ;  
    let data = {'address': address,
                'villageno': villageno,
                'password': password,
                'year':year} 
                
                let ipv4 = this.ipv4ServiceProvider.getIpv4();
                console.log('ipv4 :',ipv4) ; 
    //ใช method post() สําหรับสง data เพื่อไปบนัทึกขอมูล     
    return this.http.post('http://'+ipv4+'/backend/userm.php',data, { headers: myHeader })
    .map((res: Response) => 
    {
      let data = res;//รบั json จาก Backend แลว return ออกไปใหเพจ  
      console.log(data);     
      return data;
    }).catch(this.handleError);   
  }
  private handleError(error: any) { 
    return Observable.throw(error.json().errorMessage || 'Server เกิดข้อผดิพลาด');
  }
} 
