import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustListComponent } from './cust-list/cust-list.component';
import {CustomerService} from './Service/customer-service.service';
import { CustFormComponent } from './cust-form/cust-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductsComponent } from './products/products.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CategoryComponent } from './category/category.component';
import {ProductService} from "./Service/product.service";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {OrderService} from "./Service/order.service";



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustListComponent,
    CustFormComponent,
    ProductsComponent,
    EditCustomerComponent,
    CategoryComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService,ProductService,CustomerService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
