export class ProductDTO {

    name?: string;
    categoryId?: number;
    price?: number;

    constructor(name: string, categoryId: number, price: number) {
        if(name !== null) this.name = name;
        if(categoryId !== null) this.categoryId = categoryId;
        if(price !== null) this.price = price;
    }
}