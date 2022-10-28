import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
public product:any=[];

  constructor(private productService:ProductServiceService) { }

  ngOnInit(): void {
    this.product=this.productService.getDetail();
  }

  

}
