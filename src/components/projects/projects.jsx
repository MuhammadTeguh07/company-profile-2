"use client"

import React from "react";
import ProjectItem from "./project-item";
import Link from "next/link";
import { useDataStore } from "@/stores/DataStore";

const Projects = () => {
    const { project } = useDataStore()

    return (
        <>
            <div data-section id='projects' className='hover-effect-on-siblings'>
                <h2 className='mb-5 lg:mb-0 visible lg:invisible text-lg font-semibold tracking-widest'>PROJECTS</h2>
                {project.slice(0, 5).map(function (object, index) {
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
            <div className="mt-0 lg:mt-10 mb-16 pb-20">
                <Link className="hover:text-primary-500 text-base inline-flex items-center leading-tight text-slate-200 font-semibold text-slate-200 group" aria-label="View Full Project Archive" href="/all-projects">
                    <span>
                        <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full Project</span>
                        <span className="whitespace-nowrap">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Projects