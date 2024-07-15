import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Sidebar from '../layout/Sidebar';
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import chaos from "../assets/home/discover/chaos.png"
import chaos_dark from "../assets/home/discover/chaos-dark.png"
import arrow_right from "../assets/full/arrow-right.png"
import YellowButton from "../components/common/YellowButton"
import Card from "../components/full/Card"

import grid1 from "../assets/full/grid1.png"
import grid2 from "../assets/full/grid2.png"
import grid3 from "../assets/full/grid3.png"
import grid4 from "../assets/full/grid4.png"
import grid5 from "../assets/full/grid5.png"
import grid6 from "../assets/full/grid6.png"
import grid7 from "../assets/full/grid7.png"
import grid8 from "../assets/full/grid8.png"
import grid9 from "../assets/full/grid9.png"
import grid10 from "../assets/full/grid10.png"
import grid11 from "../assets/full/grid11.png"
import grid12 from "../assets/full/grid12.png"
import grid13 from "../assets/full/grid13.png"
import grid14 from "../assets/full/grid14.png"
import grid15 from "../assets/full/grid15.png"
import grid16 from "../assets/full/grid16.png"
import grid17 from "../assets/full/grid17.png"
import grid18 from "../assets/full/grid18.png"
import grid19 from "../assets/full/grid19.png"
import grid20 from "../assets/full/grid20.png"

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
          <div className="md:container mx-auto py-12 md:py-24">
            <p className="mt-6 text-center font-trispace font-semibold text-3xl leading-8 px-4 md:px-0">{t("UNPRUNABLE UTXO ART, BECAUSE SATS DON'T EXIST")}</p>
            <div className='w-full flex justify-center'>
              <div className="mt-16 bg-opacity-62 dark:bg-[#19191F] dark:bg-opacity-[62%] py-6 pl-12 pr-8 flex justify-between items-center rounded-[10px] mb-16 flex-col md:flex-row w-2/3 md:w-full space-y-4 md:space-y-0" style={{boxShadow: "0px 4px 40px 0px #00000026"}}>
                <div className="flex space-x-4 md:space-x-12 items-center flex-col md:flex-row space-y-4 md:space-y-0">
                  <div className="flex flex-col space-y-1 items-center md:items-start">
                    <p className="font-news font-semibold text-lg leading-5">{t("Name")}</p>
                    <p className="font-trispace font-normal text-lg leading-5 text-[#969696] dark:text-[#ECECEC] text-center md:text-left">{t("Stamp / Creator / TX / CPID")}</p>
                  </div>
                  <div className="w-[1px] h-[60px] bg-[#969696] hidden md:block"></div>
                  <div className="flex flex-col space-y-1 items-center md:items-start">
                    <p className="font-news font-semibold text-lg leading-5">{t("Stamps")}</p>
                    <p className="font-trispace font-normal text-lg leading-5 text-[#969696] dark:text-[#ECECEC]">{t("Stamps: Classic")}</p>
                  </div>
                </div>
                <YellowButton title="Search" width={200} height={50} />
              </div>
            </div>

            {/* grid start */}
            <div className="grid grid-cols-2 grid-rows-10 sm:grid-cols-4 sm:grid-rows-5 md:grid-cols-5 md:grid-rows-4 gap-x-5 gap-y-5 px-4 md:px-0">
              {/* Your grid items go here */}
              <Card image={grid1} title="ArtCrypto" eth="0.25" isBuyNow />
              <Card image={grid2} title="Pixel" eth="0.35" sale="0.00" />
              <Card image={grid3} title="ArtGallery" eth="0.25" sale="0.68" />
              <Card image={grid4} title="Stamp" eth="0.45" sale="0.00" />
              <Card image={grid5} title="Art" eth="0.25" sale="0.081" />
              
              <Card image={grid6} title="ArtCrypto" eth="0.25" isBuyNow />
              <Card image={grid7} title="Pixel" eth="0.35" sale="0.00" />
              <Card image={grid8} title="ArtGallery" eth="0.25" sale="0.68" />
              <Card image={grid9} title="Stamp" eth="0.45" sale="0.00" />
              <Card image={grid10} title="Art" eth="0.25" sale="0.081" />
              
              <Card image={grid11} title="ArtCrypto" eth="0.25" isBuyNow />
              <Card image={grid12} title="Pixel" eth="0.35" sale="0.00" />
              <Card image={grid13} title="ArtGallery" eth="0.25" sale="0.68" />
              <Card image={grid14} title="Stamp" eth="0.45" sale="0.00" />
              <Card image={grid15} title="Art" eth="0.25" sale="0.081" />
              
              <Card image={grid16} title="ArtCrypto" eth="0.25" isBuyNow />
              <Card image={grid17} title="Pixel" eth="0.35" sale="0.00" />
              <Card image={grid18} title="ArtGallery" eth="0.25" sale="0.68" />
              <Card image={grid19} title="Stamp" eth="0.45" sale="0.00" />
              <Card image={grid20} title="Art" eth="0.25" sale="0.081" />
              {/* Add more grid items as needed */}
            </div>
            {/* grid end */}

            <div className="mt-12 md:mt-16 flex justify-center items-center">
              <button className="bg-[#F38E0C] rounded-full w-[32px] h-[32px] font-trispace font-bold text-sm leading-5 mr-5 text-white">1</button>
              <button className="font-trispace font-bold text-sm leading-5 mr-4">2</button>
              <button className="font-trispace font-bold text-sm leading-5 mr-4">3</button>
              <div className="flex space-x-1 items-center">
                <button className="font-trispace font-bold text-sm leading-5">NEXT</button>
                <img className="cursor-pointer" src={arrow_right} />
              </div>
            </div>

            <div className="bg-[#E4E4EB] dark:bg-[#626264] h-[1px] w-full my-8"></div>
            <div className="flex justify-center">
              <YellowButton title="Load More" width={200} height={50} shadow />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleStamp

