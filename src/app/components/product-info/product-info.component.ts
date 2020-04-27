import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from "@angular/router";
import { ProductListService } from '../product-list-service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  productInfo;
  constructor( private route: ActivatedRoute, private productService: ProductListService) { }

  ngOnInit(): void {
    let nameFromUrl = this.route.snapshot.params['productName'];
    this.productInfo = this.productService.getProductInfoFromName(nameFromUrl);
  }

  counter(n: number) {
    return new Array(n);
  }

}
