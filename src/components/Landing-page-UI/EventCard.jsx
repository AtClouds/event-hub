import { Link } from "react-router-dom";

export function EventCard({ event }) {
  /* =========================================================
     2. MOUSE ENTER HANDLER
     Resets the card to its initial 3D hover position when
     the cursor enters the card.
     ========================================================= */

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;

    if (!card) return;

    card.style.transition = "transform 0.15s ease-out";

    card.style.transform = `
      perspective(900px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1.02)
    `;
  };

  /* =========================================================
     3. MOUSE MOVE HANDLER
     Tracks the cursor position and uses it to control:
     - Mouse coordinates
     - Card rotation
     - Lighting position
     - Content movement
     ========================================================= */

  const handleMouseMove = (e) => {
    const card = e.currentTarget;

    if (!card) return;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    /* -------------------------------------------------------
       3.1 Store Cursor Position
       Makes the cursor coordinates available to CSS effects
       such as the glow, border and background lighting.
       ------------------------------------------------------- */

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    /* -------------------------------------------------------
       3.2 Normalize Cursor Position
       Converts the cursor position from pixel coordinates
       into a range centered around 0:

       Left / Top    = -0.5
       Center        =  0
       Right / Bottom = 0.5
       ------------------------------------------------------- */

    const mouseX = x / rect.width - 0.5;
    const mouseY = y / rect.height - 0.5;

    /* -------------------------------------------------------
       3.3 Calculate Cursor Distance
       Determines how far the cursor is from the center.
       This is used to control the intensity of the rotation.
       ------------------------------------------------------- */

    const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

    /* -------------------------------------------------------
       3.4 Calculate Lighting Position
       Converts the normalized mouse position into percentages
       for CSS-based lighting effects.
       ------------------------------------------------------- */

    const lightX = (mouseX + 0.5) * 100;
    const lightY = (mouseY + 0.5) * 100;

    card.style.setProperty("--light-x", `${lightX}%`);
    card.style.setProperty("--light-y", `${lightY}%`);

    /* -------------------------------------------------------
       3.5 Calculate Card Rotation
       Tilts the card based on the cursor position.
       The distance value controls how much the card reacts
       to movement away from the center.
       ------------------------------------------------------- */

    const rotateX = mouseY * -8 * distance;
    const rotateY = mouseX * 8 * distance;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;

    /* -------------------------------------------------------
       3.6 Move Card Content
       Adds additional depth by moving the content slightly
       toward the cursor while the card rotates.
       ------------------------------------------------------- */

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

  /* =========================================================
     4. CARD ENTRANCE ANIMATION
     Controls the initial animation when the card appears.
     ========================================================= */

  const cardEnter = {
    animation: "cardEnter 0.7s ease-out forwards",
  };

  {
    /* Date logic */
  }
  const date = new Date(event.date);
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = date.getDate();

  /* =========================================================
     5. COMPONENT UI
     Main structure of the animated motion card.
     ========================================================= */

  return (
    <div className="">
      {/* =====================================================
          5.1 MAIN CARD CONTAINER
          Handles mouse interaction and the main 3D rotation.
          ===================================================== */}

      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={(e) => {
          const card = e.currentTarget;

          if (!card) return;

          card.style.transition = "transform 0.5s ease-out";

          card.style.transform = `
            perspective(900px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
          `;

          /* -------------------------------------------------
             5.1.1 Reset Lighting Position
             Returns the lighting variables to the center
             when the cursor leaves the card.
             ------------------------------------------------- */

          card.style.setProperty("--light-x", "50%");
          card.style.setProperty("--light-y", "50%");

          /* -------------------------------------------------
             5.1.2 Reset Content Position
             Returns the content to its original position
             after the cursor leaves the card.
             ------------------------------------------------- */

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
          xl:w-[360px]
          xl:h-[460px]
          lg:w-[300px]
          lg:h-[400px]
          rounded-3xl
          bg-white
          shadow-[0_20px_15px_rgba(0,0,0,0.12)]
          will-change-transform
        "
      >
        {/* =================================================
            5.2 ANIMATED BORDER
            Creates the cursor-following glowing rim around
            the card.
            ================================================= */}

        <div className="motion-card-border" />

        {/* =================================================
            5.3 CURSOR LIGHT / GLOW
            Creates the soft light that follows the cursor.
            ================================================= */}

        <div className="motion-card-glow" />

        {/* =================================================
            5.4 INNER CARD
            Contains the actual visible card content and
            mouse-following background lighting.
            ================================================= */}

        <div
          className="
            motion-card-inner
            relative z-10
            h-full w-full
            overflow-hidden
            rounded-[23px]
            bg-white
            transition-[background]
            duration-500
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
                white
              `,
          }}
        >
          {/* =================================================
              5.5 MOVING SHINE
              Creates a subtle reflective light streak that
              moves across the card based on cursor position.
              ================================================= */}

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

          {/* =================================================
              5.6 TOP CONTENT SECTION
              Contains the icon, category label, title and
              description.
              ================================================= */}

          <div>
            {/* -------------------------------------------------
                5.6.1 3D ICON
                Floats the icon forward in 3D space.
                ------------------------------------------------- */}
            <div
              className="
                mb-4
                flex 
                w-full
                items-center justify-center
                rounded-[20px]
                text-xl text-white
                [transform:translateZ(50px)]
              "
            >
              <img
                src={event.banner}
                alt=""
                className="w-full h-[220px] object-cover overflow-hidden"
              />
            </div>

            <div className="px-7">
              {/* -------------------------------------------------
                5.6.2 TEXT CONTENT
                Moves independently toward the cursor to
                enhance the 3D depth effect.
                ------------------------------------------------- */}
              <div className="flex  items-center gap-3 motion-card-content mb-3">
                {/* -----------------------
                    date
                    ----------------------------*/}
                <div className="flex flex-col justify-center items-center">
                  <p className="text-[#3D37F1] font-medium text-[12px]">
                    {month}
                  </p>
                  <p className="text-black font-bold text-[30px]">{day}</p>
                </div>

                {/* -------------------------
                    title and description
                    -----------------------------*/}
                <div>
                  <h2
                    className="
                      xl:text-[20px]
                      text-[16px]
                      font-bold
                    text-black
                      "
                  >
                    {event.title}
                  </h2>

                  <p
                    className="
                      xl:text-[14px]
                      text-[12px]
                      text-black
                       "
                  >
                    {event.description.length > 100
                      ? event.description.slice(0, 60) + "..."
                      : event.description}
                  </p>
                </div>
              </div>

              {/* =================================================
              5.7 BOTTOM ACTION SECTION
              Contains the Explore button and arrow interaction.
              ================================================= */}

              <div
                className="
              group/button
              flex w-full
              items-center
              rounded-xl
              border border-brand-secondary/30
              bg-brand-primary/[0.2]
              xl:px-4 xl:py-3.5
              px-2 py-2    
              text-[18px]
              font-medium
              text-black
              transition-all
              duration-300
              ease-out
              mb-2
              hover:-translate-y-1
              hover:border-brand-primary/30
              hover:bg-brand-secondary[0.2]
            "
              >
                {/* -------------------------------------------------
                5.7.1 EXPLORE BUTTON
                Main interactive button with 3D depth.
                ------------------------------------------------- */}
                <Link className="w-full" to={`/events/${event.id}`}>
                  <button
                    className="
                flex w-full
                items-center
                justify-between
                rounded-xl
                border border-brand-secondary/30
              bg-brand-primary/[0.2]
                xl:px-4 xl:py-3.5
                px-2 py-2 
                text-sm
                font-medium
                text-black

                transition
               hover:bg-brand-secondary[0.2]

                motion-card-button
                cursor-pointer
              "
                  >
                    <span className="px-2">Explore</span>

                    {/* -----------------------------------------------
                  5.7.2 BUTTON ARROW
                  Slides slightly to the right when the button
                  is hovered.
                  ----------------------------------------------- */}

                    <span
                      className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-1
                  motion-card-icon
                "
                    >
                      →
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
