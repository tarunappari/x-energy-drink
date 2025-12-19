import Logo from '@/components/common/Logo';
import Navbar from '@/components/common/Navbar';
import NavbarVersion2 from '@/components/common/NavbarVersion2';
import Experience from '@/components/landingpage/Experience';
import HeroSectionVersion3 from '@/components/landingpage/HeroSectionVersion3';
import Ingredients from '@/components/landingpage/Ingredients';
import UniqueTaste from '@/components/landingpage/UniqueTaste';
import Why from '@/components/landingpage/Why';
import React from 'react'

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
    </div>
  )
}

export default page;
