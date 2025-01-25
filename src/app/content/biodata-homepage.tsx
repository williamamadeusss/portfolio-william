"use client"

import Image from '@/components/ui/image'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { useTime } from "motion/react"

function BiodataHomepage() {
    const biodataPictures = ["/images/will.jpg", "/images/will-2.jpg"]
    const [currentPict, setCurrentPict] = useState(biodataPictures[0])
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % biodataPictures.length; // Loop back to start after reaching the end
                setCurrentPict(biodataPictures[nextIndex]);
                return nextIndex;
            });
        }, 3000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex gap-40 justify-center'>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
            >
                <Image src={currentPict} alt='foto will' className='w-[29rem]' />
            </motion.div>

            <div className='flex flex-col gap-4'>
                <h1 className='text-5xl'>William Amadeus</h1>
                <p>A Software Engineer</p>
            </div>
        </div>
    )
}

export default BiodataHomepage