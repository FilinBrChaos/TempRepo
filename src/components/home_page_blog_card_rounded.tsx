import { readPost } from "../constants/pages_data"
import cards from "../data/blogs_data.json"

interface HomePageBlogCardRoundedProps {
    card: {
        imageName: string;
        date: string;
        tegs: string;
        title: string;
        short_description: string;
        creator: string;
    }
}

export function HomePageBlogCardRounded(props: HomePageBlogCardRoundedProps){
    return(
        <button className="w-full flex flex-col content-start min-h-[480px]
                            rounded-2xl overflow-hidden mb-8 border-[#EAECF0] border">
            <div className="w-full">
                <img src={require("../assets/images/blogs/" + props.card.imageName)} alt="" className="w-full h-60 lg:h-72 object-cover" />
                <div className="flex flex-row justify-between p-4 h-[72px] -mt-[72px] backdrop-blur-md text-white">
                    <div className=" text-start">
                        <p className=" text-sm font-semibold">{props.card.creator}</p>
                        <p className=" text-sm font-normal">{props.card.date}</p>
                    </div>
                    <p>{props.card.tegs.split(',')[0]}</p>
                </div>
            </div>
            <div className="w-full px-6 py-8 flex flex-col h-full text-start">
                <p className="w-full text-xl lg:text-2xl font-semibold text-ellipsis truncate first-letter:capitalize text-[#101828]">{props.card.title}</p>
                <p className="mt-2 text-base font-normal first-letter:capitalize text-[#475467]">{props.card.short_description}</p>
                <p className="flex flex-row items-center mt-6 text-[#6941C6] text-base font-semibold">{readPost} <img src={require("../assets/icons/diagonal-arrow.png")} alt="" className="ml-2 w-4 h-4"/></p>
            </div>
        </button>
    )
}