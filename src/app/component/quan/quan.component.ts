import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quan',
  templateUrl: './quan.component.html',
  styleUrls: ['./quan.component.css']
})
export class QuanComponent implements OnInit {
  @Input() quantityQ: number=1;
  constructor() { }

  ngOnInit(): void {
  }

}
