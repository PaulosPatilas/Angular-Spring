import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/Category";

@Injectable()
export class CategoryService {

  private categUrl:string;

  constructor(private http: HttpClient) {
    this.categUrl = 'http://localhost:8080/categories';
  }

  findAll():Observable<Category[]> {
    return this.http.get<Category[]>(this.categUrl);
  }
}
