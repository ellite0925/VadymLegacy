import { useTranslation } from 'react-i18next';

interface CardProps {
  image: string;
  // title: string;
  semititle: string;
  description: string;
}

function Card(props: CardProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#F7F9FB] dark:bg-black rounded-3xl flex flex-col p-[10px] dark:border-2 dark:border-[#F2F2F2] dark:border-opacity-50">
        <img className="w-full" src={props.image} />
        <p className="mt-6 text-[#F38E0C] font-trispace font-bold text-sm leading-6">{t("NFT Collection")}</p>
        <p className="mt-1 font-bold text-xl leading-7">{t(props.semititle)}</p>
        <p className="mt-1 mb-4 font-noto font-normal text-base leading-6">{t(props.description)}</p>
      </div>
    </>
  )
}

export default Card

