import React from "react";

function ExperienceItem(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className={`${props.href ? 'cursor-pointer hover:text-primary-500' : 'cursor-default'} group lg:flex lg:flex-row py-5 rounded-md lg:p-5 transition-all lg:hover:bg-surface-200`}>
            <div className="basis-1/4 mr-2">
                <div className='mr-2 text-surface-600 text-xs basis-1/4'>{props.startDate} - {props.endDate}</div>
            </div>
            <div className='basis-3/4 mb-8 lg:mb-0'>
                <div className='font-medium transition-all flex gap-1 items-center'>
                    {props.title} | {props.company}
                    {
                        props.href &&
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1 invisible transition ease-in-out scale-50 group-hover:visible group-hover:scale-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    }
                </div>
                <div className='text-surface-600 mb-4 mt-2'>{props.description}</div>
                <div className='flex flex-row flex-wrap gap-2'>
                    {props.skills ? props.skills.map(function (object, index) {
                        return <div key={index} className='bg-surface-400 text-on-background py-1 px-3 rounded-full text-xs'>{object}</div>
                    }) : ""}
                </div>
            </div>
        </a>
    )
}

export default ExperienceItem