import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Sidebar from '../layout/Sidebar';
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import chaos from "../assets/home/discover/chaos.png"
import chaos_dark from "../assets/home/discover/chaos-dark.png"
import collection from "../assets/single/collection.png"
import creator from "../assets/single/creator.png"
import tetris from "../assets/single/tetris.png"
import copy_icon from "../assets/single/copy-icon.png"
import copy_icon_dark from "../assets/single/copy-icon-dark.png"
import like from "../assets/single/like.png"
import download from "../assets/single/download.png"
import twitter from "../assets/single/twitter.png"
import copy from "../assets/single/copy.png"
import like_dark from "../assets/single/like-dark.png"
import download_dark from "../assets/single/download-dark.png"
import twitter_dark from "../assets/single/twitter-dark.png"
import copy_dark from "../assets/single/copy-dark.png"
import YellowButton from "../components/common/YellowButton"

function SingleStamp() {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
      <Header closeSidebar={toggleSidebar} />
      <div className="relative">
        <img src={chaos} className="w-full absolute z-0 inline dark:hidden" />
        <img src={chaos_dark} className="w-full absolute z-0 hidden dark:inline" />
        <div className="w-full h-full relative z-10">
          <div className="md:container mx-auto py-16 px-4 md:px-0">
            <p className="font-trispace font-medium text-center text-3xl md:text-left md:text-4xl leading-[46px]">{t("Stamp")} 67114 A10028994648006722000</p>
            <p className="mt-3 font-noto font-normal text-2xl leading-9 text-center md:text-left">{t("Total Volume")}: 0.00567000 $398.77</p>
            <div className="mt-9 flex space-x-0 lg:space-x-12 flex-col lg:flex-row">
              <div className=" basis-1 lg:basis-1/2">
                <div className="flex space-y-8 md:space-y-0 space-x-0 md:space-x-5 flex-col md:flex-row">
                  <div className="basis-1/2 flex space-x-4">
                    <div className="flex-none">
                      <img src={collection} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="font-noto font-normal text-base leading-6 text-[#636363] dark:text-[#ECECEC]">{t("Collection")}</p>
                      <p className="font-trispace font-bold text-xl leading-6">{t("PIXEL")}</p>
                    </div>
                  </div>
                  <div className="basis-1/2 flex space-x-4">
                    <div className="flex-none">
                      <img src={creator} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="font-noto font-normal text-base leading-6 text-[#636363]">Creator</p>
                      <p className="font-trispace font-bold text-xl leading-6">1K6x...JyQ9bFE</p>
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-[#636363] dark:text-[#ECECEC] font-normal text-base leading-6">Magna montes pharetra ac libero non aliquet. Orci neque mi justo scelerisque in. Nibh amet egestas mattis at consectetur vulputate lacus nisi molestie. </p>
                <div className="mt-8 flex space-x-0 md:space-x-10 space-y-4 md:space-y-0 flex-col md:flex-row">
                  <div className="basis-1 md:basis-1/2 flex flex-col space-y-2 items-center">
                    <p className="font-noto font-normal text-base leading-7">{t("Current Price")}</p>
                    <div className="flex justify-between w-full">
                      <p className="text-[#F38E0C] font-trispace text-[26px] leading-[31px]">0.25 ETH</p>
                      <p className="font-trispace text-[20px] leading-[29px]">($3,429.65)</p>
                    </div>
                  </div>
                  <div className="basis-1 md:basis-1/2 flex flex-col space-y-2 items-center">
                    <p className="font-noto font-normal text-base leading-7">{t("Top Offer")}</p>
                    <div className="flex justify-between w-full">
                      <p className="text-[#F38E0C] font-trispace text-[26px] leading-[31px]">0.15 ETH</p>
                      <p className="font-trispace text-[20px] leading-[29px]">($3,070.43)</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <YellowButton title="Connect To MINT" height={50} fullWidth shadow />
                </div>
                <div className="mt-8 rounded-xl bg-[#D9E0EC] dark:bg-black bg-opacity-20 border-2 border-opacity-50 border-[#F2F2F2] p-6 flex flex-col space-y-[10px]">
                  <p className="font-news font-bold text-2xl leading-7 opacity-100">
                    {t("Information")}
                  </p>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("Stamp number")}</p>
                    <p className="font-trispace font-normal text-base leading-6">#67114</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("Asset Name")}</p>
                    <div className="flex space-x-2 items-center">
                      <p className="font-trispace font-normal text-base leading-6">A10028994648006722000</p>
                      <img className="inline dark:hidden" src={copy_icon} />
                      <img className="hidden dark:inline" src={copy_icon_dark} />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("Issuer")}</p>
                    <div className="flex space-x-2 items-center">
                      <p className="font-trispace font-normal text-base leading-6">1K6xT...3Rggi</p>
                      <img className="inline dark:hidden" src={copy_icon} />
                      <img className="hidden dark:inline" src={copy_icon_dark} />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("Total Supply")}</p>
                    <p className="font-trispace font-normal text-base leading-6">13</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("Divisible")}</p>
                    <p className="font-trispace font-normal text-base leading-6">{t("No")}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("Locked")}</p>
                    <p className="font-trispace font-normal text-base leading-6">{t("Yes")}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("keyburn")}</p>
                    <p className="font-trispace font-normal text-base leading-6">{t("No")}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("Block")}</p>
                    <div className="flex space-x-2 items-center">
                      <p className="font-trispace font-normal text-base leading-6">794220</p>
                      <img className="inline dark:hidden" src={copy_icon} />
                      <img className="hidden dark:inline" src={copy_icon_dark} />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("Destructions")}</p>
                    <p className="font-trispace font-normal text-base leading-6">x8</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-trispace font-normal text-base leading-6">{t("Transaction")}</p>
                    <div className="flex space-x-2 items-center">
                      <p className="font-trispace font-normal text-base leading-6">9ad0b...5ab5b</p>
                      <img className="inline dark:hidden" src={copy_icon} />
                      <img className="hidden dark:inline" src={copy_icon_dark} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1 lg:basis-1/2">
                <img src={tetris} className="w-full hidden lg:inline" />
                <div className="mt-8 flex justify-between items-center">
                  <p className="font-noto font-normal text-base leading-7">{t("Views")}: 10k</p>
                  <div className="flex space-x-4">
                    <img className="inline dark:hidden" src={like} />
                    <img className="inline dark:hidden" src={download} />
                    <img className="inline dark:hidden" src={twitter} />
                    <img className="inline dark:hidden" src={copy} />
                    <img className="hidden dark:inline" src={like_dark} />
                    <img className="hidden dark:inline" src={download_dark} />
                    <img className="hidden dark:inline" src={twitter_dark} />
                    <img className="hidden dark:inline" src={copy_dark} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleStamp

