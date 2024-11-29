import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-16 group pt-24'>
            <div className='text-surface-600'>
                {props.data.about.map(function(paragraph, index){
                    return <div key={index} dangerouslySetInnerHTML={{__html: paragraph}} className='mb-6'></div>
                })}
            </div>
        </div>
    )
}

export default About