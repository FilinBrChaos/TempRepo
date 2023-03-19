import { Menu } from '@headlessui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface DropdownOptionsProps {
    title: string
    options: {title: string, onClickHandler: () => void}[]
    additionalStyle?: string
}

export function DropdownOptions(props: DropdownOptionsProps){
    const [title, setTitle] = useState(props.title)

    return(
        <Menu as="div" className={`relative inline-block text-center z-50 ${props.additionalStyle ? ` ${props.additionalStyle}` : ""}`}>
            <div>
                <Menu.Button className={`inline-flex font-medium text-base w-full h-full items-center justify-between rounded-lg border border-[#D0D5DD] px-4 py-2 text-black hover:bg-opacity-30`}>
                    {title} <img src={require("../assets/icons/bottom_arrow.png")} alt="" className=' w-5 h-5' />
                </Menu.Button>
            </div>
                <Menu.Items className="absolute mt-2 left-1/2 -translate-x-1/2  w-full origin-center">
                    <motion.div className="shadow-lg rounded-lg overflow-hidden"
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1, transition:{duration:0.2}}}>
                        {props.options.map((option, index) => <DropdownMenuButton key={index} title={option.title} onClick={() => {option.onClickHandler(); setTitle(option.title)}}></DropdownMenuButton>)}
                    </motion.div>
                </Menu.Items>
        </Menu>
    )
}

interface DropdownMenuButtonProps {
    title: string
    onClick: () => void
}

function DropdownMenuButton(props: DropdownMenuButtonProps){
    return(
        <Menu.Item>
            {({ active }) => (
                <button
                    className={`${active ? ' bg-black text-white' : ' bg-white'} 
                    group flex w-full h-10 items-center justify-center text-base`}
                    onClick={() => props.onClick()}>
                    {props.title}
                </button>
            )}
        </Menu.Item>
    )
}