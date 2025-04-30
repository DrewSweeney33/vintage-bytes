import React from "react";
import { Link } from "react-router-dom";

function ViewMoreButton() {
    return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-6">
            <Link to={"/MyProjects"}>
                <button
                    type="button"
                    className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-cyan-600 drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                    View more
                </button>
            </Link>
    </div>
    )
}

export default ViewMoreButton;