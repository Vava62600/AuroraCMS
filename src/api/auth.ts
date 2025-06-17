export const login = async (email: string, pass: string) => {
  return fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, pass }),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
};
export const logout = async () => {
  return fetch("/api/auth/logout", {
    method: "POST"
  }).then(res => res.json());
};
export const register = async (email: string, pass: string) => {
  return fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, pass }),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
};
export const getUser = async () => {
  return fetch("/api/auth/user").then(res => res.json());
};
export const updateUser = async (user: { email: string; pass?: string }) => {
  return fetch("/api/auth/user", {
    method: "PUT",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
};
