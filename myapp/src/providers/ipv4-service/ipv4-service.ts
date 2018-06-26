import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
import { Ipv4 } from '../../models/ipv4';

@Injectable()
export class Ipv4ServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AdminpServiceProvider Provider');
  }
  getIpv4(){  
    let ip = '192.168.43.123';  
    return ip; 

}
} 


