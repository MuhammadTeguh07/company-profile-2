import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
    return (
        <div className='lg:fixed lg:h-screen basis-1.5/4 flex flex-col lg:justify-between lg:pb-48 self-center lg:self-auto lg:mr-[60%] pt-24'>
            <div className=''>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">{props.data.name}</h1>
                <h2 className="mt-2 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">{props.data.title}</h2>
                <h2 className='text-surface-600 mt-2 text-base font-normal tracking-wider'>{props.data.headline}</h2>
            </div>
            <Navigation></Navigation>
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header