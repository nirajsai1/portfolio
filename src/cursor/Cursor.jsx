import { useEffect, useState } from "react"
import {motion} from 'framer-motion'
export default function Cursor(){
    const [mousePosition,setMousePosition] = useState({
        x:0,
        y:0
    })
    useEffect(()=>{
        const mouseMove  = e=>{
            setMousePosition({
                x:e.ClientX,
                y:e.ClientY
            })
        }
        window.addEventListener('mousemove',mouseMove)
        return ()=>{
            window.removeEventListener('mousemove',mouseMove)
        }
    })
    const variant = {
        default : {
            x:mousePosition.x - 15,
            y:mousePosition.y - 15
        }
    }
    return (
        <div className="w-[30px] h-[30px] rounded-full bg-lime-900 top-0 left-0">
            <motion.div variants={variant} animate='default' />
        </div>
    )
}