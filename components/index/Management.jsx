import getConfig from 'next/config'
import React from 'react'
import {motion} from "framer-motion";

const { publicRuntimeConfig } = getConfig()
const management = publicRuntimeConfig.management

export default function Management() {

    return (
        <div>
            <h1 className="dark:text-white text-black text-3xl antialiased font-bold text-center">{publicRuntimeConfig.managementTitle}</h1>
            <h2 className="dark:text-gray-300 text-black text-xl antialiased font-bold text-center">{publicRuntimeConfig.managementDesc}</h2>
            <div className="flex justify-center">
                <div className="py-5 grid grid-flow-col">
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        {management.map((management, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    className={`max-w-sm rounded-lg shadow-md bg-slate-300 dark:bg-neutral-800 m-6`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                >
                                    <a>
                                        <img className={`border-b-2 border-solid border-black dark:border-white object-cover rounded-t-lg h-48 w-full`}
                                             src={management.img}/>
                                    </a>
                                    <div className="mx-4 my-4 p-2">
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{management.name}</h5>
                                        <a className="text-xs uppercase font-extrabold text-gray-700 dark:text-gray-400">{management.role}</a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{management.description}</p>
                                        {management.button != null && <a href={management.button.link}
                                           className={`management-button inline-flex items-center px-1 mt-2 text-sm font-medium text-center text-black dark:text-white underline`}>
                                            {management.button.text}
                                            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                />
                                            </svg>
                                        </a>}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}