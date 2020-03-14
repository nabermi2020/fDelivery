import { Injectable } from "@angular/core";
import {Product, ProductDetails} from '../models/products.model';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  private products = {
    // pizza: [
    //   new Product({ productTitle: 'Піца Емілія', productWeight: '550 g', productSize: '30 cm', productDescription: 'Шинка, моцарела, помідори, кукурудза, соус часниковий', imgPath: './../../assets/pizza1.jpg', productPrice: '175'}),
    //   new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza2.jpg', productPrice: '199'}),
    //   new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza3.jpg', productPrice: '199'}),
    //   new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza4.jpg', productPrice: '199'}),
    //   new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza5.jpg', productPrice: '199'}),
    //   new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza6.jpg', productPrice: '199'}),
    //   new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza6.jpg', productPrice: '199'}),
    // ]
  };

  constructor(private http: HttpClient) {}

  public saveProducts() {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    this.http.post<Array<Product>>(`${this.apiUrl}`, this.products, { headers });
  }

  public getProducts(): Observable<Array<ProductDetails>> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.get<Array<ProductDetails>>(`${this.apiUrl}/pizza`, { headers });
  }

  public getProductsByCategory(category: string): Observable<Array<ProductDetails>> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.get<Array<ProductDetails>>(`${this.apiUrl}/${category}`, { headers });
  }
}
