import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function TestPage() {
  let iteration = 0;
  const spacing = 0.1;
  const snap = gsap.utils.snap(spacing);
  const cardsRef = useRef<HTMLElement[] | null>(null);
  const seamlessLoopRef = useRef<gsap.core.Timeline | null>(null);
  const scrubRef = useRef<gsap.core.Tween | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.cards li');
    const seamlessLoop = buildSeamlessLoop(cards as HTMLElement[], spacing);
    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true
    });

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        if (self.progress === 1 && self.direction > 0) { // && !self.wrapping
          wrapForward(self);
        } else if (self.progress < 1e-5 && self.direction < 0) { // && !self.wrapping
          wrapBackward(self);
        } else {
          scrub.vars.totalTime = snap((iteration + self.progress) * seamlessLoop.duration());
          scrub.invalidate().restart();
          // self.wrapping = false;
        }
      },
      end: "+=3000",
      pin: ".gallery"
    });

    cardsRef.current = cards as HTMLElement[];
    seamlessLoopRef.current = seamlessLoop;
    scrubRef.current = scrub;
    triggerRef.current = trigger;
  }, [snap]);

  const wrapForward = (trigger: ScrollTrigger) => {
    iteration++;
    // trigger.wrapping = true;
    trigger.scroll(trigger.start + 1);
  };

  const wrapBackward = (trigger: ScrollTrigger) => {
    iteration--;
    if (iteration < 0) {
      iteration = 0;
      seamlessLoopRef.current?.totalTime(seamlessLoopRef.current.totalTime() + seamlessLoopRef.current.duration() * 10);
      scrubRef.current?.pause();
    }
    // trigger.wrapping = true;
    trigger.scroll(trigger.end - 1);
  };

  const scrubTo = (totalTime: number) => {
    let progress = (totalTime - seamlessLoopRef.current!.duration() * iteration) / seamlessLoopRef.current!.duration();
    if (progress > 1) {
      wrapForward(triggerRef.current!);
    } else if (progress < 0) {
      wrapBackward(triggerRef.current!);
    } else {
      triggerRef.current?.scroll(triggerRef.current.start + progress * (triggerRef.current.end - triggerRef.current.start));
    }
  };

  const buildSeamlessLoop = (items: HTMLElement[], spacing: number) => {
    let overlap = Math.ceil(1 / spacing), // number of EXTRA animations on either side of the start/end to accommodate the seamless looping
		startTime = items.length * spacing + 0.5, // the time on the rawSequence at which we'll start the seamless loop
		loopTime = (items.length + overlap) * spacing + 1, // the spot at the end where we loop back to the startTime 
		rawSequence = gsap.timeline({paused: true}), // this is where all the "real" animations live
		seamlessLoop = gsap.timeline({ // this merely scrubs the playhead of the rawSequence so that it appears to seamlessly loop
			paused: true,
			repeat: -1, // to accommodate infinite scrolling/looping
			onRepeat() { // works around a super rare edge case bug that's fixed GSAP 3.6.1
				this._time === this._dur && (this._tTime += this._dur - 0.01);
			}
		}),
		l = items.length + overlap * 2,
		time = 0,
		i, index, item;

    // set initial state of items
    gsap.set(items, {xPercent: 400, opacity: 0,	scale: 0});

    // now loop through and create all the animations in a staggered fashion. Remember, we must create EXTRA animations at the end to accommodate the seamless looping.
    for (i = 0; i < l; i++) {
      index = i % items.length;
      item = items[index];
      time = i * spacing;
      rawSequence.fromTo(item, {scale: 0, opacity: 0}, {scale: 1, opacity: 1, zIndex: 100, duration: 0.5, yoyo: true, repeat: 1, ease: "power1.in", immediateRender: false}, time)
                .fromTo(item, {xPercent: 400}, {xPercent: -400, duration: 1, ease: "none", immediateRender: false}, time);
      i <= items.length && seamlessLoop.add("label" + i, time); // we don't really need these, but if you wanted to jump to key spots using labels, here ya go.
    }
    
    // here's where we set up the scrubbing of the playhead to make it appear seamless. 
    rawSequence.time(startTime);
    seamlessLoop.to(rawSequence, {
      time: loopTime,
      duration: loopTime - startTime,
      ease: "none"
    }).fromTo(rawSequence, {time: overlap * spacing + 1}, {
      time: startTime,
      duration: startTime - (overlap * spacing + 1),
      immediateRender: false,
      ease: "none"
    });
    return seamlessLoop;
  };

  const handleNextClick = () => {
    scrubTo(scrubRef.current!.vars.totalTime + spacing);
  };

  const handlePrevClick = () => {
    scrubTo(scrubRef.current!.vars.totalTime - spacing);
  };

  return (
    <>
        <div className="gallery">
          <ul className="cards">
            <li>0</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
            <li>29</li>
            <li>30</li>
          </ul>
          <div className="actions">
            <button className="next" onClick={handleNextClick}>Next</button>
            <button className="prev" onClick={handlePrevClick}>Previous</button>
          </div>
        </div>
    </>
  )
}

export default TestPage

