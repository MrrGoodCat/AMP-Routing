import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    ngOnInit(): void {
        this.product = this.activatedRoute.snapshot.data['product'];
    }
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private activatedRoute: ActivatedRoute) { }


}
