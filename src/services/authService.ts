export interface User {
  id: string;
  username: string;
  roles: string[];
  token: string;
}

export const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};

export const setToken = (token: string): void => {
  localStorage.setItem("authToken", token);
};

export const clearToken = (): void => {
  localStorage.removeItem("authToken");
};
export const isAuthenticated = (): boolean => {
  return getToken() !== null;
};