import { MotionConfig } from "framer-motion";
import { useState } from "react";
import { headerLinks, logIn, signUp, webPageLogo } from "../constants/pages_data";
import { NavbarAndroidMenuItem } from "./navbar_android_menu_item";
import { motion } from "framer-motion";
import { NavbarDesktopMenuItem } from "./navbar_desktop_menu_item";

const burgerMenuStates = {general: require("../assets/icons/burger_menu.png"), active: require("../assets/icons/burger_menu_active.png")}

export function Navbar(){
    const [menuIconState, setMenuIconState] = useState(false)

    const menuButtonClickHandler = () => {setMenuIconState(!menuIconState)}

    return(
        <div className="flex flex-col lg:flex-row bg-[#F9FAFB] drop-shadow-sm">
            <div className="px-3.5 flex lg:px-28 flex-row items-center justify-between w-screen h-20">
                <div className="flex flex-row h-min">
                    <img src={webPageLogo.icon} className="w-8 h-8 mr-2"></img>
                    <p className="text-base font-medium self-center mr-10">{webPageLogo.title}</p>

                    <div className="hidden lg:flex">
                        {headerLinks.map((link, index) => <NavbarDesktopMenuItem title={link.title} link={link.link} subLinks={link.subLinks} key={index}></NavbarDesktopMenuItem>)}
                    </div>
                </div>

                <div className="hidden lg:flex">
                    <button className="w-24 h-11 rounded-lg text-[#475467] mr-3">{logIn}</button>
                    <button className="w-24 h-11 bg-[#7F56D9] text-white rounded-lg">{signUp}</button>
                </div>

                <div className="lg:hidden w-6 h-6" onClick={menuButtonClickHandler}>
                    <img src={menuIconState ? burgerMenuStates.active : burgerMenuStates.general} alt=""/>
                </div>
            </div>
            {menuIconState ?
                <motion.div  className="w-full bg-white lg:hidden" initial={{opacity: 0}} animate={{opacity: 1}}>
                    {headerLinks.map((link, index) => <NavbarAndroidMenuItem title={link.title} link={link.link} subLinks={link.subLinks} key={index}></NavbarAndroidMenuItem>)}
                    <div className="w-full p-2">
                        <button className="w-full h-11 bg-slate-300 rounded-lg">{logIn}</button>
                    </div>
                    <div className="w-full p-2">
                        <button className="w-full h-11 bg-[#7F56D9] rounded-lg">{signUp}</button>
                    </div>
                </motion.div>
                :
                null
            }
        </div>
    )
}