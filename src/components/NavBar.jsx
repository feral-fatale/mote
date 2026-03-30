"use client";
import { useEffect, useState } from "react";

const navigation = [
  { name: 'Services'},
  { name: 'Work'},
  { name: 'Contact'}
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);  
  
  // Handle scroll to add background and border to navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav aria-label="Global" 
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            padding: "16px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: scrolled ? "rgba(10,0,6,0.92)" : "transparent",
            borderBottom: scrolled ? "1px solid #3a0020" : "none",
            transition: "background 0.3s, border-color 0.3s",
            backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
        >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
                src="/icons/planet.png"
                alt="Mote Logo"
                style={{ width: '16px'}}
            />
            <span
            style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 11,
                color: "#ff69b4",
                letterSpacing: 3,
            }}
            >
            MOTE.TECH
            </span>
        </div>
        <div className="flex lg:hidden">
        </div>
        <div className="lg:flex lg:gap-x-12">
        {navigation.map((item) => (
            <a key={item.name} href={`#${item.name.toLowerCase()}`}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: "#a06080",
              textDecoration: "none",
              letterSpacing: 2,
              transition: "color 0.2s",
            }} 
            
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff69b4")}            
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a06080")}
            >
            {item.name}
            </a>
        ))}
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm/6 font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
        </a>
        </div> */}
    </nav>
  );
}