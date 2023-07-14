import { Component ,OnInit} from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { productsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products?: Product[];
  constructor(private productsService:productsService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onGetAllProducts(){
    this.productsService.getAllProducts().subscribe(data=>{
      this.products=data;
    })
  }
}
