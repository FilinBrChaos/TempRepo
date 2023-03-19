import { homePageSortDropdownButtonsTitles, search } from "../constants/pages_data";
import { HomePageBlogCardRounded } from "./home_page_blog_card_rounded";
import { HomePageSubHeader } from "./home_page_subheader";
import { Navbar } from "./navbar";
import cards from '../data/blogs_data.json'
import { CardPagesSwitcher } from "./card_pages_switcher";
import { useEffect, useMemo, useState } from "react";
import { HomeFooter } from "./home_footer";
import { DropdownOptions } from "./dropdown_options";
import { HomePageInputField } from "./home_page_input_field";

export function HomePage(){
    const [currentPage, setCurrentPage] = useState(1)
    const [sortPattern, setSortPattern] = useState(homePageSortDropdownButtonsTitles[0])
    const [searchPattern, setSearchPattern] = useState("")

    let renderedCards = useMemo(() => {
        let result = cards
        if (searchPattern != "") result = cards.filter((card) => card.title.includes(searchPattern))

        switch (sortPattern) {
            case homePageSortDropdownButtonsTitles[0]: result.sort((a, b) => (-1) * compareDates(a.date, b.date)); break;
            case homePageSortDropdownButtonsTitles[1]: result.sort((a, b) => compareDates(a.date, b.date)); break;
            case homePageSortDropdownButtonsTitles[2]: result.sort((a, b) => a.title > b.title ? 1 : (a.title < b.title ? -1 : 0)); break;
            case homePageSortDropdownButtonsTitles[3]: result.sort((a, b) => a.title < b.title ? 1 : (a.title > b.title ? -1 : 0)); break;
        }
        setCurrentPage(1)           //???
        return result
    }, [sortPattern, searchPattern])

    const cardsOnPage = 8
    const pages = Math.floor(renderedCards.length / cardsOnPage) + 1
    const thisPage = renderedCards.slice((currentPage - 1) * cardsOnPage, (currentPage - 1) * cardsOnPage + 8)

    const dropdownOptions = homePageSortDropdownButtonsTitles.map((title, index) => {
        return {title: title, onClickHandler: () => { setSortPattern(homePageSortDropdownButtonsTitles[index]) }}
    })

    return(
        <div>
            <Navbar></Navbar>
            <HomePageSubHeader></HomePageSubHeader>
            <div className="w-full mb-16 pt-16 px-4 lg:py-24 lg:px-28">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <HomePageInputField onSubmit={setSearchPattern} placeholder={search} style="w-full lg:w-[280px] h-11 rounded-lg border-[#D0D5DD] border-[1px] p-[14px]"></HomePageInputField>
                    <DropdownOptions title="Order by" options={dropdownOptions} additionalStyle={"w-full lg:w-[280px] h-11 mt-7 lg:mt-0"}></DropdownOptions>
                </div>
                <div className="w-full mt-12 sm:grid sm:grid-cols-2 2xl:grid-cols-3 sm:gap-5">
                    {thisPage.map((element, index) => <div className="box" key={index}><HomePageBlogCardRounded card={element} key={index}></HomePageBlogCardRounded></div>)}
                </div>
                <CardPagesSwitcher currentPage={currentPage} maxPage={pages} setCurrentPage={setCurrentPage}></CardPagesSwitcher>
            </div>
            <HomeFooter></HomeFooter>
        </div>
    )
}

function compareDates(a: string, b: string){
    let temp = a.split('.')
    const date1 = new Date(`${temp[2]}-${temp[1]}-${temp[0]}`)
    temp = b.split('.')
    const date2 = new Date(`${temp[2]}-${temp[1]}-${temp[0]}`)
    return date1 > date2 ? 1 : (date2 > date1 ? -1 : 0)
}