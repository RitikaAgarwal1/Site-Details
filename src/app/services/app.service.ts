import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = 'http://localhost:3000/domainList';

  constructor(private http: HttpClient) { }

  getSiteDetails(){
    return this.http.get(this.url);
  }

  postSiteDetails(body: any) {
    return this.http.post(this.url, body);
  }
}
