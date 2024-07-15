import { useTranslation } from 'react-i18next';
import Card from "./Trending/Card";
import abstr from "../../assets/home/discover/abstr.png";
import txt from "../../assets/home/discover/txt.png";
import pixel_first from "../../assets/home/discover/pixel-first.png";
import crystal from "../../assets/home/discover/crystal.png";
import abstract from "../../assets/home/discover/abstract.png";
import pixel_second from "../../assets/home/discover/pixel-second.png";

function Trending() {
  const { t } = useTranslation();

  return (
    <>
      <div className="md:container mx-auto py-24 px-4 md:px-0">
        <p className="font-trispace text-xl md:text-3xl font-medium leading-8 pl-4 md:pl-0">{t("Trending Collection")}</p>
        <div className="grid gap-x-6 gap-y-6 mt-12 grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2">
          <Card image={abstr} semititle="ABSTR Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          <Card image={txt} semititle="TXT Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          <Card image={pixel_first} semititle="PIXEL Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          <Card image={crystal} semititle="CRYSTAL Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          <Card image={abstract} semititle="ABSTRACT Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          <Card image={pixel_second} semititle="PIXEL Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
        </div>
      </div>
    </>
  )
}

export default Trending

