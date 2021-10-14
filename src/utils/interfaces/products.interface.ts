export interface IProduct {
  id?: number;
  categories?: number;
  name: string;
  purchasePrice: number;
  price: number;
  image?: string;
}

export interface IProductWithQuantity extends IProduct {
  quantity: number;
}

export interface IGetAllProducts {
  page?: number;
  category?: number;
  name?: string;
}
