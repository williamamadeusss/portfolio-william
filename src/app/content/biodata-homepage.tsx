"use client"

import Image from '@/components/ui/image'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

function BiodataHomepage() {
    const biodataPictures = ["/images/will.jpg", "/images/will-2.jpg"]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % biodataPictures.length);
        }, 4000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex gap-40 justify-center'>
            <AnimatePresence>
                <motion.div
                    className='w-[29rem]'
                    key={biodataPictures[index]}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src={biodataPictures[index]} alt='foto will' className='w-[29rem]' />
                </motion.div>
            </AnimatePresence>

            <div className='flex flex-col gap-4'>
                <h1 className='text-5xl'>William Amadeus</h1>
                <p>A Software Engineer</p>
            </div>
        </div>
    )
}

export default BiodataHomepage