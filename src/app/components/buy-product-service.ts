import { LoggingService } from './logging-service';
import { Injectable } from '@angular/core';

@Injectable()
export class ByProductService {
    private boughtList = [];

    constructor(private loggingList: LoggingService){}
    
    getProductList() {
        let listToString = this.boughtList.map(row => {
            return "name:" + row.name + ", price: " + row.price;
        })
        return listToString.join(",");
    }

    addProduct(name: string,price: string) {
        this.boughtList.push({name:name,price:price});
        let list: string = this.getProductList();
        this.loggingList.logProductList(list);
    }
}