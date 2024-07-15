import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import eth from "../../assets/full/card/eth.png"
import eth_yellow from "../../assets/full/card/eth-yellow.png"

interface CardProps {
  image: string;
  title: string;
  eth: string;
  sale?: string;
  isBuyNow?: boolean;
}

function Card(props: CardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => {navigate('/single_stamp')}} className="cursor-pointer bg-[#D9E0EC] bg-opacity-20 dark:bg-[#19191F] dark:bg-opacity-[72%] rounded-xl p-[10px] dark:border-2 dark:border-[#F2F2F2] dark:border-opacity-50">
        <img className="w-full" src={props.image} />
        <p className="pt-4 font-trispace font-normal text-base leading-5">{t(props.title)}</p>
        <div className="pt-2 flex items-center space-x-1">
          <img src={eth} />
          <p className="text-[#00AC4F] font-trispace font-medium text-xs leading-3">{props.eth} ETH</p>
        </div>
        <div className="mt-2 w-full h-[1px] bg-[#F4F4F4]"></div>
        {
          props.isBuyNow ? (
            <div className="mt-2 font-news font-normal text-base leading-4 text-center text-[#F38E0C]">{t("Buy Now")}</div>
          ) : (
            <div className="mt-2 flex items-center">
              <p className="font-trispace font-normal text-xs leading-5 mr-5">{t("Last Sale")}</p>
              <img className="mr-1" src={eth_yellow} />
              <p className="font-trispace font-normal text-xs leading-5 mr-5 text-[#F38E0C]">{props.sale}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Card;