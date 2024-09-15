import React from 'react'
import { Spotlight } from '../../../@/components/ui/spotlight'
import { Link } from 'react-router-dom'
type Props = {}

const Hero = (props: Props) => {
    return (
        <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-gray-950/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:-left-[90rem] md:-top-[90rem]"
                fill="white"
            />
            <div className="md:mt-20 p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Enhance Your Learning with AQuQ-G
                </h1>
                <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto my-5">Bridge the gap in your self-study journey with contextual and accurate responses tailored to your study materials.</p>
                <h2 className="text-3xl font-bold text-center text-white my-5">Why Choose Our AI-powered System?</h2>
                <div className="container flex flex-col gap-8 items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 place-items-start">
                        <div className="flex flex-col justify-center items-start gap-2">
                            <span className="text-2xl font-medium text-blue-500">Contextual Questions</span>
                            <p className="text-base text-gray-300">Get relevant questions based on what you need to know.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <span className="text-2xl font-medium text-blue-500">Accurate Answers</span>
                            <p className="text-base text-gray-300">Receive precise and detailed answers to enhance your learning.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <span className="text-2xl font-medium text-blue-500">Cutting-edge Technology</span>
                            <p className="text-base text-gray-300">Harness the power of state-of-the-art AI for deeper insights.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <span className="text-2xl font-medium text-blue-500">User-friendly Interface</span>
                            <p className="text-base text-gray-300">Navigate with ease and stay focused on what matters.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <span className="text-2xl font-medium text-blue-500">Privacy First</span>
                            <p className="text-base text-gray-300">No data storage, ensuring your privacy and security.</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2">
                            <span className="text-2xl font-medium text-blue-500">File Support</span>
                            <p className="text-base text-gray-300">Upload PDFs and DOC files for quick and easy access to relevant content.</p>
                        </div>
                    </div>

                    <p className="text-lg text-gray-300 text-center max-w-xl">Level up your study routine today and unlock the full potential of AI in education!</p>
                    <Link to="/playground" className="bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-md transition duration-300">Get Started Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero