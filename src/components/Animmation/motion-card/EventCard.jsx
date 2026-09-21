import { useRef } from "react";



export function EventCard() {

   const cardRef = useRef(null);

   const handleMouseEnter = () => {
  const card = cardRef.current;

  if (!card) return;

  card.style.transition = "transform 0.15s ease-out";

  card.style.transform = `
    perspective(900px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1.02)
  `;
};

 const handleMouseMove = (e) => {
  const card = cardRef.current;

  if (!card) return;

  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Cursor position
  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);

  // Convert cursor position into -1 → 1
  const mouseX = (x / rect.width) - 0.5;
  const mouseY = (y / rect.height) - 0.5;

  const distance = Math.sqrt(
  mouseX * mouseX + mouseY * mouseY
);

  // Lighting position
  const lightX = (mouseX + 0.5) * 100;
  const lightY = (mouseY + 0.5) * 100;

  card.style.setProperty("--light-x", `${lightX}%`);
  card.style.setProperty("--light-y", `${lightY}%`);

  // Calculate rotation
 const rotateX = mouseY * -8 * distance;
const rotateY = mouseX * 8 * distance;

  card.style.transform = `
    perspective(900px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(1.02)
  `;

  const content = card.querySelector(".motion-card-content");

if (content) {
  const moveX = mouseX * 12;
  const moveY = mouseY * 12;

  content.style.transform = `
    translateZ(35px)
    translateX(${moveX}px)
    translateY(${moveY}px)
  `;
}
};

const cardEnter = {
  animation: "cardEnter 0.7s ease-out forwards",
};



  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">

      {/* Card */}
      <div  ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}

onMouseLeave={() => {
  const card = cardRef.current;

  if (!card) return;

  card.style.transition = "transform 0.5s ease-out";

  card.style.transform = `
    perspective(900px)
    rotateX(0deg)
    rotateY(0deg)
    scale(1)
  `;

  card.style.setProperty("--light-x", "50%");
  card.style.setProperty("--light-y", "50%");

  const content = card.querySelector(".motion-card-content");

if (content) {
  content.style.transform = `
    translateZ(35px)
    translateX(0px)
    translateY(0px)
  `;
}
}}

style={cardEnter}
    className="
    motion-card
motion-card-enter 
  group
  relative
  w-[360px]
  h-[460px]
  rounded-3xl
  bg-[#111116]
  p-[1px]
  will-change-transform
">

{/* Animated border */}
<div className="motion-card-border" />

          {/* Cursor light */}
 <div className="motion-card-glow" />

        {/* Inner card */}
        <div 
  className="
  motion-card-inner
    relative z-10
    h-full w-full
    overflow-hidden
    rounded-[23px]
    bg-[#0d0d12]
    p-7
    transition-[background] duration-500
    [transform-style:preserve-3d]
  "
  style={{
   background: `
  radial-gradient(
    380px circle at var(--mouse-x) var(--mouse-y),
    rgba(236,72,153,0.10),
    rgba(124,58,237,0.05) 35%,
    transparent 65%
  ),
  #0d0d12
`,
  }}>

    <div
  className="
    pointer-events-none
    absolute
    inset-0
    z-20
    opacity-0
    transition-opacity
    duration-300
    group-hover:opacity-100
  "
  style={{
    background: `
      linear-gradient(
        115deg,
        transparent 20%,
        rgba(255,255,255,0.08) 45%,
        rgba(255,255,255,0.02) 50%,
        transparent 70%
      )
    `,
    transform: "translateX(calc(var(--mouse-x) - 360px))",
  }}
/>

          {/* Top section */}
          <div>
            <div  className="
    mb-6
    flex h-12 w-12
    items-center justify-center
    rounded-xl
    border border-white/10
    bg-white/5
    text-xl text-white

    [transform:translateZ(50px)]">
              ✦
            </div>

                    
        <div className="motion-card-content">
          <p className="mb-2 text-xs font-medium tracking-[0.2em] text-zinc-500">
            CREATIVE
          </p>

          <h2 className="text-3xl font-semibold text-white">
            Motion Design
          </h2>

          <p className="mt-3 max-w-[270px] text-sm leading-relaxed text-zinc-500">
            Interactive visuals that respond to your movement.
          </p>
        </div>
          </div>

          {/* Bottom section */}
          <div  className="
    group/button
    flex w-full
    items-center justify-between
    rounded-xl
    border border-white/10
    bg-white/[0.04]
    px-4 py-3.5
    text-sm font-medium text-white

    transition-all
    duration-300
    ease-out

    hover:-translate-y-1
    hover:border-white/20
    hover:bg-white/[0.08]
  ">

            <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.08] motion-card-button">
              <span>Explore</span>

              <span className="
      text-lg
      transition-transform
      duration-300
      group-hover/button:translate-x-1
      motion-card-icon
    ">
                →
              </span>
            </button>

          </div>

        </div>
      </div>

    </div>
  );
}

