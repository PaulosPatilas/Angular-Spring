import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../Service/customer-service.service';

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.css']
})
export class CustFormComponent {

  cust:Customer;

  constructor(private route: ActivatedRoute, private router: Router, private custService: CustomerService) {
    this.cust = new Customer();
  }

  onSubmit(){
    this.custService.save(this.cust).subscribe(result => this.gotoCustList());
  }

  gotoCustList(){
    this.router.navigate(['/customers'])
  }

}
