export interface ProductDetails {
    imgPath: string;
    productWeight: string;
    productSize: string;
    productDescription: string;
    productTitle: string;
    productPrice: string;
    productId?: number;
}

export class Product {
    constructor(private product: ProductDetails) {
        this.product = product;

        if (!product.productId) {
            this.product.productId = this.randomId(1000, 1);
        }
    }

    private randomId(upperLimit: number, lowerLimit: number): number {
        return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
    }
}