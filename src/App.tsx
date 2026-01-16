import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { DashboardPage } from './pages/DashboardPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { HomeFarmingPage } from './pages/HomeFarmingPage';
import { CropsPage } from './pages/CropsPage';
import { ResalePage } from './pages/ResalePage';
import { AdminPage } from './pages/AdminPage';
import { Toaster } from './components/ui/sonner';

/**
 * UrbanRoot - Sustainability Platform for Urban Organic Farming
 * 
 * Demo Login Credentials:
 * - User Account: user@urbanroot.com / password123
 * - Admin Account: admin@urbanroot.com / admin123
 * 
 * Features:
 * - Expert Consultation Booking
 * - Home-Based Organic Farming Setup
 * - Weather-Based Crop Recommendations
 * - Surplus Produce Resale Marketplace
 * - Admin Dashboard for Platform Management
 */

type Page = 
  | 'landing' 
  | 'login' 
  | 'signup' 
  | 'dashboard' 
  | 'consultation' 
  | 'home-farming' 
  | 'crops' 
  | 'resale' 
  | 'admin'
  | 'services'
  | 'about'
  | 'profile';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin'>('user');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = (role: 'user' | 'admin' = 'user') => {
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentPage(role === 'admin' ? 'admin' : 'dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('user');
    setCurrentPage('landing');
  };

  const showNavbar = !['login', 'signup'].includes(currentPage);
  const showFooter = ['landing', 'services', 'about'].includes(currentPage);
  const showBottomNav = isLoggedIn && !['admin'].includes(currentPage);

  return (
    <div className="min-h-screen flex flex-col">
      {showNavbar && <Navbar onNavigate={handleNavigate} currentPage={currentPage} />}
      
      <main className={`flex-1 ${showBottomNav ? 'pb-16 md:pb-0' : ''}`}>
        {currentPage === 'landing' && <LandingPage onNavigate={handleNavigate} />}
        {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />}
        {currentPage === 'signup' && <SignupPage onNavigate={handleNavigate} onLogin={handleLogin} />}
        {currentPage === 'dashboard' && <DashboardPage onNavigate={handleNavigate} onLogout={handleLogout} />}
        {currentPage === 'consultation' && <ConsultationPage onNavigate={handleNavigate} />}
        {currentPage === 'home-farming' && <HomeFarmingPage onNavigate={handleNavigate} />}
        {currentPage === 'crops' && <CropsPage onNavigate={handleNavigate} />}
        {currentPage === 'resale' && <ResalePage onNavigate={handleNavigate} />}
        {currentPage === 'admin' && userRole === 'admin' && <AdminPage onNavigate={handleNavigate} onLogout={handleLogout} />}
        
        {/* Placeholder pages */}
        {currentPage === 'services' && <LandingPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <LandingPage onNavigate={handleNavigate} />}
        {currentPage === 'profile' && <DashboardPage onNavigate={handleNavigate} onLogout={handleLogout} />}
      </main>

      {showFooter && <Footer onNavigate={handleNavigate} />}
      {showBottomNav && <BottomNav onNavigate={handleNavigate} currentPage={currentPage} />}
      
      <Toaster />
    </div>
  );
}

export default App;