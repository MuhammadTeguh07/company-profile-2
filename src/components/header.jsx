"use client"

import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";
import { useDataStore } from "@/stores/DataStore";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    const { general } = useDataStore()

    return (
        <div className='lg:fixed lg:h-screen basis-1.5/4 flex flex-col lg:justify-between lg:pb-24 self-center lg:self-auto lg:mr-[60%] pt-24'>
            <div className=''>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{general.name}</h1>
                <h2 className="mt-2 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    <TypeAnimation
                        sequence={[
                            general.title[0],
                            3000,
                            general.title[1],
                            3000,
                        ]}
                        wrapper="div"
                        speed={1}
                        repeat={Infinity}
                    />
                </h2>
                <h2 className='text-surface-600 mt-2 text-base font-normal tracking-wider'>{general.headline}</h2>
            </div>
            <Navigation></Navigation>
            <Socials data={general.socials}></Socials>
        </div>
    )
}

export default Header