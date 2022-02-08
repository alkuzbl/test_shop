import { instance } from 'dal/instance';

export const orderApi = {
  setOrder: (data: any) => instance.post('wipers/order', data),
};
