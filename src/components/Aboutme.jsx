import mi from '../assests/bgm.png';
import { TypeAnimation } from 'react-type-animation';
import { useSelector } from 'react-redux';
import store from '../store/model';
import { modeAction } from '../store/model';

export default function AboutMe() {
    return (
        <section className="text-center bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="p-10 md:p-20 font-sans">
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-gray-300 mb-4">Hello, I'm</h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-blue-600 dark:text-blue-400 font-bold mb-8">Niraj Sai Challa</h1>
                
                <TypeAnimation
                    sequence={[
                        'Competitive Programmer',
                        1000,
                        'Full Stack Web Developer',
                        1000,
                        'Django Developer',
                        1000,
                        'React Developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.5em', color: '#4A5568', display: 'block', marginBottom: '40px' }}
                    repeat={Infinity}
                />

                <a href="/resume.docx" download>
                    <button className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md px-6 py-3 hover:from-indigo-600 hover:to-blue-500 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                        Download Resume
                    </button>
                </a>
            </div>
        </section>
    );
}
