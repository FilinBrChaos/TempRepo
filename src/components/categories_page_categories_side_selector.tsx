import { useState } from "react"
import { RadioGroup } from '@headlessui/react'

interface CategoriesPageCategoriesSideSelectorProps {
    categoriesList: string[]
    selected: string
    setSelected: React.Dispatch<React.SetStateAction<string>>
    onSelectedChanged?: VoidFunction
}

export function CategoriesPageCategoriesSideSelector(props: CategoriesPageCategoriesSideSelectorProps){
    return(
        <div className="w-full">
            <RadioGroup value={props.selected} onChange={(arg) => { props.setSelected(arg); if (props.onSelectedChanged) props.onSelectedChanged() }} className="w-full">
                {props.categoriesList.map((category, index) => (
                <RadioGroup.Option
                    key={index}
                    value={category}
                    className={({ active, checked }) =>
                    `${checked ? 'bg-[#F9FAFB]' : ''} 
                    w-full h-11 rounded-md flex items-center`}>
                        {({ active, checked}) => 
                            <RadioGroup.Label as="button" className={"text-base px-[14px] text-start font-semibold " + (checked ? "text-black" : "text-[#667085]")}>
                                {category}
                            </RadioGroup.Label>
                        
                        }
                </RadioGroup.Option>
                ))}
            </RadioGroup>
        </div>
    )
}