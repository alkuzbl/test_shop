import { CartDataType } from 'store/reducers/cart-slice';

export const saveDataStorage = (key: string, data: CartDataType) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(key, serializedState);
    return true;
  } catch {
    return false;
  }
};
