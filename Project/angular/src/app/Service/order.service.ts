import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../model/Order";
import {Product} from "../model/Product";

@Injectable()
export class OrderService {

  private OrderUrl: string;
  private ProdUrl: string;

  constructor(private http: HttpClient) {
    this.OrderUrl = 'http://localhost:8080/orders';
    this.ProdUrl = 'http://localhost:8080/addprod';
  }

  findOrder():Observable<Order[]>{
    return this.http.get<Order[]>(this.OrderUrl);
  }

}
