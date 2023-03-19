import React from "react";
import { next, previous } from "../constants/pages_data";

interface CardPagesSwitcherProps {
    currentPage: number
    maxPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export function CardPagesSwitcher(props: CardPagesSwitcherProps){
    const range = 2
    let numberButtonsRow = []

    if (props.currentPage - range >= 2) {                       //it's (1...) part
        numberButtonsRow.push(<NumberButton index={1} checked={false} setCurrentPage={props.setCurrentPage}></NumberButton>)
        if (props.currentPage - range > 2) numberButtonsRow.push(<p className=" self-end w-3">...</p>)
    }

    for (let i = props.currentPage - range; i < props.currentPage && i < props.maxPage; i++)        //it's (4 5) part
        if (i > 0) numberButtonsRow.push(<NumberButton index={i} checked={false} setCurrentPage={props.setCurrentPage}></NumberButton>)

    numberButtonsRow.push(<NumberButton index={props.currentPage} checked={true} setCurrentPage={props.setCurrentPage}></NumberButton>)  //it's ([6]) - current checked page

    for (let i = props.currentPage + 1; i < props.currentPage + range + 1 && i <= props.maxPage; i++)       //it's (7 8) part
        numberButtonsRow.push(<NumberButton index={i} checked={false} setCurrentPage={props.setCurrentPage}></NumberButton>)

    if (props.currentPage + range <= props.maxPage - 1){        //it's (...10) part
        if (props.currentPage + range < props.maxPage - 1) numberButtonsRow.push(<p className=" self-end w-3">...</p>)
        numberButtonsRow.push(<NumberButton index={props.maxPage} checked={false} setCurrentPage={props.setCurrentPage}></NumberButton>)
    }

    const previousClickHandler = () => {
        if (props.currentPage - 1 > 0) { 
            props.setCurrentPage(props.currentPage - 1); 
            window.scrollTo(0, 0)
    }}
    const nextClickHandler = () => {
        if (props.currentPage + 1 <= props.maxPage) { 
            props.setCurrentPage(props.currentPage + 1); 
            window.scrollTo(0, 0) 
    }}

    return(
        <div className="flex flex-row justify-between w-full border-t border-[#EAECF0] pt-4">
            <button className="flex flex-row items-center border-[#D0D5DD] border py-2 px-3 rounded-lg" onClick={previousClickHandler}>
                <img src={require("../assets/icons/next.png")} alt="" className=" rotate-180 w-4 h-4"/>
                <p className=" ml-3 text-sm font-semibold hidden lg:flex">{previous}</p>
            </button>
            <div className="flex flex-row items-center lg:hidden">
                <p>Page {props.currentPage} of {props.maxPage}</p>
            </div>
            <div className="hidden lg:flex lg:flex-row">
                {numberButtonsRow}
            </div>
            <button className="flex flex-row items-center border-[#D0D5DD] border py-2 px-3 rounded-lg" onClick={nextClickHandler}>
                <p className=" mr-3 text-sm font-semibold hidden lg:flex">{next}</p>
                <img src={require("../assets/icons/next.png")} alt="" className="w-4 h-4"/>
            </button>
        </div>
    )
}


interface NumberButtonProps {
    index: number
    checked: boolean
    setCurrentPage?: React.Dispatch<React.SetStateAction<number>>
}

function NumberButton(props: NumberButtonProps) {
    const numberButtonClickHandler = () => {
        if (props.setCurrentPage) {
            props.setCurrentPage(props.index)
            window.scrollTo(0, 0)
        }
    }
    return(
        <button className={"flex justify-center items-center w-10 h-10 rounded-lg hover:bg-[#f2f2f3] " + (props.checked ? "bg-[#e6e6e7]" : '')} 
                onClick={numberButtonClickHandler}>
            <p>{props.index}</p>
        </button>
    )
}
