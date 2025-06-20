import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login, loading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await login(email, password);
    } catch {
      setError('Invalid email or password.');
    }
  };

  return (
    <main className="login-page container mx-auto max-w-md p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Login</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <label className="block mt-4 mb-2 text-gray-700 dark:text-gray-300">Password</label>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <button
          type="submit"
          className="btn-primary mt-6 w-full"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </main>
  );
};

export default Login;
