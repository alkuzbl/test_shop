export const loadDataStorage = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState) return JSON.parse(serializedState);
    return false;
  } catch {
    return false;
  }
};
