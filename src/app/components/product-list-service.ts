// import { HttpClient } from '@angular/common/http';

export class ProductListService {

    // constructor(private http: HttpClient){}

    private productItems: {productName: string, url: string, star: number,price: "150", about: string}[]  = [
        {productName: "watch", url: "assets/1.jpg", star: 5,price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
        {productName: "shoose", url: "assets/2.jpg", star: 4,price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
        {productName: "car", url: "assets/3.jpg", star: 5,price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
        {productName: "cycle", url: "assets/4.jpg", star: 3,price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
        {productName: "phone", url: "assets/5.jpg", star: 5,price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
        {productName: "laptop", url: "assets/3.jpg", star: 4,price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
        {productName: "applephone", url: "assets/1.jpg", star: 5,price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
        {productName: "ball", url: "assets/2.jpg", star: 5,price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."},
        {productName: "book", url: "assets/4.jpg", star: 4,price: "150", about: "Made in China. This product is most popular one in the world. Enjoy our products."}
      ];

    getProductList() {
        // this.http.post("https://localhost:8081/","get").subscribe(res => {
        //     console.log(res);
        // })
        return this.productItems;
    }

    getProductInfoFromName(name: string) {
        for(let i = 0; i < this.productItems.length; i++) {
            if(this.productItems[i].productName === name) {
                return this.productItems[i];
            }
        }
    }
}