import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CartComponent } from './cart/cart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SumPipe } from './pipes/sum.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductInfoComponent,
    CartComponent,
    NavigationComponent,
    SumPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
