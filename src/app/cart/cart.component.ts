import { Component, OnInit,Inject } from '@angular/core';
import { Product } from '../Models/product.model';
import { CartService } from '../services/cart.service';
import { FormGroup,FormBuilder, Validators, FormControl} from '@angular/forms';
import { nameValidator } from './name.validator';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
public items: Product[]=[];
public checkoutForm: FormGroup;


  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
this.items = this.cartService.getItems();
this.checkoutForm = this.formBuilder.group({
  name:[ '', [Validators.required,nameValidator()] ],
  address:[ '', [Validators.required, Validators.pattern('[0-9]+[ a-zA-Z0-9]+')] ],
  email:[ '', [Validators.required, Validators.email] ]
});
 }

  ngOnInit(): void {}

public name(){
  return this.checkoutForm.get('name')
}

public address(){
  return this.checkoutForm.get('address')
}

public email(){
  return this.checkoutForm.get('email')
}

public submitForm (data){
console.log(data);
if(!this.checkoutForm.valid){
  window.alert('Not valid');
  return;
}
this.items= this.cartService.clearCart();
this.checkoutForm.reset();
}
// Poslati podtke serverskoj aplikaciji..

}
