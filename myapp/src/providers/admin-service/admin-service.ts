import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
import { Admin }from '../../models/admin';
import { Ipv4ServiceProvider } from '../ipv4-service/ipv4-service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Injectable()
export class AdminServiceProvider {

  constructor(public http: Http,
              public ipv4ServiceProvider: Ipv4ServiceProvider,
              private alertCtrl: AlertController) {}
  public login(username:string, password:string):  Observable<Admin> 
  {  
    let myHeader = new Headers();     
    myHeader.append('Content-Type', 'application/json'); 
    //กําหนด header  
    //ประกาศตวัแปร data เพื่อเก็บข้อมูลที่รบัมา  
    console.log(username,password) ; 

    let ipv4 = this.ipv4ServiceProvider.getIpv4();
    
    console.log('ipv4 :',ipv4) ; 
    // console.log("Ipv4 :");     
    let data = {'username': username,
                'password': password  }
    //ใช method post() สําหรับสง data เพื่อไปบนัทึกขอมูล     
    return this.http.post('http://'+ipv4+'/backend/checkadmin.php',data, { headers: myHeader })
    .map((res: Response) => 
    {
      let data = res;//รบั json จาก Backend แลว return ออกไปใหเพจ  
      console.log(data);       
      return data;
    }).catch(this.handleError);   
  }
  private handleError(error: any) { 
    console.log('Server เกิดข้อผดิพลาด');  
    return Observable.throw(error.json().errorMessage || 'Server เกิดข้อผดิพลาด');
  }

} 


