import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/layout/header/logo.png";
import divider from "../assets/layout/header/divider.png";
import divider_dark from "../assets/layout/header/divider-dark.png";
import down_arrow from "../assets/layout/header/down-arrow.png";
import down_arrow_dark from "../assets/layout/header/down-arrow-dark.png";
import menu from "../assets/layout/header/menu.svg"
import menu_dark from "../assets/layout/header/menu-dark.svg"

interface HeaderProps {
  closeSidebar?: () => void
}

function Header(props: HeaderProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className="md:container mx-auto flex flex-col px-0 md:px-0">
        <div className="flex justify-between items-center mt-8 mb-8 px-2 md:px-0">
          <div onClick={() => {navigate('/')}} className="cursor-pointer flex space-x-2 md:space-x-4 items-center">
            <img className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]" src={logo} />
            <p className="hidden xl:block text-2xl md:text-4xl font-suburbia font-light leading-6">legacytoken</p>
          </div>
          <div className="flex space-x-2 md:space-x-6 items-center">
            <div className="space-x-6 items-center text-sm font-trispace font-normal leading-4 hidden xl:flex">
              <div className="flex items-center relative group">
                <div className='flex items-center cursor-pointer'>
                  <p className="mr-2 cursor-pointer py-3">{t("Collection")}</p>
                  <img className="inline dark:hidden" src={down_arrow} />
                  <img className="hidden dark:inline" src={down_arrow_dark} />
                </div>
                <div className="absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-10 left-0 z-20 w-[200px] border-[0.5px] border-black border-opacity-10" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
                  <p className="font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer" onClick={() => {navigate('/info_collection')}}>{t("Collections")}</p>
                  <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
                  <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer">{t("Proof Of Publishing")}</p>
                </div>
              </div>
              <p className='cursor-pointer'>{t("Marketplace")}</p>
              <p onClick={() => {navigate('/asgne_token')}} className='cursor-pointer'>{t("ASNGE Token")}</p>
              <p className='cursor-pointer'>{t("Articles")}</p>
              <p className='cursor-pointer'>{t("Metaverse")}</p>
              <div className="flex items-center relative group">
                <div className='flex items-center cursor-pointer'>
                  <p className="mr-2 py-3">{t("About")}</p>
                  <img className="inline dark:hidden" src={down_arrow} />
                  <img className="hidden dark:inline" src={down_arrow_dark} />
                </div>
                <div className="absolute group-hover:block hidden bg-white dark:bg-[#313131] rounded-xl p-2 top-10 left-0 z-20 w-[200px] border-[0.5px] border-black border-opacity-10" style={{boxShadow: "0px 10px 15px 0px #0000000D, 0px 25px 37px 0px #0000001A"}}>
                  <p className="font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer">{t("About ASNGE Project")}</p>
                  <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
                  <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer">{t("Manifesto")}</p>
                  <div className="mt-1 w-full h-[1px] bg-[#E4E4EB] dark:bg-[#4F4F4F]"></div>
                  <p className="mt-1 font-trispace font-normal text-sm leading-5 pl-2 py-3 cursor-pointer">{t("Partners")}</p>
                </div>
              </div>
              <p className='cursor-pointer'>{t("FAQ")}</p>
            </div>
            <div className='hidden xl:block'>
              <img className="inline dark:hidden" src={divider} />
              <img className="hidden dark:inline" src={divider_dark} />
            </div>
            <div className="flex flex-col cursor-pointer hover:text-[#F38E0C] dark:text-white">
              <p className="font-news font-normal text-lg leading-5 border-white hover:border-b-2 hover:border-[#F38E0C] py-2.5 transition-all duration-300 ease-in-out">{t("Connect Wallet")}</p>
              {/* <img className="inline dark:hidden" src={underline} />
              <img className="hidden dark:inline" src={underline_dark} /> */}
            </div>
            <button className="block xl:hidden" onClick={() => {
              if (props.closeSidebar != undefined)
                props.closeSidebar()
            }}>
              <img className="inline dark:hidden" src={menu} />
              <img className="hidden dark:inline" src={menu_dark} />
            </button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#E4E4EB]"></div>
      </div>
    </>
  )
}

export default Header

