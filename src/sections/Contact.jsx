import useState from 'react';
import { useFormValidation } from '../hooks/useFormValidation';

function Contact() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-primary-bg'>
        <p className="text-[55px] font-jamjuree font-bold bg-gradient-to-r from-lemon via-purple to-dark-light bg-clip-text text-transparent">Get in touch</p>
        <p className="text-[20px] font-jamjuree text-dark-light mt-[20px] mb-[25px] w-[70%] text-center">With 2 years of experience as a designer and developer, I have worked with many clients worldwide, built numerous frontend, backend, and AI applications, managed various projects, and contributed to Opensource projects</p>
    </div>
  )
}

export default Contact