import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import { NotFound } from './pages/NotFoundPage';
import { FormsPage } from './pages/FormPage';
import { SearchResultPage } from './pages/SearchResultPage';

function App() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/forms">Forms</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
