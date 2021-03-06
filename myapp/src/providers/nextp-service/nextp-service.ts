import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
import { ID } from "../../models/id";
import { Ipv4ServiceProvider } from '../ipv4-service/ipv4-service';

@Injectable()
export class NextpServiceProvider {

  constructor(public http: Http,
    public ipv4ServiceProvider: Ipv4ServiceProvider) {}
  public status(id:number):  Observable<ID> 
  {  
    let myHeader = new Headers();     
    myHeader.append('Content-Type', 'application/json'); 
    //กําหนด header  
    //ประกาศตวัแปร data เพื่อเก็บข้อมูลที่รบัมา  
    console.log(id) ;   
    
    let ipv4 = this.ipv4ServiceProvider.getIpv4();
    console.log('ipv4 :',ipv4) ; 
    let data = {'id': id}
                console.log(data);
    //ใช method post() สําหรับสง data เพื่อไปบนัทึกขอมูล     
    return this.http.post('http://'+ipv4+'/backend/nextp.php',data, { headers: myHeader })
    .map((res: Response) => 
    {
      let data = res.json();//รบั json จาก Backend แลว return ออกไปใหเพจ  
      console.log(data); 
            
      return data;
    }).catch(this.handleError);   
  }
  private handleError(error: any) { 
    return Observable.throw(error.json().errorMessage || 'Server เกิดข้อผดิพลาด');
  }
} 


