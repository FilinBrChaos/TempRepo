import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const bottomArrow = require("../assets/icons/bottom_arrow.png")

interface NavbarAndroidMenuItemProps {
    title: string
    link?: string
    subLinks?: {title: string, link?: string, subLinks?: {title: string, link: string}}[]
}

export function NavbarAndroidMenuItem(props: NavbarAndroidMenuItemProps){
    const [clickedState, setClickedState] = useState(false)

    const onExtendClickHandler = () => {setClickedState(!clickedState)}

    return(
        !props.subLinks ? 
            <Link to={props.link ? props.link : "#"}>
                <div className="flex items-center justify-between w-full h-16 px-4">
                    <p className="text-sm">{props.title}</p>
                </div>
            </Link>
        :
            <div className="w-full bg-white" onClick={onExtendClickHandler}>
                <div className="flex items-center justify-between w-full h-16 px-4">
                    <p className="text-sm">{props.title}</p>
                    <img src={bottomArrow} alt="" className="w-5 h-5"/>
                </div>
                {props.subLinks && clickedState ?
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                        {props.subLinks.map((link, index) => <NavbarAndroidMenuItem title={link.title} link={link.link} key={index}></NavbarAndroidMenuItem>)}
                    </motion.div>
                    :
                    null
                }
            </div>
    )
}