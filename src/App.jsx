import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [cart, setCart] = useState([]);

  const navigate = (path) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (course) => {
    setCart((prev) => {
      const exists = prev.find((c) => c.id === course.id);
      if (exists) return prev;
      return [...prev, course];
    });
  };

  if (currentPath === '/login') {
    return <LoginPage onNavigate={navigate} />;
  }

  if (currentPath === '/register') {
    return <RegisterPage onNavigate={navigate} />;
  }

  return (
    <HomePage
      onNavigate={navigate}
      cartCount={cart.length}
      onAddToCart={addToCart}
    />
  );
}
