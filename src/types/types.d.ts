export interface IFoodItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

export interface IFoodHistory {
  id: number;
  name: string;
  date: Date;
  status: string;
  items: {
    name: string;
    pieces: string;
    category: string;
  }[];
}
