import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";
import {Observable} from "rxjs";

@Injectable({providedIn:"root"})
export class productsService{
    constructor(private http:HttpClient){
    }

    getAllProducts():Observable<Product[]>{
        let host="http://localhost:3000";
        return this.http.get<Product[]>(host+"/products");
    }

    getSelectedProducts():Observable<Product[]>{
        let host="http/localhost:3000";
        return this.http.get<Product[]>(host+"/products?selectedOption=true");
    }
}