import './App.css'
import { Route, Routes, Link, Navigate } from 'react-router';
import { useState, useEffect } from 'react';
import AboutPage from '../AboutPage/AboutPage';
import CategoryIndexPage from '../CategoryIndexPage/CategoryIndexPage';
import CategoryDetailPage from '../CategoryDetailPage/CategoryDetailPage';
import Sidebar from '../../components/Sidebar/Sidebar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import { PanelLeft, Moon, Sun } from 'lucide-react';

import { getUser } from '../../utilities/user-api';

function App() {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const foundUser = await getUser();
      console.log(foundUser, 'line 21')
      setUser(foundUser)
      setLoading(false);
    }
    checkUser()
  }, [])

  if (loading) return null;

  return (
    <>
      <div className='Layout'>
        <aside>
          <Sidebar user={user} setUser={setUser} />
        </aside>
        <main>
          <div className='header'>
            {/* <button className='sidebar-toggle'>
              <PanelLeft size={16} />
            </button>
            <button className='theme'>
              <Sun size={16} />
            </button> */}
          </div>
          <Routes>
            {user ? <>
              <Route path="/*" element={<Navigate to="/categories" />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/categories" element={<CategoryIndexPage user={user} />} />
              <Route path="/categories/:id" element={<CategoryDetailPage user={user} setUser={setUser} />} />
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