import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import close from "../assets/layout/header/x.svg"
import down_arrow from "../assets/layout/header/down-arrow.png";

interface CardProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar(props: CardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div className={`xl:hidden block py-8 text-black fixed top-0 left-0 h-full w-64 bg-[#F7F9FB] dark:bg-[#F38E0C] z-50 transition-transform duration-300 transform ${props.isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end mb-12 mr-4">
          <button onClick={props.closeSidebar}>
            <img src={close} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 relative">
          <div className='relative'>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} >
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className="bg-transparent">
                        <div className="w-full flex justify-between items-center hover:bg-gray-200 cursor-pointer">
                          <p className="pl-4 font-trispace font-normal text-sm leading-5">{t("Collection")}</p>
                          <img className='accordion_arrow_down pr-4' src={down_arrow} />
                          {/* <img className='accordion_arrow_up' src={arrow_up} /> */}
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='p-0 pt-4 pl-8'>
                    <p className='hover:bg-gray-200 cursor-pointer font-trispace font-normal text-sm leading-5'>
                      {t("Collections")}
                    </p>
                    <p className='hover:bg-gray-200 cursor-pointer mt-4 font-trispace font-normal text-sm leading-5'>
                      {t("Proof Of Publishing")}
                    </p>
                  </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Marketplace")}</p>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer" onClick={() => {navigate('/asgne_token')}}>{t("ASNGE Token")}</p>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Articles")}</p>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Metaverse")}</p>
          <div className='relative'>
            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} >
              <AccordionItem>
                  <AccordionItemHeading>
                      <AccordionItemButton className="bg-transparent">
                        <div className="w-full flex justify-between items-center hover:bg-gray-200 cursor-pointer">
                          <p className="pl-4 font-trispace font-normal text-sm leading-5">{t("About")}</p>
                          <img className='accordion_arrow_down pr-4' src={down_arrow} />
                          {/* <img className='accordion_arrow_up' src={arrow_up} /> */}
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className='p-0 pt-4 pl-8'>
                    <p className='hover:bg-gray-200 cursor-pointer font-trispace font-normal text-sm leading-5'>
                      {t("About ASNGE Project")}
                    </p>
                    <p className='hover:bg-gray-200 cursor-pointer mt-4 font-trispace font-normal text-sm leading-5'>
                      {t("Manifesto")}
                    </p>
                    <p className='hover:bg-gray-200 cursor-pointer mt-4 font-trispace font-normal text-sm leading-5'>
                      {t("Partners")}
                    </p>
                  </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("FAQ")}</p>
          <p className="pl-4 font-trispace font-normal text-sm leading-5 hover:bg-gray-200 cursor-pointer">{t("Connect Wallet")}</p>
        </div>
      </div>
    </>
  )
}

export default Sidebar

