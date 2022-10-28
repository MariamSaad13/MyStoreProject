import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any=[];
  public finalSum !: number;
  username : string='';
  cardnumber: string='';
  address: string='';
  flag: number=0;
  constructor(private cartService: CartService) { }
 
  ngOnInit(): void {
    
    this.cartService.getProducts().subscribe(
      res=>{
        this.products=res;
        this.finalSum=this.cartService. getTotalPrice();
       
      }
    )
  }
  
  removeItem(item: any){
   this.cartService.removeCartItem(item);
   window.prompt("Removed from cart!");
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
  emptyCartSuccess(username:string)
  {
    
    this.cartService.removeAllCart();
    window.prompt(`Thanks! ${username} This transaction is successful!`);}
  



}
