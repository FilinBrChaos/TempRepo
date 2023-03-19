interface CategoriesPageBlogCardSquareProps {
    card?: {
        imageName: string;
        date: string;
        tegs: string;
        title: string;
        short_description: string;
        creator: string;
    }
    extended?: boolean
}

export function CategoriesPageBlogCardSquare(props: CategoriesPageBlogCardSquareProps){
    return(
        props.card ?
        <button className={"flex content-start mb-12" + (props.extended ? " flex-row" : " w-full flex-col")}>
            <img src={require("../assets/images/blogs/" + props.card.imageName)} alt="" 
                 className={props.extended ? "w-[560px] h-[320px] mr-8 object-cover" : "w-full h-[200px] lg:h-[240px] object-cover"} />
            <div className={"flex flex-col content-start" + (props.extended ? " w-[280px]" : " w-full")}>
                <div className={"flex flex-row w-min p-1 bg-[#F9F5FF] text-[#6941C6] rounded-2xl items-center mb-4" + (props.extended ? "" : " mt-6")}>
                    <div className="text-xs font-medium w-max px-2 py-[2px] bg-[#FFFFFF] rounded-2xl mr-2">{props.card.tegs.split(',')[0]}</div>
                    <div className="text-xs font-medium w-max mr-2">8 min read</div>
                </div>

                <div className="flex flex-row justify-between items-start">
                    <p className={"font-semibold text-start truncate first-letter:capitalize" + (props.extended ? " text-3xl" : " text-xl lg:text-2xl")}>{props.card.title}</p>
                    <img src={require("../assets/icons/next.png")} alt="" className={props.extended ? "hidden" : "w-5 h-5 -rotate-45"}/>
                </div>

                <p className="mt-2 text-base text-start font-normal first-letter:capitalize text-[#475467]">{props.card.short_description}</p>

                <div className="flex flex-row items-center mt-6">
                    <img src={require("../assets/images/blogs/6.jpg")} alt="" className="mr-3 w-10 h-10 rounded-full object-cover"/>
                    <div className="flex flex-col">
                        <div className="text-sm font-semibold">{props.card.creator}</div>
                        <div className="text-sm font-normal text-[#475467] text-start">{props.card.date}</div>
                    </div>
                </div>
            </div>
        </button>
        : null
    )
}