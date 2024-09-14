import React from 'react'
import {Spotlight} from '../../../@/components/ui/spotlight'
import './Hero.css'
type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-gray-950/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-40 left-0 md:-left-[90rem] md:-top-[90rem]"
      fill="white"
    />
    <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Enhance Your Learning with AQuQ-G
      </h1>
      <div className="container">
        <p>Bridge the gap in your self-study journey with contextual and accurate responses tailored to your study materials.</p>

        <h2>Why Choose Our AI-powered System?</h2>
        <ul className="features">
            <li><span className="highlight">Contextual Questions:</span> Get relevant questions based on what you need to know.</li>
            <li><span className="highlight">Accurate Answers:</span> Receive precise and detailed answers to enhance your learning.</li>
            <li><span className="highlight">Cutting-edge Technology:</span> Harness the power of state-of-the-art AI for deeper insights.</li>
            <li><span className="highlight">User-friendly Interface:</span> Navigate with ease and stay focused on what matters.</li>
            <li><span className="highlight">Privacy First:</span> No data storage, ensuring your privacy and security.</li>
            <li><span className="highlight">File Support:</span> Upload PDFs and DOC files for quick and easy access to relevant content.</li>
        </ul>

        <p>Level up your study routine today and unlock the full potential of AI in education!</p>
        <a href="/playground" className="cta mt-4">Get Started Now</a>
    </div>
    </div>
  </div>
  )
}

export default Hero