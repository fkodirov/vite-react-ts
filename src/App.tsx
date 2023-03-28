import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MainPage } from './pages/mainPage';
import { AboutPage } from './pages/abouPaget';
import { Notfound } from './pages/notFoundPage';
import { FormsPage } from './pages/formsPages';

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
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}
export default App;
