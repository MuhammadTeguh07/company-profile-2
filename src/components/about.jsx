"use client"

import { useDataStore } from "@/stores/DataStore";
import React from "react";

const About = () => {
    const { general } = useDataStore()

    return (
        <div data-section id='about' className='mb-16 group pt-20'>
            <h2 className='mb-8 lg:mb-0 visible lg:invisible text-lg font-semibold tracking-widest'>ABOUT</h2>
            <div className='text-surface-600'>
                {general.about.map(function (paragraph, index) {
                    return <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} className='mb-6'></div>
                })}
            </div>
        </div>
    )
}

export default About