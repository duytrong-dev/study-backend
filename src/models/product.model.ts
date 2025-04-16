export class Product {

    id?: number;
    name?: string;
    categoryId?: number;
    price?: number;

    constructor(id: number, name: string, categoryId: number, price: number) {
        if(id !== null) this.id = id;
        if(name !== null) this.name = name;
        if(categoryId !== null) this.categoryId = categoryId;
        if(price !== null) this.price = price;
    }
}