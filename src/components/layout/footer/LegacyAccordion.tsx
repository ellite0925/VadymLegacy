import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { useTranslation } from 'react-i18next';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

import arrow_up from "../../../assets/layout/footer/arrow-up.png"
import arrow_down from "../../../assets/layout/footer/arrow-down.png"

interface CardProps {
  title: string;
  description: string;
}

function LegacyAccordion(props: CardProps) {
  const { t } = useTranslation();
  return (
    <>
      <Accordion allowMultipleExpanded={true} allowZeroExpanded={true} >
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton className="bg-transparent p-4">
                  <div className="w-full flex justify-between items-center">
                    <p className="font-trispace font-normal text-xl leading-7">{t(props.title)}</p>
                    <img className='accordion_arrow_down' src={arrow_down} />
                    <img className='accordion_arrow_up' src={arrow_up} />
                  </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                  {props.description}
                </p>
            </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default LegacyAccordion

