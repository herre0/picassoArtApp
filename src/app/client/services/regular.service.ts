import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Painting } from '../models/painting';


const url = environment.path + '/regular';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RegularService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get(url + '/list');
  }

  getOne(id): Observable<any> {
    return this.http.get(url + '/painting/' + id);
  }

  getSettings(): Observable<any> {
    return this.http.get(url + '/settings');
  }


}
