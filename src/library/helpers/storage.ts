export const getLocalStorage = (name: string) => localStorage.getItem(name);
export const setLocalStorage = (name: string, value: any) =>
  localStorage.setItem(name, value);
