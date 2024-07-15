import { useRef } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package

gsap.registerPlugin(useGSAP);
function GsapPage() {
  const container = useRef<HTMLDivElement>(null);

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
        <div ref={container} className="app">
          <div className='box w-[100px] h-[100px] bg-red-300 shadow-2xl rounded-2xl flex justify-center items-center'>
            Hello
          </div>
        </div>
    );
};

export default GsapPage
