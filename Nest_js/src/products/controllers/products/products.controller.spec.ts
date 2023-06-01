// import { Test, TestingModule } from '@nestjs/testing';
// import { ProductsController } from './products.controller';
// import { ProductsService } from '../../products.service';

// describe('ProductsController', () => {
//   let controller: ProductsController;
//   let service: ProductsService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [ProductsController],
//       providers: [ProductsService],
//     }).compile();

//     controller = module.get<ProductsController>(ProductsController);
//     service = module.get<ProductsService>(ProductsService);
//   });

//   describe('addProduct', () => {
//     it('should return the generated ID of the new product', async () => {
//       const title = 'Test Product';
//       const description = 'This is a test product';
//       const price = 9.99;
//       const mockGeneratedId =  Math.random().toString();
      

//       jest.spyOn(service, 'insertProduct').mockResolvedValueOnce(mockGeneratedId);

//       const result = await controller.addProduct(title, description, price);

//       expect(result).toEqual({ id: mockGeneratedId });
//     });
//   });

//   describe('getAllProducts', () => {
//     it('should return an array of products', async () => {
//       const mockProducts= [
//         { id: 'abc123', title: 'Product 1', description: 'This is product 1', price: 9.99 },
//         { id: 'def456', title: 'Product 2', description: 'This is product 2', price: 19.99 },
//       ];

//       jest.spyOn(service, 'getProducts').mockResolvedValueOnce(mockProducts);

//       const result = await controller.getAllProducts();

//       expect(result).toEqual(mockProducts);
//     });
//   });

//   describe('getProduct', () => {
//     it('should return a single product by ID', async () => {
//       const mockProduct = { id: 'abc123', title: 'Test Product', description: 'This is a test product', price: 9.99 };

//       jest.spyOn(service, 'getSingleProduct').mockResolvedValueOnce(mockProduct);

//       const result = await controller.getProduct(mockProduct.id);

//       expect(result).toEqual(mockProduct);
//     });
//   });

//   describe('updateProduct', () => {
//     it('should update an existing product by ID', async () => {
//       const mockProduct = { id: 'abc123', title: 'Test Product', description: 'This is a test product', price: 9.99 };
//       const updatedTitle = 'Updated Product';

//       jest.spyOn(service, 'updateProduct').mockResolvedValueOnce(null);

//       const result = await controller.updateProduct(mockProduct.id, updatedTitle, mockProduct.description, mockProduct.price);

//       expect(service.updateProduct).toHaveBeenCalledWith(mockProduct.id, updatedTitle, mockProduct.description, mockProduct.price);
//       expect(result).toBeNull();
//     });
//   });

//   describe('removeProduct', () => {
//     it('should remove an existing product by ID', async () => {
//       const mockProduct = { id: 'abc123', title: 'Test Product', description: 'This is a test product', price: 9.99 };

//       jest.spyOn(service, 'deleteProduct').mockResolvedValueOnce(null);

//       const result = await controller.removeProduct(mockProduct.id);

//       expect(service.deleteProduct).toHaveBeenCalledWith(mockProduct.id);
//       expect(result).toBeNull();
//     });
//   });
// });



import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from '../../products.service';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  describe('addProduct', () => {
    it('should add a product and return an id', () => {
      const result = { id: 'abc123' };
      jest.spyOn(service, 'insertProduct').mockImplementation(() => result.id);

      expect(controller.addProduct('Test Product', 'Test Description', 9.99)).toEqual(result);
    });
  });

  describe('getAllProducts', () => {
    it('should return an array of products', () => {
      const result = [{ id: 'abc123', title: 'Test Product', desc: 'Test Description', price: 9.99 }];
      jest.spyOn(service, 'getProducts').mockImplementation(() => result);

      expect(controller.getAllProducts()).toEqual(result);
    });
  });

  describe('getProduct', () => {
    it('should return a single product', () => {
      const result = { id: 'abc123', title: 'Test Product', desc: 'Test Description', price: 9.99 };
      jest.spyOn(service, 'getSingleProduct').mockImplementation(() => result);

      expect(controller.getProduct('abc123')).toEqual(result);
    });
  });

  describe('updateProduct', () => {
    it('should update a product and return null', () => {
      jest.spyOn(service, 'updateProduct').mockImplementation(() => null);

      expect(controller.updateProduct('abc123', 'New Title', 'New Description', 19.99)).toBeNull();
    });
  });

  describe('removeProduct', () => {
    it('should remove a product and return null', () => {
      jest.spyOn(service, 'deleteProduct').mockImplementation(() => null);

      expect(controller.removeProduct('abc123')).toBeNull();
    });
  });
});