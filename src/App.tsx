import React from 'react';
import { Briefcase as BriefcaseBusiness, Bell, Search } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickSearch from './components/QuickSearch';
import FeaturedJobs from './components/FeaturedJobs';
import FeaturedEmployers from './components/FeaturedEmployers';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <QuickSearch />
        <FeaturedJobs />
        <FeaturedEmployers />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}

export default App;