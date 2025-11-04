import './App.css'
import { Route, Routes, Link } from 'react-router';
import { useState } from 'react';
import AboutPage from '../AboutPage/AboutPage';
import CategoryIndexPage from '../CategoryIndexPage/CategoryIndexPage';
import CategoryDetailPage from '../CategoryDetailPage/CategoryDetailPage';
import Sidebar from '../../components/Sidebar/Sidebar';

function App() {
  // make sure useState is imported!
  const [user, setUser] = useState(1)


  return (
    <>
      <div className='Layout'>
        <aside>
          <Sidebar user={user} setUser={setUser} />
        </aside>
        <main>
          <Routes>
            {user ? <>
              <Route path="/*" element={<h2>Home Page</h2>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/categories" element={<CategoryIndexPage />} />
              <Route path="/categories/:id" element={<CategoryDetailPage />} />
            </> : <>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/signup" element={<SignupPage user={user} setUser={setUser} />} />
            </>
            }

          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;