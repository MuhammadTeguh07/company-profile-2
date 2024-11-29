import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
    return (
        <div data-section id='projects' className='mb-16 pb-24'>
            <h2 className='mb-8 visible lg:invisible font-medium tracking-widest'>PROJECTS</h2>
            {props.data.map(function (object, index) {
                return <ProjectItem
                    key={index}
                    name={object.name}
                    description={object.description}
                    href={object.href}
                    image={object.image}
                    language={object.language}
                />
            })}
        </div>
    )
}

export default Projects