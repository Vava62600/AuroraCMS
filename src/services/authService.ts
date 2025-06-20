import axios from 'axios';
import type { User } from '../types/user';

const API_BASE = '/api/v1';

export async function loginAPI(email: string, password: string): Promise<User> {
  const res = await axios.post(`${API_BASE}/auth/login`, { email, password });
  return res.data.user;
}

export async function logoutAPI(): Promise<void> {
  await axios.post(`${API_BASE}/auth/logout`);
}

export async function getCurrentUser(): Promise<User> {
  const res = await axios.get(`${API_BASE}/auth/me`);
  return res.data.user;
}
