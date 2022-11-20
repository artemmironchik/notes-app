import { useState, useCallback, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserContext } from '../components/userContext';

export default function Login() {
  const userContext = useUserContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const handleSetEmail = useCallback((e) => setEmail(e.target.value), []);

  const [password, setPassword] = useState('');
  const handleSetPassword = useCallback((e) => setPassword(e.target.value), []);

  const handleLogin = useCallback(() => {
    fetch(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length === 1) {
          userContext.setUser(users[0]);
        } else {
          alert('Bad');
        }
      });
  }, [email, password, userContext]);

  useEffect(() => {
    if (userContext.user?.email) {
      navigate('/');
    }
  }, [userContext.user, navigate]);

  return (
    <div className="min-h-screen px-10 py-8 m-0 flex flex-col">
      <div className="flex flex-col justify-center items-center flex-1 gap-6">
        <p className="text-4xl font-bold">Log in</p>
        <input
          className="bg-gray-200 py-3 pl-4 text-xl"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleSetEmail}
        />
        <input
          className="bg-gray-200 py-3 pl-4 text-xl"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleSetPassword}
        />
        <button
          onClick={handleLogin}
          className="bg-gray-200 py-3 px-16 text-2xl"
        >
          Log in
        </button>
        <div className="text-xl">
          Don't have an account ?{' '}
          <Link
            to="/register"
            className="text-blue-700 hover:underline cursor-pointer"
          >
            Register
          </Link>{' '}
          now !
        </div>
      </div>
      <footer className="border-t border-black min-w-full min-h-[41px]">
        <div className="flex justify-between mt-4">
          <p>
            Created by{' '}
            <a
              href="https://github.com/artemmironchik"
              className="text-blue-700 hover:underline cursor-pointer"
            >
              Artem Mironchik
            </a>
          </p>
          <p>2022</p>
        </div>
      </footer>
    </div>
  );
}
