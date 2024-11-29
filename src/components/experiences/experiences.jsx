import React from "react";
import ExperienceItem from "./experience-item";

const Experiences = (props) => {
    return (
        <div data-section id='experiences' className='mb-16'>
            <h2 className='mb-2 visible lg:invisible font-semibold tracking-widest'>EXPERIENCES</h2>
            {props.data.map(function(object, index){
                return <ExperienceItem  
                    key={index}
                    title={object.title}
                    company={object.company}
                    href={object.href}
                    startDate={object.startDate}
                    endDate={object.endDate}
                    description={object.description}
                    logo={object.logo}
                    skills={object.skills}
                />
            })}
        </div>
    )
}

export default Experiences