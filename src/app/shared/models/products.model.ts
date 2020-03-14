export interface ProductDetails {
    productTitle: string;
    productWeight: string;
    productSize: string;
    productDescription: string;
    imgPath: string;
    productPrice: string;
    productId?: number;
}

export class Product {
    constructor(public product: ProductDetails) {
        this.product = product;

        if (!product.productId) {
            this.product.productId = this.randomId(1000, 1);
        }
    }

    private randomId(upperLimit: number, lowerLimit: number): number {
        return Math.floor(Math.random() * (upperLimit - lowerLimit) + lowerLimit);
    }
}
