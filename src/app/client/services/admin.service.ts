import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Painting } from '../models/painting';
import { Settings } from '../models/settings';
import { Category } from '../models/category';


const url = environment.path + '/admin';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  create(painting: Painting): Observable<any> {
    return this.http.post(url + '/create', painting, httpOptions);
  }

  edit(painting: Painting): Observable<any> {
    return this.http.put(url + '/edit', painting, httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(url + '/delete/' + id);
  }

  getList(): Observable<any> {
    return this.http.get(url + '/list');
  }

  getOne(id): Observable<any> {
    return this.http.get(url + '/painting/' + id);
  }

  getSettings(): Observable<any> {
    return this.http.get(url + '/settings');
  }

  updateSettings(settings: Settings): Observable<any> {
    return this.http.put(url + '/updateSettings', settings, httpOptions);
  }

  createCategory(category: Category): Observable<any> {
    return this.http.post(url + '/createCategory', category, httpOptions);
  }
  deleteCategory(id: number): Observable<any> {
    return this.http.delete(url + '/deleteCategory/' + id);
  }
  getCategoryList(): Observable<any> {
    return this.http.get(url + '/categories');
  }

  


 

}
