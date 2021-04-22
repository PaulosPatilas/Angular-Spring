import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Customer } from '../model/customer';
import { CustomerService } from '../Service/customer-service.service';
import {assertNumber} from "@angular/core/src/render3/assert";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {


  cust: Customer;
  id: number;

  constructor(private route:ActivatedRoute,private CustomerService: CustomerService, private router: Router) {
    this.cust = new Customer();}

  onSubmit(){
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.CustomerService.update(this.cust.email,this.cust.name,this.id).subscribe(result => this.gotoCustList());
  }

  gotoCustList(){
    this.router.navigate(['/customers'])
  }
}


