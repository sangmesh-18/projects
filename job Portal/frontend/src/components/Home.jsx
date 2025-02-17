import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useLocation,useNavigate } from 'react-router-dom'


const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Check if user exists, has a role of 'recruiter', and is NOT already on '/' or '/admin/companies'
    if (user?.role === 'recruiter' && location.pathname !== '/' && location.pathname !== '/admin/companies') {
      navigate('/admin/companies');
    }
  }, [user, location, navigate]);
  
  return (<div className='mx-auto'>
    <Navbar />
    <HeroSection />
    <CategoryCarousel />
    <LatestJobs />
    <Footer />

  </div>
  )
}

export default Home
