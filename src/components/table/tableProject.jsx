"use client";

import { useDataStore } from "@/stores/DataStore";
import Image from "next/image";
import React, { useState } from "react";
import Modal from '@/components/modal/page';
import { FaEye } from "react-icons/fa";

function TableProject() {
    const { project } = useDataStore();
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImgProject, setSelectedImgProject] = useState([]);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            <table className="mt-12 w-full border-collapse text-left">
                <thead className="sticky top-0 z-10 px-6 py-5 backdrop-blur border-[white]">
                    <tr>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Image</th>
                        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                    </tr>
                </thead>
                <tbody>
                    {project.map((data, index) => (
                        <tr key={index} className="last:border-none" style={{ borderBottom: "#cbd5e11a 2px solid" }}>
                            <td className="py-4 pr-4 align-top text-sm">
                                <div className="relative inline-block group cursor-pointer hover:opacity-70">
                                    <Image
                                        src={data.image[0]}
                                        unoptimized
                                        height={200}
                                        width={100}
                                        alt={data.name}
                                        title={data.name}
                                        style={{ border: "2px solid gray", borderRadius: "5px" }}
                                        className="mb-2 w-[100px]"
                                        onClick={() => {
                                            openModal();
                                            setSelectedImgProject(data.image);
                                        }}
                                    />
                                    {/* <FaEye className="absolute z-40 right-[41%] bottom-[43%] text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                                </div>

                            </td>

                            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                {
                                    data.href ?
                                        <a className="text-nowrap hover:text-primary-500 items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 hover:text-slate-200 focus-visible:text-teal-300 group/link text-base" href={data.href} target="_blank" rel="noreferrer noopener" aria-label="Emerson Collective (opens in a new tab)">
                                            {data.name}
                                            <span className="inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </a>
                                        :
                                        <span>{data.name}</span>
                                }
                            </td>
                            <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                <div className='flex flex-row flex-wrap gap-2'>
                                    {data.language ? data.language.map(function (object, index) {
                                        return <div key={index} className='bg-surface-400 text-on-background py-1 px-3 rounded-full text-xs'>{object}</div>
                                    }) : ""}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={isModalOpen} onClose={closeModal} images={selectedImgProject} title="Image Modal" />
        </>
    )
};

export default TableProject;
