import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from "../model/Product";
import{ProductService} from "../Service/product.service";
import {Category} from "../model/Category";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../Service/order.service";
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products: Product[];
  Categories: Category[];
  public ids : Array<number> = [];
  public value:number = 0;
  public min:number = 1;
  public max:number = 100;
  @ViewChild('cartComponent') private cartComp: ShoppingCartComponent
  numeric: number;
  constructor(private OrderService: OrderService, private ProductService : ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.ProductService.findAllCateg().subscribe(data =>{
      this.Categories = data; });
    this.ProductService.findAllprods().subscribe(data =>{this.Products = data; });
  }


  categoryProducts(id: number) {
    this.ProductService.findByCategid(id).subscribe(data => {this.Products = data;});
  }

   goToProducts() {
    this.router.navigate(['/Products'])
  }

  addProdToCart(id: number):void {
    this.ids.push(id);
    alert(this.ids);
    this.cartComp.ngOnInit();
  }

  refresh(): void{
    this.cartComp.ngOnInit();
  }

  order() {

  }
}
