"use client";
import React, { useState } from 'react';
import styles from '@/styles/common/Navbar.module.scss';
import logo from "@/public/assets/outline.png";
import Image from 'next/image';

const Navbar = () => {

  const navItems = [
    {
      label: 'About',
      hasDropdown: false,
      id: 'news'
    },
    {
      label: 'Ingredients',
      hasDropdown: false,
      id: 'roster'
    },
    {
      label: 'Why',
      hasDropdown: false,
      id: 'promotions'
    },
    
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <div className={styles.logoBox}>
            <Image src={logo} alt="X Energy" width={80} height={60} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.edge}></span>
            <span className={styles.brandName}>X</span>
            <span className={styles.tagline}>CALMING ENERGY</span>
          </div>
        </div>

        {/* Navigation Items */}
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={styles.navItem}          
            >
              <a href={`#${item.id}`} className={styles.navLink}>
                {item.label}
                {item.hasDropdown && <span className={styles.arrow}>▼</span>}
              </a>

              {/* Dropdown indicator */}
              {item.hasDropdown && activeDropdown === item.id && (
                <div className={styles.dropdown}>
                  {/* Add dropdown content here if needed */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;