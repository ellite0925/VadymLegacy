import { useTranslation } from 'react-i18next';
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package
import { useEffect, useRef } from 'react';

import one from "../../assets/info/sample/one.png";
import two from "../../assets/info/sample/two.png";
import three from "../../assets/info/sample/three.png";
import four from "../../assets/info/sample/four.png";
import five from "../../assets/info/sample/five.png";

import arrow_left from "../../assets/info/sample/arrow-left.svg";
import arrow_right from "../../assets/info/sample/arrow-right.svg";
import arrow_left_dark from "../../assets/info/sample/arrow-left-dark.svg";
import arrow_right_dark from "../../assets/info/sample/arrow-right-dark.svg";
import arrow_left_hover from "../../assets/info/sample/arrow-left-hover.svg";
import arrow_right_hover from "../../assets/info/sample/arrow-right-hover.svg";

import play from "../../assets/info/sample/play.png";
import play_dark from "../../assets/info/sample/play-dark.png";

gsap.registerPlugin(useGSAP);
function Sample() {
  const { t } = useTranslation();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('stage', '2');
  });

  const handlePrevSlide = (flag: number) => {
    let local_stage = localStorage.getItem('stage');
    if (!local_stage) local_stage = '2';
    let stage = parseInt(local_stage);

    if (stage == 0 && flag == -1)
      return ;
    if (stage == 4 && flag == 1)
      return ;

    const lefts = ["-200%", "-200%", "3%", "20%", "50%", "80%", "97%", "200%", "200%"];
    const widths = ["0%", "0%", "16vw", "20vw", "50vw", "20vw", "16vw", "0vw", "0vw"];
    const heights = ["0%", "0%", "12vw", "17vw", "30vw", "17vw", "12vw", "0vw", "0vw"];
    const zIndexs = ["0", "0", "1", "2", "3", "2", "1", "0", "0"];
    const parent = container.current;
    if (parent) {
      gsap.utils.toArray(parent.children).forEach((child, index) => {
        // gsap.to(child as gsap.TweenTarget, {
        //   // GSAP animation properties for each child
        //   left: lefts[index],
        //   width: widths[index],
        //   height: heights[index],
        //   duration: 1,
        //   ease: 'power2.inOut',
        // });
        // if (index == 0)
        {
          let elapsedTime = 0;
          gsap.to(child as gsap.TweenTarget, {
            // GSAP animation properties for each child
            left: lefts[stage + index + flag],
            width: widths[stage + index + flag],
            height: heights[stage + index + flag],
            duration: 0.2,
            ease: 'power4',
            onUpdate: () => {
              elapsedTime++;
              if (elapsedTime == 7) {
                gsap.set(child as gsap.TweenTarget, { zIndex: zIndexs[stage + index + flag] });
              }
            }
          });
        }
      });
      localStorage.setItem('stage', `${(stage + flag) % 6}`);
    }
  };

  const handleEnterMouse = (e : any) => {
    
    const element = e.currentTarget;
    if (element == null) return;
    const styles = window.getComputedStyle(element);
    const zIndexValue = styles.getPropertyValue('z-index');
    if (zIndexValue != '3') {
      const childElement = element.querySelector('div');
      if (childElement != null)
        childElement.style.display = 'none';
    } else {
      
      const childElement = element.querySelector('div');
      if (childElement != null)
        childElement.style.display = '';
    }
  }

  useGSAP(
    () => {
        // gsap.from(".box", { x: 200 })
        gsap.to(".box", {
          // this is the vars object
          // it contains properties to animate
          x: 200,
          scale: "+=0.5",
          // and special properties
          duration: 0.3
        })
    },
    { scope: container }
); // <-- scope for selector text (optional)

  return (
    <>
    <div className="bg-[#F7F9FB] dark:bg-black py-8 md:py-24 hidden md:block">
      <p className="text-center font-trispace font-medium text-xl md:text-3xl leading-8">{t("Samples of Collection")}</p>



      <div ref={container} className='relative mt-20 w-full overflow-x-hidden h-[30vw]'>
        <div className="top-[15vw] h-[12vw] w-[16vw] absolute z-[1] left-[3%] translate-x-[-50%] translate-y-[-50%] transition-all group" onMouseEnter={(e) => {handleEnterMouse(e);}}>
          <img className='rounded-lg w-full h-full' src={one} />
          <div className='w-full h-full hidden group-hover:flex justify-center items-center absolute top-0'>
            <img className='inline dark:hidden' src={play} />
            <img className='hidden dark:inline' src={play_dark} />
          </div>
        </div>
        <div className="top-[15vw] h-[17vw] w-[20vw] absolute z-[2] left-[20%] translate-x-[-50%]  translate-y-[-50%] transition-all group" onMouseEnter={(e) => {handleEnterMouse(e);}}>
          <img className='rounded-lg w-full h-full' src={two} />
          <div className='w-full h-full hidden group-hover:flex justify-center items-center absolute top-0'>
            <img className='inline dark:hidden' src={play} />
            <img className='hidden dark:inline' src={play_dark} />
          </div>
        </div>
        <div className="top-[15vw] h-[30vw] w-[50vw] absolute z-[3] left-[50%] translate-x-[-50%]  translate-y-[-50%] transition-all group" onMouseEnter={(e) => {handleEnterMouse(e);}}>
          <img className='rounded-lg w-full h-full' src={three} />
          <div className='w-full h-full hidden group-hover:flex justify-center items-center absolute top-0'>
            <img className='inline dark:hidden' src={play} />
            <img className='hidden dark:inline' src={play_dark} />
          </div>
        </div>
        <div className="top-[15vw] h-[17vw] w-[20vw] absolute z-[2] left-[80%] translate-x-[-50%]  translate-y-[-50%] transition-all group" onMouseEnter={(e) => {handleEnterMouse(e);}}>
          <img className='rounded-lg w-full h-full' src={four} />
          <div className='w-full h-full hidden group-hover:flex justify-center items-center absolute top-0'>
            <img className='inline dark:hidden' src={play} />
            <img className='hidden dark:inline' src={play_dark} />
          </div>
        </div>
        <div className="top-[15vw] h-[12vw] w-[16vw] absolute z-[1] left-[97%] translate-x-[-50%]  translate-y-[-50%] transition-all group" onMouseEnter={(e) => {handleEnterMouse(e);}}>
          <img className='rounded-lg w-full h-full' src={five} />
          <div className='w-full h-full hidden group-hover:flex justify-center items-center absolute top-0'>
            <img className='inline dark:hidden' src={play} />
            <img className='hidden dark:inline' src={play_dark} />
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-12 space-x-12'>
        <button className='group' onClick={() => {handlePrevSlide(-1)}}>
          <img className='inline dark:hidden group-hover:hidden' src={arrow_left} />
          <img className='hidden dark:inline group-hover:hidden' src={arrow_left_dark} />
          <img className='hidden group-hover:inline' src={arrow_left_hover} />
        </button>
        <button className='group' onClick={() => {handlePrevSlide(1)}}>
          <img className='inline dark:hidden group-hover:hidden' src={arrow_right} />
          <img className='hidden dark:inline group-hover:hidden' src={arrow_right_dark} />
          <img className='hidden group-hover:inline' src={arrow_right_hover} />
        </button>
      </div>

      {/* <TestPage /> */}
    </div>
    </>
  )
}

export default Sample

