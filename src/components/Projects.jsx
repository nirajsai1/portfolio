import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Projects() {
  const data = [
    {
      title: "Stud Res",
      info: {
        first: "Developed a full-stack web application using Django.",
        second:
          "Built a website for students to access their attendance, results, and receive notifications.",
        third: "Admin panel provided for staff members.",
      },
    },
    {
      title: "CRM",
      info: {
        first: "Customer Relationship Management Website.",
        second:
          "Streamlined sales, marketing, and customer support activities.",
        third:
          "Admins can monitor customers and orders to prevent discrepancies.",
      },
    },
    {
      title: "Task Manager",
      info: {
        first: "Built a task manager app using React and Tailwind CSS.",
        second: "Allows users to create tasks and organize them with subtasks.",
        third:
          "Provides a streamlined interface for managing task hierarchies efficiently.",
      },
    },
    {
      title: "Contacts",
      info: {
        first: "Created a backend for a contacts app using Express.js.",
        second:
          "Authenticated users can create, update, and delete accounts.",
        third: "Secure data management with MongoDB.",
      },
    },
    {
      title: "Cart",
      info: {
        first:
          "Developed a mini cart application with item addition/removal and order placement features.",
        second: "Connected to Firebase for backend functionality.",
        third: "Provides real-time data management.",
      },
    },
    {
      title: "Authenticator",
      info: {
        first:
          "Built a Django-GraphQL application handling user authentication, roles, and authorization.",
        second:
          "Secure access control enforced based on user roles using decorators.",
        third:
          "Effectively combines authentication and authorization to manage user permissions.",
      },
    },
  ];

  return (
    <div id="Projects" className="bg-gradient-to-r from-purple-500 to-indigo-600 py-12">
      <h1 className="text-center text-4xl font-extrabold text-white mb-12">
        My Projects
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((project) => (
            <div className="flex justify-center items-center">
              <FlipCard front={project.title} back={project.info} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FlipCard({ front, back }) {
  const [isFlipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow-lg p-6 cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={handleClick}
      >
        <p className="text-2xl font-bold text-center">{front}</p>
      </div>
      <div
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow-lg p-6 cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={handleClick}
      >
        <div className="flex flex-col gap-2">
          <p className="text-lg">• {back.first}</p>
          <p className="text-lg">• {back.second}</p>
          <p className="text-lg">• {back.third}</p>
        </div>
      </div>
    </ReactCardFlip>
  );
}
