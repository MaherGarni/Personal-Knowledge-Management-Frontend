import './App.css'
import { Route, Routes, Link } from 'react-router';
import AboutPage from '../AboutPage/AboutPage';
import CategoryIndexPage from '../CategoryIndexPage/CategoryIndexPage';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<h2>Home Page</h2>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/categories" element={<CategoryIndexPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;