import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient
    ) { }

  getResult(name, message){
    return this.http.get(`api.php/?name=${name}&message=${message}`, {
      headers: new HttpHeaders({
        'Accept': 'text/html'
        // 'Content-Type': 'application/json
      })
    })
  }
}
