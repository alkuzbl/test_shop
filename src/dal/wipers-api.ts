import { instance } from 'dal/instance';
import { WiperType } from 'store/reducers/types';

export const wipersApi = {
  getWipers: () => instance.get<{ wipers: WiperType[] }>('/wipers'),
  setImage: (data: any) => instance.post('/image', data),
};
