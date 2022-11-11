import { TypeInterface } from './type.interface';

export interface ResponseInterface {
  data: DataInterface[];
  total: number;
}

export interface DataInterface {
  _id: string;
  type: TypeInterface;
  phone: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  company: string;
  amount: string;
  address: string;
}
