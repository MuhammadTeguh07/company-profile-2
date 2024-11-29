import React from "react";

function ExperienceItem(props) {
    return (
        <div className="group lg:flex lg:flex-row mb-4 py-5 rounded-md lg:p-5 transition-all lg:hover:bg-surface-200">
            <div className="basis-1/4 mr-2">
                <div className='mr-2 text-surface-600 text-xs basis-1/4'>{props.startDate} - {props.endDate}</div>
            </div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.title} | {props.company} </a>
                <div className='text-surface-600 mb-4 mt-2'>{props.description}</div>
                <div className='flex flex-row flex-wrap gap-2'>
                    {props.skills ? props.skills.map(function (object, index) {
                        return <div key={index} className='bg-surface-400 py-1 px-3 rounded-full text-xs'>{object}</div>
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem