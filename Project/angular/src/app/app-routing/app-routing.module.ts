import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustListComponent} from "../cust-list/cust-list.component";
import {CustFormComponent} from "../cust-form/cust-form.component";
import {ProductsComponent} from "../products/products.component";
import {EditCustomerComponent} from "../edit-customer/edit-customer.component";
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";


const routes: Routes = [
  { path: 'customers', component: CustListComponent },
  { path: 'addcustomer', component: CustFormComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'edit-customer/:id', component:EditCustomerComponent },
  { path: 'cart/:id', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
