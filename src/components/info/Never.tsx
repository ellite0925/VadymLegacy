import { useTranslation } from 'react-i18next';
import yellow_star from "../../assets/info/never/yellow-star.png";
import orange_star from "../../assets/info/never/orange-star.png";
import black_star from "../../assets/info/never/black-star.png";
import YellowButton from "../common/YellowButton";

function Never() {
  const { t } = useTranslation();

  return (
    <>
      <div className="md:container mx-auto py-12 md:py-20 lg:py-24">
        <div className="mx-4 md:mx-0 px-2 flex flex-col items-center border-[#D7D7D7] dark:border-white dark:border-opacity-20 border-2 rounded-[32px] py-8 md:py-16 relative">
          <div className="flex justify-center">
            <p className="font-trispace font-semibold text-3xl md:text-[53px] leading-[64px]">{t("Never")}&nbsp;</p>
            <p className="font-trispace font-semibold text-3xl md:text-[53px] leading-[64px] text-[#F38E0C]">{t("miss a drop!")}</p>
          </div>
          <p className="mt-5 font-noto font-normal text-lg leading-7 text-[#636363] dark:text-[#ECECEC] text-center md:text-left">{t("Subscribe to our super-rare and exclusive drops & collectibles.")}</p>
          <div className="flex space-x-0 md:space-x-3 mt-9 flex-col md:flex-row">
            <input className="bg-[#F7F9FB] dark:bg-[#3C3E41] rounded-[50px] pl-6 w-[200px] h-[50px] md:h-auto" type="text" placeholder="Enter your email" />
            <div className="hidden md:block">
              <YellowButton width={200} height={50} title="Subscribe" shadow />
            </div>
            <div className="block md:hidden mt-4">
              <YellowButton width={200} height={50} title="Subscribe" shadow />
            </div>
          </div>
          <img className="absolute left-[4%] bottom-[25%] hidden md:inline" src={yellow_star} />
          <img className="absolute left-[13%] bottom-[12%] hidden md:inline" src={orange_star} />
          <img className="absolute top-[12%] right-[8%] hidden md:inline" src={black_star} />
        </div>
      </div>
    </>
  )
}

export default Never

