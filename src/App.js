import HomeScreen from './Homescreen/HomeScreen';
import Header from "./components/Header";
import AboutMe from './components/Aboutme';
import Navbar from './components/NavBar';
import Cursor from "./cursor/Cursor";
import AnimatedCursor from 'react-animated-cursor'
//import { createBrowserRouter,RouterProvider } from "react-router-dom";
import store, { modeAction } from './store/model';
import { Provider, useSelector } from "react-redux";
import Skills from "./components/Skills";
import MButton from './button/Mbutton';
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Profiles from "./components/Profiles";
import Ending from "./components/Ending";
export default function App() {
  const mode = useSelector(state=>state.data.toggle)
  //<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
  //<div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
  //<div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
  return (
    <div className={`${mode && "dark"} h-full w-full`}
    style={mode && "dark" ? {backgroundImage: 'linear-gradient(to right, #d7d2cc 0%, #304352 100%)'}:
    {backgroundImage: 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)'}}>

      <Header/>
         <MButton />
      <AboutMe />
      <AnimatedCursor 
      innerSize={14}
      outerSize={20}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5} />
      <Skills />
      <Projects />
      <Experience />
      <Profiles />
      <Ending />
    </div>
  )
}