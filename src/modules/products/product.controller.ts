import { ResponseData } from 'src/global/globalClass';
import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { HttpMessage, HttpStatusCode } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDTO } from 'src/dto/product.dto';

@Controller('/products')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts(): ResponseData<Product[]> {
        try {
            const products = this.productService.getProducts();
            return new ResponseData<Product[]>(products, HttpStatusCode.OK, HttpMessage.OK);
        }catch (error) {
            return new ResponseData([], HttpStatusCode.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    @Post()
    createProduct(@Body() productDTO: ProductDTO): ResponseData<ProductDTO> {
        return new ResponseData<ProductDTO>(productDTO, HttpStatusCode.OK, HttpMessage.OK);
    }

    @Get('/:id')
    getProductById(@Param('id') id: number): ResponseData<Product> {
        try {
            const product = this.productService.getProductById(id);
            console.log(id);
            return new ResponseData<Product>(product, HttpStatusCode.OK, HttpMessage.OK);
        }catch (error) {
            return new ResponseData([], HttpStatusCode.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    @Put('/:id')
    updateProduct(@Param('id') id: string): string {
        return this.productService.updateProduct(id);
    }

    @Delete('/:id')
    deleteProduct(@Param('id') id: string): string {
        return this.productService.deleteProduct(id);
    }
}