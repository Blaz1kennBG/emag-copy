import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from '../_interfaces/product.interface';
const endpoints = {
  products: {
    all: 'https://dummyjson.com/products',
  },
};

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<ProductResponse>(endpoints.products.all);
  }
  getById(id: string) {
    return this.http.get<Product>(endpoints.products.all + `/${id}`);
  }
}
