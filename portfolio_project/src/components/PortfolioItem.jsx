import React from "react";

function PortfolioItem({title, imgUrl, stack, link}) { //Passed in items from portfolio.js
    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
            <img 
                src={imgUrl} 
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
                    {title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md dark:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem;