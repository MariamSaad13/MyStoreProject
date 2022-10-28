import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ProductServiceService } from 'src/app/service/product-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productList:any;
  quantity: number=1;
  public btn: boolean=false;


  printedOption: string='';

  options = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    
  ]
  
  constructor( private api: ApiService,private cartService: CartService,private productService:ProductServiceService) { }
  
  ngOnInit(): void {
    
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        a.selectedOption='1';
      });
    })
  }
  addtoCart(item:any,quan: number, event: MouseEvent){
    this.cartService.addtoCart(item);
    (event.target as HTMLButtonElement).disabled=true;
    window.prompt("Added to cart!");
  
  }
  productDetail(item: any){
    this.productService.addDetail(item);
  }
  setButton(btn:any){
    this.btn=btn;
  }
  stop(){
   this.btn=true;
  }

}
