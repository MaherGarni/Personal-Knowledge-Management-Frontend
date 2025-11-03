import './App.css'
import { Route, Routes, Link } from 'react-router';
import AboutPage from '../AboutPage/AboutPage';
import CategoryIndexPage from '../CategoryIndexPage/CategoryIndexPage';
import CategoryDetailPage from '../CategoryDetailPage/CategoryDetailPage';
import Sidebar from '../../components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <div className='Layout'>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Routes>
            <Route path="/*" element={<h2>Home Page</h2>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/categories" element={<CategoryIndexPage />} />
            <Route path="/categories/:id" element={<CategoryDetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;