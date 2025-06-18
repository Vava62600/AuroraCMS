import create from "zustand";

interface AuthState {
  user: null | { id: string; username: string; roles: string[] };
  token: string | null;
  setUser: (user: AuthState["user"]) => void;
  setToken: (token: string | null) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;
export const useAuth = () => {
  const { user, token, setUser, setToken, logout } = useAuthStore();
  
  const isAuthenticated = () => {
    return !!token;
  };

  return {
    user,
    token,
    isAuthenticated,
    setUser,
    setToken,
    logout,
  };
};
export const useUser = () => {
  const { user } = useAuthStore();
  return user;
};
export const useToken = () => {
  const { token } = useAuthStore();
  return token;
};
export const useLogout = () => {
  const { logout } = useAuthStore();
  return logout;
};
export const useSetUser = () => {
  const { setUser } = useAuthStore();
  return setUser;
};
export const useSetToken = () => {
  const { setToken } = useAuthStore();
  return setToken;
};
export const useIsAuthenticated = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
};
export const useAuthActions = () => {
  const { setUser, setToken, logout } = useAuth();
  return { setUser, setToken, logout };
};
export const useAuthState = () => {
  const { user, token } = useAuth();
  return { user, token };
};
export const useAuthStoreActions = () => {
  const { setUser, setToken, logout } = useAuthStore();
  return { setUser, setToken, logout };
};
export const useAuthStoreState = () => {
  const { user, token } = useAuthStore();
  return { user, token };
};
