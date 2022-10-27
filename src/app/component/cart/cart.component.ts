import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any=[];
  public finalSum !: number;
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
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
  emptyCartSuccess()
  {
    this.cartService.removeAllCart();
    window.prompt("Thanks! This transaction is successful!");
  }



}
