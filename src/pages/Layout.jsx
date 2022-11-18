import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useUserContext } from '../components/userContext';

const setActive = ({ isActive }) =>
  isActive ? 'text-black font-bold' : 'text-gray-500';

export default function Layout() {
  const user = useUserContext()
  const handleLogout = () => {
    user.setUser({ email: '' })
  }

  return (
    <div className="m-auto max-w-6xl px-10 min-h-screen flex flex-col py-8">
      <header className="flex justify-between text-xl">
        <p>Welcome, {user.user.email}</p>
        <nav className="flex gap-10">
          <NavLink to="/about" end className={setActive}>
            About
          </NavLink>
          <NavLink to="/notes" end className={setActive}>
            Notes
          </NavLink>
          <button onClick={handleLogout}>Log out</button>
        </nav>
      </header>
      <main className="pb-8 flex-1 flex">
        <Outlet></Outlet>
      </main>
      <footer className="border-t border-black">
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