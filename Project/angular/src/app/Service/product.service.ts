import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/Product";
import {Category} from "../model/Category";
import {forkJoin} from "rxjs/observable/forkJoin";








@Injectable()
export class ProductService {

  private ProdUrl: string;
  private CategUrl: string;
  private Url: string;
  private products: Product;
  private GetUrl: string;
  private res: Observable<Product[]>;
  private response: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.ProdUrl = 'http://localhost:8080/products';
    this.CategUrl = 'http://localhost:8080/categories';
    this.GetUrl = 'http://localhost:8080/product';
    this.Url = 'http://localhost:8080/updproduct';
  }

  public findAllprods() {
    return this.http.get<Product[]>(this.ProdUrl);
  }

  public findAllCateg(): Observable<Category[]> {
    return this.http.get<Category[]>(this.CategUrl);
  }

  public findByCategid(categ: number) {
    return this.http.get<Product[]>(this.ProdUrl + '/' + categ);
  }

  public getProd(id: Array<number>): Observable<Product[]> {
    let response = [];
    let response1 ;
    for (let i = 0; i < id.length; i++) {
      response[i] = this.http.get<Product[]>(this.GetUrl + '/' + id[i]);
    }

    response1 = this.http.get<Product[]>(this.GetUrl + '/' + id[0]);

    return forkJoin(response);

  }

  changeCapacity(id: number) {
    this.http.put<Product[]>(this.Url + '/' + id,1);
  }
}
