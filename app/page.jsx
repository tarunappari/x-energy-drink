import Logo from '@/components/common/Logo';
import Navbar from '@/components/common/Navbar';
import NavbarVersion2 from '@/components/common/NavbarVersion2';
import Footer from '@/components/common/Footer';
import Experience from '@/components/landingpage/Experience';
import HeroSectionVersion3 from '@/components/landingpage/HeroSectionVersion3';
import Ingredients from '@/components/landingpage/Ingredients';
import UniqueTaste from '@/components/landingpage/UniqueTaste';
import Why from '@/components/landingpage/Why';
import React from 'react'
import Contact from '@/components/landingpage/Contact';
import Faq from '@/components/landingpage/Faq';

const page = () => {
  return (
    <div className='relative'>
      <Logo />
      <NavbarVersion2 />
      {/* <Navbar /> */}
      <HeroSectionVersion3 />
      <Experience />
      <UniqueTaste />
      <Ingredients />
      <Why />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
}

export default page;
