'use client';

import React, { useState, useEffect } from "react";
import NavItem from "./nav-item";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('[data-section]');
            let currentSection = null;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 5 && rect.bottom >= window.innerHeight / 5) {
                    currentSection = section.id;
                }
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Trigger once to set the initial state
        handleScroll();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id='navigation' className=' lg:flex hidden flex-col py-28 font-medium tracking-widest'>
            <NavItem active={activeSection === 'about'} href='#about' name="ABOUT" />
            <NavItem active={activeSection === 'experiences'} href='#experiences' name="EXPERIENCES" />
            <NavItem active={activeSection === 'projects'} href='#projects' name="PROJECTS" />
        </div>
    );
};

export default Navigation;
