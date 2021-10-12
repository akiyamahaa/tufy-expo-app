export interface ICategories {
  id?: number;
  name: string;
}

export interface ICategoryWithCount extends ICategories {
  count: number;
}

export interface IGetAllCategories {
  page?: number;
}
