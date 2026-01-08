"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, BadgeInfo , Leaf , Send  } from "lucide-react";

const NavbarVersion2 = () => {
  const items = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Xperience", url: "#experience", icon: BadgeInfo  },
    { name: "Ingredients", url: "#ingredients", icon: Leaf  },
    { name: "Contact", url: "#contact", icon: Send  },
  ];

  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth scroll handler
  const handleClick = (e, url) => {
    e.preventDefault();
    const targetId = url.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100; // 100px offset for navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className={`fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-99 mb-6 sm:pt-6 `}
    >
      <div className="flex items-center gap-3 bg-white/80 border border-gray-200 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                handleClick(e, item.url);
                setActiveTab(item.name);
              }}
              className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors ${
                isActive
                  ? "bg-gray-100 text-[#204033]"
                  : "text-gray-600 hover:text-[#204033]"
              }`}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#204033] rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#204033] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-[#204033]/30 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-[#204033]/30 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-[#204033]/30 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarVersion2;
