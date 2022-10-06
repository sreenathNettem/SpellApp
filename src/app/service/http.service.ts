import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 

  url = environment.apiUrl;
  
  constructor(
    private http: HttpClient,
  ) { }

 
  getSpellsList() {
    return this.http.get<any>(`${this.url}${environment.getSpells}`);
  }
  getSpellDetailsBySpellId(spellId:string){
    return this.http.get<any>(`${this.url}${environment.getSpells}/acid-arrow`);

  }

  //otp sending
  


}


