"use client";

import { useDataStore } from "@/stores/DataStore";
import React from "react";

function TableProject() {
    const { experience } = useDataStore();

    return (
        <table className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 px-6 py-5 backdrop-blur border-[white]">
                <tr>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Date</th>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Company</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Role</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                </tr>
            </thead>
            <tbody>
                {experience.map((data, index) => (
                    <tr key={index} className="last:border-none" style={{borderBottom: "#cbd5e11a 0.1px solid"}}>
                        <td className="py-4 pr-4 align-top text-sm">
                            <span>{data.startDate} - {data.endDate}</span>
                        </td>
                        <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                            {
                                data.href ?
                                    <a className="text-nowrap hover:text-primary-500 items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 hover:text-slate-200 focus-visible:text-teal-300 group/link text-base" href={data.href} target="_blank" rel="noreferrer noopener" aria-label="Emerson Collective (opens in a new tab)">
                                        {data.company}
                                        <span className="inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                            </svg>
                                        </span>
                                    </a>
                                    :
                                    <span>{data.company}</span>
                            }
                        </td>
                        <td className="hidden py-4 pr-4 align-top lg:table-cell text-sm">
                            <span>{data.title}</span>
                        </td>
                        <td className="hidden py-4 pr-4 align-top lg:table-cell w-[500px]">
                            <div className='flex flex-row flex-wrap gap-2'>
                                {data.skills ? data.skills.map(function (object, index) {
                                    return <div key={index} className='bg-surface-400 text-on-background py-1 px-3 rounded-full text-xs'>{object}</div>
                                }) : ""}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableProject;
