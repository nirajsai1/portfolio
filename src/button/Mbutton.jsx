import { useSelector } from "react-redux"
import store from "../store/model"
import {FiSun} from 'react-icons/fi'
import { IoIosMoon } from "react-icons/io";
import { modeAction } from "../store/model";
export default function MButton(){
    const mode = useSelector(state=>state.data.toggle)
    const activate = ()=>{
        store.dispatch(modeAction.toggleButton())
      }
    return (
        <button className={`mx-6 fixed top-36 left-10 z-50 p-4 w-[100px] h-[60px] shadow-xl shadow-black rounded-full bg-white 
            dark:shadow-yellow-100 dark:bg-orange-800`} onClick={activate}>
                <div className="flex flex-row items-start w-full justify-between">
                <div>
                {!mode ?<FiSun className="text-xl md:text-3xl" />: ' '}
                </div>
                <div>
                {mode ? <IoIosMoon className="text-xl md:text-3xl" /> : ' '}
                </div>
                </div>
                </button>
    )
}