import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from "../utils/i18n";
import LegacyAccordion from "../components/layout/footer/LegacyAccordion";
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from "../assets/layout/header/logo.png";
import us from "../assets/layout/footer/us.png";
import sun from "../assets/layout/footer/sun.svg";
import moon from "../assets/layout/footer/moon.svg";

function Footer() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("Eng");
  const [isDark, setIsDark] = useState("false");

  const handleThemeToggle = () => {
    if (isDark == "false") {
      document.documentElement.classList.add('dark');
      setIsDark("true");
      localStorage.setItem('isDark', "true");
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark("false");
      localStorage.setItem('isDark', "false");
    }
    // document.documentElement.classList.toggle('dark');
  }

  useEffect(() => {
    // Get the specific item from localStorage
    const language = localStorage.getItem('language');
    const local_isDark = localStorage.getItem('isDark');
    
    // Use the specific item as needed
    if (local_isDark) {
      // Do something with the specific item
      setIsDark(local_isDark);
      if (local_isDark == "false") {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    } else {
      localStorage.setItem('isDark', "false");
      setIsDark("false");
    }

    // Use the specific item as needed
    if (language) {
      // Do something with the specific item
      i18n.changeLanguage(language);
      setLanguage(language);
    } else {
      localStorage.setItem('language', 'Eng');
      i18n.changeLanguage('Eng');
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
    const selectedLanguage = event.target.value;
    localStorage.setItem('language', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <div className="bg-[#F7F9FB] dark:bg-[#F38E0C] px-4 md:px-0">
        <div className="md:container mx-auto py-12 md:py-24 text-black dark:text-black">
          <p className="font-trispace text-xl md:text-3xl font-medium leading-8 pl-4 md:pl-0">{t("Frequently asked questions")}</p>
          <div className="mt-12 flex space-y-0 md:space-y-0 md:space-x-24 w-full flex-col md:flex-row">
            <div className="md:basis-1/2 basis-1">
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="How do I register?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="What is LegacyToken?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#151212] w-full h-[0.5px]"></div>
              <LegacyAccordion title="How do I place a bid?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
            </div>
            <div className="basis-1/2">
              <div className="bg-[#282828] w-full h-[0.5px] hidden md:block"></div>
              <LegacyAccordion title="Why do I need to verify my identity?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="What is on NFTs?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
              <LegacyAccordion title="How can I buy ETH?" description="Proin elementum nam ac quam cras semper fermentum. Adipiscing diam ut leo nam consequat fermentum. Habitant cras enim nunc vestibulum purus egestas. Vitae auctor massa eros lacus hendrerit. Eu viverra sit enim odio ut." />
              <div className="bg-[#282828] w-full h-[0.5px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container mx-auto pt-16 flex flex-col space-y-6">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="font-noto font-normal text-base leading-6">
            <div className="flex space-x-5 items-center justify-center lg:justify-start">
              <img className="w-[25px] lg:w-[50px] h-[25px] lg:h-[50px]" src={logo} />
              <p className="font-suburbia text-2xl lg:text-5xl font-light leading-6">legacytoken</p>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center lg:block">
              <p>Magna neque cursus cras</p>
              <p>integer vitae a posuere eget.</p>
            </div>
            <div className="mt-5 flex justify-center lg:block">
              <p>{t("Join our community")}</p>
            </div>
            <div className="mt-6 flex space-x-4 items-center justify-center lg:justify-start">
              <button onClick={() => {window.location.href = 'https://discord.com'}}>
                <FaDiscord
                  className='cursor-pointer text-black dark:text-white hover:text-[#F38E0C]'
                  size={32}
                />
              </button>
              <button onClick={() => {window.location.href = 'https://twitter.com'}}>
                <FontAwesomeIcon size='2x' className="text-black dark:text-white hover:text-[#F38E0C]" icon={faXTwitter} />
              </button>
              <button onClick={() => {window.location.href = 'https://instagram.com'}}>
                <FaInstagram
                  className='cursor-pointer text-black dark:text-white hover:text-[#F38E0C]'
                  size={32}
                />
              </button>
            </div>
          </div>
          <div className="flex space-x-8 lg:space-x-32 items-start justify-center mt-12 lg:mt-0">
            <div className='flex flex-col items-start'>
              <p className="font-trispace text-xl font-semibold leading-8">{t("Explore")}</p>
              <button className="hover:text-[#E8A241] mt-6" onClick={() => {window.location.href = 'https://example.com'}}>
                <p className="font-trispace text-base font-normal leading-6">{t("Partners")}</p>
              </button>
              <button className="hover:text-[#E8A241] mt-5" onClick={() => {window.location.href = 'https://example.com'}}>
                <p className="font-trispace text-base font-normal leading-6">{t("Contact us")}</p>
              </button>
              <button className="hover:text-[#E8A241] mt-5" onClick={() => {window.location.href = 'https://example.com'}}>
                <p className="font-trispace text-base font-normal leading-6">{t("Connect a wallet")}</p>
              </button>
            </div>
            <div className='flex flex-col items-start'>
              <p className="font-trispace text-xl font-semibold leading-8">{t("Legal")}</p>
              <button className="hover:text-[#E8A241] mt-6" onClick={() => {window.location.href = 'https://example.com'}}>
                <p className="font-trispace text-base font-normal leading-6">{t("Privacy Policy")}</p>
              </button>
              <button className="hover:text-[#E8A241] mt-5" onClick={() => {window.location.href = 'https://example.com'}}>
                <p className="font-trispace text-base font-normal leading-6">{t("Terms & Conditions")}</p>
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full h-[1px] bg-[#858584] dark:bg-[#525253]"></div>
          <div className="mx-4 mb-3.5 mt-3.5 flex justify-between items-center flex-col sm:flex-row space-y-4 sm:space-y-0">
            <p className="font-noto font-normal text-xs leading-3 text-center">{t("Copyrights")} &copy; {t("2024 LegacyToken. All rights reserved.")}</p>
            <div className='flex space-x-4'>
              <button onClick={handleThemeToggle}>
                {isDark == "true" && <img src={sun} />}
                {isDark == "false" && <img src={moon} />}
              </button>
              <div className="flex space-x-1.5 items-center">
                <img src={us} />
                <select className="dark:bg-black font-trispace font-normal text-sm leading-4" onChange={handleLanguageChange} value={language}>
                  <option>Eng</option> {/* English */}
                  <option>Fr</option> {/* French */}
                  <option>De</option> {/* German */}
                  <option>Es</option> {/* Spanish */}
                  <option>Zh</option> {/* Chinese */}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer

