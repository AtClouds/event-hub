import { useRef, useEffect } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"


gsap.registerPlugin(SplitText) 

export function AnimatedTitle({ text }) {
  const titleRef = useRef(null)

useEffect(() => {
  const split = SplitText.create(titleRef.current, { type: "chars" })
  const animation = gsap.from(split.chars, {
    opacity: 0,
    y: 20,
    stagger: 0.03,
    duration: 0.5,
    ease: "power2.out",
    repeat: -1,
    yoyo: true,
    repeatDelay: 1
  })

  return () => {
    animation.revert()
    split.revert()
  }
}, [text])

  return <h1 className=" text-[45px] xl:text-[60px] font-bold" ref={titleRef}>{text}</h1>
}