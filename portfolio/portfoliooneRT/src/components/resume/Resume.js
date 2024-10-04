import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education');

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="" des="My Resume" />
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex space-x-4">
          <li
            onClick={() => setActiveSection('education')}
            className={`cursor-pointer p-4 border-2 rounded-lg ${
              activeSection === 'education'
                ? 'bg-white-500 text-white border-pink-500'
                : 'bg-gray-100 text-black border-gray-300'
            }`}
          >
            Education
          </li>
          <li
            onClick={() => setActiveSection('skills')}
            className={`cursor-pointer p-4 border-2 rounded-lg ${
              activeSection === 'skills'
                ? 'bg-white-500 text-white border-pink-500'
                : 'bg-gray-100 text-black border-gray-300'
            }`}
          >
            Professional Skills
          </li>
         </ul>
      </div>
      <div className="mt-10 flex justify-center items-center">
        {activeSection === 'education' && <Education />}
        {activeSection === 'skills' && <Skills />}
       
      </div>
    </section>
  );
};

export default Resume;
