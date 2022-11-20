import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Rpassword, setRPassword] = useState('');

  const date = new Date(Date.now()).toISOString();

  const handleSetEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSetPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleSetRPassword = useCallback((e) => {
    setRPassword(e.target.value);
  }, []);

  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const PASS_REGEXP = /(?=.*[0-9])(?=.*[!@#$%^&*-_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*-_]{6,}/g;

  const handleRegister = () => {
    const user = {
      email: email,
      password: password,
      createdAt: date,
    }
    if(password === Rpassword && EMAIL_REGEXP.test(email) && PASS_REGEXP.test(password)) {
      fetch(`http://localhost:5000/users`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
      }).then(() => {
        navigate('/login')
      }).catch(() => {
        alert('incorrect')
      })
    } else {
      alert('incorrect data')
    }
  }

  return (
    <div className="min-h-screen px-10 py-8 m-0 flex flex-col">
      <div className="flex flex-col justify-center items-center flex-1 gap-6">
        <p className="text-4xl font-bold">Register</p>
        <input
          className="bg-gray-200 py-2 pl-4 text-xl"
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
        <input
          className="bg-gray-200 py-3 pl-4 text-xl"
          type="password"
          placeholder="Repeat password"
          value={Rpassword}
          onChange={handleSetRPassword}
        />
        <button onClick={handleRegister} className="bg-gray-200 py-3 px-16 text-2xl">Register</button>
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
  )
}