import { Component, Input } from '@angular/core'; 
import { ByProductService } from '../buy-product-service';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    // providers: [ByProductService]
})

export class CardComponent {
    @Input() productInfo;
    constructor(private buyProductService: ByProductService){

    }
    onaddProduct(name: string,price: string) {
        this.buyProductService.addProduct(name,price);
    }

    counter(n: number) {
        return new Array(n);
    }
}