import { homePageSubHeaderTextData } from "../constants/pages_data"

export function HomePageSubHeader(){
    return(
        <div className="bg-[#F9FAFB] py-16 px-4 lg:py-24 lg:px-28">
            <p className="text-[#7F56D9] text-sm lg:text-base font-semibold">{homePageSubHeaderTextData.subTitle}</p>
            <p className="text-4xl lg:text-5xl font-semibold mt-3">{homePageSubHeaderTextData.title}</p>
            <p className="text-lg lg:text-xl font-medium mt-4 text-[#475467]">{homePageSubHeaderTextData.description}</p>
            <div className="flex flex-col lg:flex-row mt-8 lg:mt-10">
                <div className="w-full lg:w-[360px] ">
                    <input type="text" placeholder="Enter your email" className="w-full rounded-lg h-12 p-[14px] border-[#D0D5DD] border-[1px]"/>
                    <p className="text-sm font-normal mt-[6px] text-[#475467]">{homePageSubHeaderTextData.privacyPolicyNotice} {homePageSubHeaderTextData.provacyPolicyLink}</p>
                </div>
                <button className=" w-full mt-4 lg:mt-0 lg:ml-4 lg:w-32 rounded-lg h-12 bg-[#7F56D9] font-semibold text-base text-white">{homePageSubHeaderTextData.buttonTitle}</button>
            </div>
        </div>
    )
}