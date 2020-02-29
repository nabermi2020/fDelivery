import { Injectable } from "@angular/core";
import { Product } from '../models/products.model';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products: Array<Product> = [
    new Product({ productTitle: 'Піца Емілія', productWeight: '550 g', productSize: '30 cm', productDescription: 'Шинка, моцарела, помідори, кукурудза, соус часниковий', imgPath: './../../assets/pizza1.jpg', productPrice: '175'}),
    new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza2.jpg', productPrice: '199'}),
    new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza3.jpg', productPrice: '199'}),
    new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza4.jpg', productPrice: '199'}),
    new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza5.jpg', productPrice: '199'}),
    new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza6.jpg', productPrice: '199'}),
    new Product({ productTitle: 'Чотири Сири Класична', productWeight: '550 g', productSize: '30 cm', productDescription: 'Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі', imgPath: './../../assets/pizza6.jpg', productPrice: '199'}),
  ];

  constructor() {}

  public getProducts(): Array<any> {
    return this.products;
  }
}
