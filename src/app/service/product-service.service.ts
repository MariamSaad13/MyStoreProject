import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // public productItem : any=[];
  // public productList=new BehaviorSubject<any>([]);
  public productInfo: any;
  constructor() { }
  addDetail(product: any){
   this.productInfo=product;
  }
  getDetail(){
    return this.productInfo;
   }
   
}
