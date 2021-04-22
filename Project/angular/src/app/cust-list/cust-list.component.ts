import {Component, Input, OnInit} from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../Service/customer-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './cust-list.component.html',
  styleUrls: ['./cust-list.component.css']
})
export class CustListComponent implements OnInit {

  Customers: Customer[];
  Customer: Customer;
  Id:number;


  constructor(private CustomerService: CustomerService, private router: Router) {
  }

  ngOnInit() {
    this.CustomerService.findAll().subscribe(data => {
      this.Customers = data;
    });
  }

  deleteCustomer(Cust: Customer): void{
    this.CustomerService.delete(Cust.id).subscribe(data => this.Customers = this.Customers.filter(c => c !== Cust));
  }

  editCustomer(id: number): void{
    this.router.navigate(['edit-customer', id])
  }
}
