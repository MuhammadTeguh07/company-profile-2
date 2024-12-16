import Link from 'next/link';
import React from 'react';
import TableProject from '@/components/table/tableProject';

export default function allProjectPage() {
    return (
        <section className="flex min-h-screen flex-col items-center px-6 py-10 lg:p-20">
            <div className="z-2 w-full max-w-7xl font-mono text-sm">
                <div>
                    <Link className="hover:text-primary-500 group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                        </svg>
                        Back
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">All Projects</h1>
                    <TableProject />
                </div>
            </div>
        </section>
    )
}
