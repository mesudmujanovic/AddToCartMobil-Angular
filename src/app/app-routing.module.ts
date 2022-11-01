import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '',component: ProductListComponent },
  {path:'checkout',component: CartComponent},
  {path:'products/:productId',component:ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
