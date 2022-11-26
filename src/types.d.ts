export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ServiceToOrder {
  service: Service;
  amount: number;
}