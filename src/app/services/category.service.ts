import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>('http://localhost:8080/category');

  }
}
