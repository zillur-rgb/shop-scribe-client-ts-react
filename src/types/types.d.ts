export interface IFoodItem {
  id: number;
  name: string;
  category: string;
  image?: string;
  description: string;
}

export interface IFoodHistory {
  id: number;
  name: string;
  date: Date;
  status: string;
  items: IItems[];
}

export interface IItems {
  name: string;
  pieces: string | number;
  category: string;
}

export interface ICart {
  id: number;
  name: string;
  date: Date;
  status: string;
  items: any[];
}

export interface IGroceryDetail {
  id: number | null;
  name: string | null;
  date: Date | null;
  status: string | null;
  items: IFoodItem[] | null;
}
