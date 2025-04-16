import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {

    products: Product[] = [
        {id: 1, name: 'Product 1', categoryId: 1, price: 100 },
        {id: 2, name: 'Product 2', categoryId: 1, price: 200 },
        new Product(3, 'Product 3', 1, 300),
        new Product(4, 'Product 4', 1, 400),
    ]

    getProducts(): Product[] {
        return this.products;
    }

    createProduct(): string {
        return 'Product created';
    }

    getProductById(id: number): Product {
        const product = this.products.find(product => product.id === Number(id));
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }

    updateProduct(id: string): string {
        return 'Product updated with id: ' + id;
    }

    deleteProduct(id: string): string {
        return 'Product deleted with id: ' + id;
    }
}