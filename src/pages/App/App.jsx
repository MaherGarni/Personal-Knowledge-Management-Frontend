import './App.css'
import { Route, Routes, Link, Navigate} from 'react-router';
import { useState } from 'react';
import AboutPage from '../AboutPage/AboutPage';
import CategoryIndexPage from '../CategoryIndexPage/CategoryIndexPage';
import CategoryDetailPage from '../CategoryDetailPage/CategoryDetailPage';
import Sidebar from '../../components/Sidebar/Sidebar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

function App() {
  const [user, setUser] = useState(null);
  

  return (
    <>
      <div className='Layout'>
        <aside>
          <Sidebar user={user} setUser={setUser} />
        </aside>
        <main>
          <Routes>
            {user ? <>
              <Route path="/*" element={<h2>In progress....</h2>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/categories" element={<CategoryIndexPage />} />
              <Route path="/categories/:id" element={<CategoryDetailPage />} />
            </> : <>
              <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/signup" element={<SignupPage user={user} setUser={setUser} />} />
              <Route path="/*" element={<Navigate to="/login" />} />
            </>
            }
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;