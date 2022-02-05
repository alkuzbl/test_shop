import { Nullable, StatusType } from 'types';

export type WiperType = {
  id: string;
  title: string;
  image: string;
  description: DescriptionElement[];
  buttonText: string;
  isAvailable: boolean;
  price: number;
};
export type DescriptionElement = {
  id: string;
  name: string;
  title: string | number;
};
export type ProductSliceType = {
  status: StatusType;
  error: Nullable<string>;
  data: WiperType[];
};
