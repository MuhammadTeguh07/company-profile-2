"use client"

import { useDataStore } from "@/stores/DataStore";
import React from "react";

const Credits = () => {
    const { general } = useDataStore()

    return (
        <div data-section id='credits' className='group pb-20'>
            <div className='text-surface-600'>
                <div className='flex flex-row justify-between'>
                    <span>{general.name} | 2024</span>
                    <div>
                        Inspiration Design by <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Brittany Chiang</a>.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Credits