import React from "react";
import portfolio from "../data/portfolio2";
import PortfolioItem from "./PortfolioItemPage2";

function Portfolio2() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map(project => (
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio2;