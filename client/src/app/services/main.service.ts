import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient
    ) { }

  getResult(name, message){
    return this.http.get(`api.php/?name=${name}&message=${message}`)
  }
}

// http://54.162.146.101/api.php?name=john&message=hello
