import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <img className="rounded-full animate-bounce" src='/assets/Logo.jpg'/>
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Andrew Sweeney</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Developer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I'm a software developer and web-designer building projects for myself and the world one step at a time. All my projects are built from the ground up. Starting with planning and designing all the way to solving real-life problems with code.
            <br/>
            All my projects are built from inspiration to planning my twist and designing. View content on my Github account{' '}
            <a
                href="https://github.com/DrewSweeney33"
                target="_blank"
                className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                rel="noreferrer noopener"
            >
                DrewSweeney33
            </a>{' '}for anyone to see.
            </p>
            
            
        </div>
    )
}

export default Intro;