import { Link } from "react-router-dom"

const bottomArrow = require("../assets/icons/bottom_arrow.png")

interface NavbarDesktopMenuItemProps {
    title: string
    link?: string
    subLinks?: {title: string, link?: string, subLinks?: {title: string, link: string}}[]
}

export function NavbarDesktopMenuItem(props: NavbarDesktopMenuItemProps){
    return(
        !props.subLinks ?
            <Link to={props.link ? props.link : "#"} className=" mr-8 self-center">
                <p className=" text-base font-semibold text-[#475467]">{props.title}</p>
            </Link>
        :
            <button className="flex flex-row items-center mr-8">
                <p className=" text-base font-semibold text-[#475467]">{props.title}</p>
                <img src={bottomArrow} alt="" className=" ml-3 w-4 h-4" />
            </button>
    )
}