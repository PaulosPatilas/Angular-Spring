import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../Service/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../model/Product";
import {catchError} from "rxjs/operators";
import {forkJoin} from "rxjs/observable/forkJoin";



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  Product: Product[];
  private total: number = 0;
  @Input() ids: Array<number> = [];
  private i: number;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    let productRequests = [];
    alert(this.ids);
    if (this.ids.length == 0) {
      alert('null array');
    } else {
      alert('find products');
      for (let i = 0; i < this.ids.length; i++) {
         this.productService.getProd(this.ids).subscribe(respondeList => this.Product = respondeList);
      }
    }
  }

  order() {
    for (let i = 0; i < this.ids.length; i++) {
      this.productService.changeCapacity(this.ids[i])
    }
  }
}
