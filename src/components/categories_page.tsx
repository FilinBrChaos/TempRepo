import { blogCategories, categoriesPageSubHeaderDescription, categoriesPageSubHeaderTitle, ourBlog, viewAll } from "../constants/pages_data";
import { DropdownOptions } from "./dropdown_options";
import { Navbar } from "./navbar";
import cards from '../data/blogs_data.json'
import { HomeFooter } from "./home_footer";
import { CategoriesPageBlogCardSquare } from "./categories_page_blog_card_square";
import { useMemo, useState } from "react";
import { CategoriesPageCategoriesSideSelector } from "./categories_page_categories_side_selector";
import { CardPagesSwitcher } from "./card_pages_switcher";

export function CategoriesPage(){
    const [filterCategory, setFilterCategory] = useState(viewAll);
    const [currentPage, setCurrentPage] = useState(1)

    const renderedCards = useMemo(() => {
        if (filterCategory == viewAll) return cards
        let result = cards.filter((card) => card.tegs.includes(filterCategory))
        return result
    },[filterCategory])

    const cardsOnPage = 8
    const pages = Math.floor(renderedCards.length / cardsOnPage) + 1
    const thisPage = renderedCards.slice((currentPage - 1) * cardsOnPage, (currentPage - 1) * cardsOnPage + 8)

    let categoriesList: string[] = useMemo(() => {
        let allCategories: string[] = [viewAll];
        for (let i = 0; i < cards.length; i++) allCategories = allCategories.concat(cards[i].tegs.split(','))
        
        let result = allCategories.filter((categorie, index, self) => {
        return self.indexOf(categorie) === index
        })
        return result
    }, [])
    
    return(
        <div className="w-full">
            <Navbar></Navbar>
            <div className=" px-4 pt-16 lg:px-28 lg:pt-24">
                <p className="text-sm lg:text-base font-semibold text-[#7F56D9]">{ourBlog}</p>
                <p className="text-4xl lg:text-5xl font-semibold mt-3">{categoriesPageSubHeaderTitle}</p>
                <p className="text-lg lg:text-xl font-normal mt-6">{categoriesPageSubHeaderDescription}</p>
            </div>
            <div className="px-4 lg:px-28 mt-16 mb-16 lg:mt-24">
                <div className="lg:hidden">
                    <div className="mb-12">
                        <DropdownOptions title="View all" additionalStyle=" w-full"
                        options={categoriesList.map((item, index) => {return {title: item, onClickHandler: () => { setFilterCategory(categoriesList[index]) }}})}></DropdownOptions>
                    </div>
                    <div className="w-full sm:grid sm:grid-cols-2 sm:gap-5">
                        {thisPage!.map((card, index) => <CategoriesPageBlogCardSquare card={card} key={index}></CategoriesPageBlogCardSquare>)}
                    </div>
                </div>

                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5">
                    <div className="flex flex-col items-start">
                        <input type="text" className="h-11 w-full rounded-lg border-[#D0D5DD] border-[1px] p-[14px]" placeholder="Search" />
                        <p className=" text-sm font-semibold text-[#6941C6] mt-9 mb-5">{blogCategories}</p>
                        <CategoriesPageCategoriesSideSelector categoriesList={categoriesList} 
                                                              selected={filterCategory} 
                                                              setSelected={setFilterCategory}
                                                              onSelectedChanged={() => {setCurrentPage(1)}}></CategoriesPageCategoriesSideSelector>
                    </div>
                    <div className="ml-16 w-max lg:w-auto lg:col-span-3 2xl:col-span-4">
                        <CategoriesPageBlogCardSquare card={thisPage.shift()} extended={true}></CategoriesPageBlogCardSquare>
                        <div className="w-full grid sm:grid-cols-2 2xl:grid-cols-3 gap-5">
                            {thisPage!.map((card, index) => <CategoriesPageBlogCardSquare card={card} key={index}></CategoriesPageBlogCardSquare>)}
                        </div>
                    </div>
                </div>
                <CardPagesSwitcher currentPage={currentPage} maxPage={pages} setCurrentPage={setCurrentPage}></CardPagesSwitcher>
            </div>
            <HomeFooter light={true}></HomeFooter>
        </div>
    )
}
