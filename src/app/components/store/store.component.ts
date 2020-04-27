import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list-service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  productItems = [];
  constructor(private productService: ProductListService) { }

  ngOnInit(): void {
    this.productItems = this.productService.getProductList();
  }

}
