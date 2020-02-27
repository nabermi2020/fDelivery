import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private products: Array<any> = [
    {
      id: 1,
      productTitle: "Піца Емілія",
      productPrice: "175",
      productDescription:
        "Шинка, моцарела, помідори, кукурудза, соус часниковий",
      productWeightAndSize: "550 грам, 30см",
      productImgSrc: "./../../assets/pizza1.jpg"
    },
    {
      id: 2,
      productTitle: "Чотири Сири Класична",
      productPrice: "199",
      productDescription:
        " Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі",
      productWeightAndSize: "550 грам, 30см",
      productImgSrc: "./../../assets/pizza2.jpg"
    },
    {
      id: 2,
      productTitle: "Чотири Сири Класична",
      productPrice: "199",
      productDescription:
        " Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі",
      productWeightAndSize: "550 грам, 30см",
      productImgSrc: "./../../assets/pizza3.jpg"
    },
    {
      id: 2,
      productTitle: "Чотири Сири Класична",
      productPrice: "199",
      productDescription:
        " Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі",
      productWeightAndSize: "550 грам, 30см",
      productImgSrc: "./../../assets/pizza3.jpg"
    },
    {
      id: 2,
      productTitle: "Чотири Сири Класична",
      productPrice: "199",
      productDescription:
        " Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі",
      productWeightAndSize: "550 грам, 30см",
      productImgSrc: "./../../assets/pizza4.jpg"
    },
    {
      id: 2,
      productTitle: "Чотири Сири Класична",
      productPrice: "199",
      productDescription:
        " Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі",
      productWeightAndSize: "550 грам, 30см",
      productImgSrc: "./../../assets/pizza5.jpg"
    },
    {
      id: 2,
      productTitle: "Чотири Сири Класична",
      productPrice: "199",
      productDescription:
        " Моцарела, пармезан, сир чедер, сир дорблю, соус вершковий, білий сир Брі",
      productWeightAndSize: "550 грам, 30см",
      productImgSrc: "./../../assets/pizza6.jpg"
    }
  ];

  constructor() {}

  public getProducts(): Array<any> {
    return this.products;
  }
}
