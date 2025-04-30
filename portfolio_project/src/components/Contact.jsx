import React from "react";
import Title from './Title';

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                    action="https://getform.io/f/2ae053a9-bfe6-4ada-abda-cec018f020e5"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md border-zinc-400 focus:outline-none"
                    />
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 border-zinc-400 rounded-md focus:outline-none"
                    />
                    <textarea 
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 border-zinc-400 rounded-md focus:outline-none"
                    />
                    <div className="flex justify-between">
                        <button 
                            type="submit"
                            className="text-center inline-block px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 w-max text-base font-medium rounded-md text-white bg-cyan-600 drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        >
                            Work With Me
                        </button>
                        <a href="/assets/AndrewSweeneyResume.pdf" download>
                            <button 
                                type="button"
                                onClick="download"
                                className="text-center inline-flex px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 w-max text-base font-medium rounded-md text-white bg-cyan-600 drop-shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            >
                                Download My Resume
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;