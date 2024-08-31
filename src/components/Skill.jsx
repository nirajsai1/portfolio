import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
export default function Skill({skill}){
    const [isFlipped,setIsFlipped] = useState(false)
    const handleClick=()=>{
        setIsFlipped(!isFlipped)
    }
    return (
        <div className='flex items-center justify-center'>
            <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection='horizontal'>
                <div className='card-front bg-gray-600 dark:bg-slate-50 rounded-full flex items-center justify-center h-[150px] w-[150px]
                shadow-black shadow-2xl' onClick={handleClick}>
                    <p className='text-2xl'>{skill.name}</p>
                </div>
                <div className='card-back bg-gray-600 dark:bg-slate-50 rounded-full flex items-center justify-center h-[150px] w-[150px]
                shadow-black shadow-2xl' onClick={handleClick}>
                <CircularProgressbar
                  value={skill.percentage}
                     text={`${skill.percentage}%`}
                    styles={buildStyles({
                     // Customize the colors and styling
                         textColor: "#f88",
                         pathColor: "#0f8",
                           trailColor: "#ddd",
                           textAnchor:'middle',
                           textTransform: 'translate(-50%, -50%)',
                       })}
                />
                </div>
            </ReactCardFlip>
        </div>
    )
}