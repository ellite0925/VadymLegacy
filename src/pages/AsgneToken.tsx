import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Sidebar from '../layout/Sidebar';
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import chaos from "../assets/home/discover/chaos.png"
import chaos_dark from "../assets/home/discover/chaos-dark.png"
import graph from "../assets/asgne/graph.png"
import top_border from "../assets/asgne/top-border.png"
import YellowButton from "../components/common/YellowButton"

function AsgneToken() {
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
        <img className="hidden md:inline dark:hidden w-full" src={chaos} />
        <img className="hidden md:dark:inline w-full" src={chaos_dark} />
        <div className="relative md:absolute left-0 top-0 w-full h-full flex justify-center items-center my-12 md:my-0 md:mx-0">
          <div className="w-2/3 sm:w-fit rounded-[20px] opacity-[62] pt-10 pb-10 sm:pl-14 sm:pr-12 flex space-x-16 dark:bg-[#19191F] dark:bg-opacity-[72%] dark:border-2 dark:border-[#F2F2F2] dark:border-opacity-50" style={{boxShadow: "0px 4px 40px 0px #00000026"}}>
            <div className="w-full sm:w-auto flex flex-col items-center">
              <p className="font-noto font-normal text-2xl leading-[64px]">{t("Total Balance")}:</p>
              <p className="font-trispace font-bold text-[40px] leading-[64px]">5,670.00</p>
              <p className="font-noto font-normal text-xl leading-[64px] mb-8">{t("equivalent")} $398.77</p>
              <YellowButton width={200} height={50} title="Buy ASNGE" />
            </div>
            <div className="sm:flex items-center justify-center opacity-100 hidden">
              <div className="relative">
                <img src={graph} />
                <div className="absolute top-0">
                  <img src={top_border} />
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

export default AsgneToken

