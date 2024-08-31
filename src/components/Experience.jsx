import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function Experience() {
    const data = [
        {
            info: {
                name: 'Vivada Tech',
                role: 'Full Stack Intern',
                started: 'May 2024',
                ended: '',
            },
            description: {
                first: 'Developed and maintained React and Django-based applications.',
                second: 'Created and managed models for data handling and integration.',
                third: 'Designed and implemented GraphQL schemas, mutations, and queries.',
                fourth: 'Implemented token-based and session-based authentication and authorization to manage user permissions.',
            },
        },
    ];

    return (
        <div id='Experience' className='bg-gradient-to-r from-blue-500 to-teal-500 py-12'>
            <h1 className='text-center text-4xl font-extrabold text-white mb-12'>
                My Experience
            </h1>
            <div className='container mx-auto px-4'>
                {data.map((exp, index) => (
                    <div
                        key={index}
                        className='flex flex-col md:flex-row justify-between items-start bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg mb-8 p-6'
                    >
                        <div className='flex-1'>
                            <p className='text-lg font-semibold'>
                                {exp.info.started} - {exp.info.ended || 'Present'}
                            </p>
                            <p className='text-xl font-bold mt-2'>
                                {exp.info.role} at {exp.info.name}
                            </p>
                        </div>
                        <div className='flex-1 mt-4 md:mt-0 md:ml-6'>
                            <ul className='list-disc list-inside space-y-1'>
                                <li>{exp.description.first}</li>
                                <li>{exp.description.second}</li>
                                <li>{exp.description.third}</li>
                                <li>{exp.description.fourth}</li>
                            </ul>
                        </div>
                    </div>
                ))}
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
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <div
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg p-6 w-64 h-64 cursor-pointer transition-transform transform hover:scale-105"
                onClick={handleClick}
            >
                <p className='text-2xl font-bold text-center'>
                    {front.name}
                </p>
            </div>
            <div
                className='bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-lg p-6 w-64 h-64 cursor-pointer transition-transform transform hover:scale-105'
                onClick={handleClick}
            >
                <div className='space-y-2'>
                    <p>* {back.first}</p>
                    <p>* {back.second}</p>
                    <p>* {back.third}</p>
                    {back.fourth && <p>* {back.fourth}</p>}
                </div>
            </div>
        </ReactCardFlip>
    );
}

