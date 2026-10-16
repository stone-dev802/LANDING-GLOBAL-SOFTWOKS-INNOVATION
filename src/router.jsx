import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext(null);

export function RouterProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash.replace('#/', '') || 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const page = window.location.hash.replace('#/', '') || 'home';
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page) => {
    window.location.hash = `#/${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className = '', onClick }) {
  const { navigate } = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    if (onClick) onClick();
  };
  return (
    <a href={`#/${to}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
