import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Ending() {
    return (
        <div className="bg-gray-900 text-cyan-200 py-12" id="ContactMe">
            <h1 className="text-3xl text-center text-yellow-400 font-bold mb-10">CONTACT ME</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10 text-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-2">ADDRESS</h2>
                    <p>Akkireddypalem, BHPV Post</p>
                    <p>Visakhapatnam 530012</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-2">PHONE NUMBER</h2>
                    <p>+91 9392561391</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-2">
                        <a href="mailto:neerajsai290@gmail.com" className="hover:underline">EMAIL</a>
                    </h2>
                    <p>neerajsai290@gmail.com</p>
                </div>
            </div>
            
            <div className="flex justify-center space-x-6 mb-12">
                <a href="https://www.linkedin.com/in/neeraj-sai-05a62126a/" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition duration-300">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com/nirajsai1" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition duration-300">
                    <FaGithub size={30} />
                </a>
            </div>
            
            <div className="text-center text-gray-500 text-sm">
                © 2024 Niraj Sai Challa Portfolio. All rights reserved.
            </div>
        </div>
    );
}
