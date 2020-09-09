import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getResult(name, message){
    return this.http.get(`http://54.162.146.101/?name=${name}&$message=${message}`)
  }
}
