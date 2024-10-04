import React from 'react'
import Title from '../layouts/Title'
import {  vote, Ecom, Calculator, Employee, bookshop, game } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Online Voting App"
          des=" An online voting app is a digital platform designed to 
          facilitate the voting process remotely, typically through web or mobile applications!
          Purpose: The primary purpose of the online voting app is to allow users to cast their votes
           conveniently and securely without the need to visit physical polling stations."
          src={vote}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" An e-commerce website is a platform
           where businesses sell products or services to customers online.Purpose: The primary purpose of an e-commerce website
            is to facilitate the buying and selling of goods or services over the internet.Security is crucial in e-commerce websites to protect customer data, 
            payment information, and transactions from unauthorized access and fraud."
          src={Ecom}
        />
        <ProjectsCard
          title="Calculator"
          des=" Creating a calculator application using React is a great project for practicing 
          your React skills and understanding how to manage state and user input
          Purpose: The purpose of the React calculator project is to build a web-based calculator application that allows users to perform basic arithmetic
           operations such as addition, subtraction, multiplication, and division."
          src={Calculator}
        />
        <ProjectsCard
          title="Employee Managment System"
          des=" 
          Building an Employee Management System using Spring Boot for the backend and React for the frontend is
           a comprehensive project that allows you to integrate two powerful technologies 
           Purpose: The Employee Management System aims to streamline HR processes by providing a centralized platform for managing employee data, including personal 
           information, attendance, leave requests, performance reviews, etc."
          src={Employee}
        />
        <ProjectsCard
          title="Online Library Managment"
          des=" Creating an Online Library Management System is an excellent project for learning 
          about database management, user authentication, and web development.
          Purpose: The Online Library Management System enables users to browse, search, borrow, and return books 
          from a digital library.Building an Online Library Management System is a challenging but rewarding project that allows you to gain practical experience in full-stack web development.  "
          src={bookshop}
        />
        <ProjectsCard
          title="Tic-Tac-Toe Game"
          des="Building a Tic-Tac-Toe game using React is a fantastic project to enhance your React skills while exploring state management and component interaction.
          Purpose: The purpose of the Tic-Tac-Toe game project is to create a digital version of the classic game where two players take turns marking spaces on a 3x3 grid.
          Creating a Tic-Tac-Toe game using React is an excellent way to deepen your understanding of React concepts such as state management, component lifecycle, and event handling. Start by designing the components and defining the game logic, then gradually implement and test each part of the game"
          src={game}
        />
      </div>
    </section>
  );
}

export default Projects