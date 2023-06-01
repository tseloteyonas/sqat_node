import {Module} from '@nestjs/common';


import { ProductsService } from './products.service';
// import {ControllersC}  ControllersController
import { ProductsController } from './controllers/products/products.controller';

@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
})

export class ProductsModule{}