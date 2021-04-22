import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  private custsUrl: string;
  private addcustUrl: string;
  private updatecust: string;

  constructor(private http: HttpClient) {
    this.custsUrl = 'http://localhost:8080/customers';
    this.addcustUrl = 'http://localhost:8080/addcustomer';
    this.updatecust = 'http://localhost:8080/updatecust'
  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.custsUrl);
  }

  public save(cust: Customer) {
    return this.http.post<Customer>(this.addcustUrl, cust);
  }

   delete(id: number): Observable<Customer>{
    return this.http.delete<Customer>(this.custsUrl + "/" + id);
  }

  public update(email: string , name: string , id:number){
    return  this.http.put<Customer>(this.updatecust + '/' + id  +'/' + name + '/' + email,id)
  }
}
