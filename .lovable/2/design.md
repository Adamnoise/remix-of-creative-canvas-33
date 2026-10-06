**--**



**version: alpha**

**name: Fora Brand Identity**

**description: A premium, dark-themed community platform design that emphasizes brand autonomy and white-labeling for creators and educators.**

**colors:**

&#x20; **primary: "#FFF3F0"**

&#x20; **background: "#01101D"**

&#x20; **surface: "#171717"**

&#x20; **accent-glow: "#FFFFFF1A"**

&#x20; **text-secondary: "#D5E0E8"**

&#x20; **text-muted: "#FFFFFF66"**

&#x20; **border: "#FFFFFF1A"**

**typography:**

&#x20; **families:**

&#x20;   **display: "Inter Display"**

&#x20;   **body: "Inter"**

&#x20;   **mono: "Fragment Mono"**

&#x20; **sizes:**

&#x20;   **h2: "36px"**

&#x20;   **h3: "36px"**

&#x20;   **body-lg: "16px"**

&#x20;   **body-sm: "12px"**

&#x20; **weights:**

&#x20;   **regular: 400**

&#x20;   **medium: 500**

&#x20;   **bold: 700**

**spacing:**

&#x20; **section: "36px"**

&#x20; **gap: "28px"**

&#x20; **padding-chip: "4px 16px"**

**rounded:**

&#x20; **pill: "393px"**

&#x20; **card: "72px"**

&#x20; **container: "12px"**

**components:**

&#x20; **button:**

&#x20;   **radius: "{rounded.pill}"**

&#x20;   **background: "{colors.primary}"**

&#x20;   **text: "{colors.background}"**

&#x20; **card-dark:**

&#x20;   **background: "{colors.surface}"**

&#x20;   **border: "{colors.border}"**

&#x20;   **radius: "{rounded.card}"**



**---**



**##**

&#x20;**Overview**



**Fora features a sophisticated dark-mode aesthetic that prioritizes high contrast and clear visual hierarchy. The visual personality is professional yet approachable, utilizing deep navy backgrounds and crisp off-white typography to create a focused, premium atmosphere. The interface uses high-density information layouts balanced by generous section breathing room. Motion cues are subtle, featuring vertical translation on entry and soft opacity fades that suggest a lightweight, modern application feel. The tone is authoritative and brand-agnostic, reinforcing Fora's value proposition as a white-label engine for creators.**

**##**

&#x20;**Colors**



**The palette is anchored by a deep primary background (#01101D), which provides a stable foundation for the high-contrast foreground. The primary action color is an off-white tint labeled as "Pro" or "Primary" (#FFF3F0), used for main headlines and high-priority call-to-actions. Semantic layers are created using varying opacities of white: 80% for primary text, 65% for descriptive body copy, and 10% for borders and subtle surface separations. A distinctive "Check Light" color (#FFFFFF40) is used for icon backgrounds, while deep blacks are used for card overlays to create a "glassmorphism" effect without heavy blurring.**

**##**

&#x20;**Typography**



**The typography system utilizes the Inter family for its high readability across different screen sizes.** 

**`Inter Display`**

&#x20;**is reserved for large, impactful headings (H2-H3) with tight letter-spacing (-0.03em) to maintain a modern look.** 

**`Inter`**

&#x20;**is the workhorse for body text, typically set at 16px with a 1.5 line-height for optimal legibility.** 

**`Fragment Mono`**

&#x20;**provides a technical, precise feel for utility text or code-adjacent elements. Hierarchy is established through weight shifts (400 to 500) and dramatic color shifts from pure white to muted grays rather than extreme size variations.**

**##**

&#x20;**Layout**



**The site follows a structured grid with a maximum container width of 1280px for core content. Sections are vertically separated by significant padding (often exceeding 100px) to give a sense of premium space. Alignment is predominantly left-aligned for text content, though hero elements and chips are often centered. Spacing rhythm relies on a consistent 24px-28px gap for related elements. The pricing section introduces a unique three-column grid that collapses into a vertical stack on mobile devices, ensuring accessibility across viewports.**

**##**

&#x20;**Elevation \& Depth**



**Depth is achieved through layering and border definitions rather than traditional drop shadows. Surfaces are defined by 1px solid borders using** 

**`{colors.border}`**

**. A notable design pattern includes "glow" layers—low-opacity white backgrounds (10%) that create a subtle sense of illumination behind buttons and chips. High-tier containers (like pricing cards) use backdrop filters with 8px-16px blurs to simulate frosted glass, physically separating the content from the deep navy background.**

**##**

&#x20;**Shapes**



**Geometry in the Fora design system is characterized by extreme rounding. Buttons and category chips use a "super-pill" radius (393px+), creating a friendly, touch-optimized appearance. Larger structural containers and cards utilize a softer but still significant 72px radius. Inner elements, such as images within blog snippets, use a nested rounding logic where the top corners (8px) are tighter than the bottom (4px), creating a specific asymmetric architectural feel for media content.**

**##**

&#x20;**Components**



**The primary component is the Action Button, which is pill-shaped with a thick 1px border and a background that contrasts sharply with the page theme. Chips are secondary interactive elements using low-opacity backgrounds (10%) and center-aligned text. Cards are complex units featuring nested image wrappers, backdrop blurs, and secondary metadata labels. The Pricing Toggle and Comparison Snippets utilize consistent stroke-based icons with a 2px weight to maintain a thin, elegant line language throughout the UI.**

**##**

&#x20;**Do's and Don'ts**



**-**

&#x20;

**\*\***

**Do**

**\*\***

&#x20;**use off-white (**

**`#FFF3F0`**

**) for primary headings to avoid the harshness of pure** 

**`#FFFFFF`**

**.**

**-**

&#x20;

**\*\***

**Do**

**\*\***

&#x20;**maintain a consistent line weight for all icons (2px) to match the typography's visual weight.**

**-**

&#x20;

**\*\***

**Do**

**\*\***

&#x20;**use backdrop blurs (8px-12px) when placing cards over complex backgrounds.**

**-**

&#x20;

**\*\***

**Don't**

**\*\***

&#x20;**use sharp corners; the design language requires a minimum of 8px for containers and pill shapes for interactive elements.**

**-**

&#x20;

**\*\***

**Don't**

**\*\***

&#x20;**introduce bright secondary colors; stick to the navy/white/gray grayscale palette to preserve the white-label aesthetic.**

**##**

&#x20;**Accessibility**



**The design ensures high contrast by pairing deep backgrounds with light text, targeting at least a 4.5:1 ratio for body copy. Large hit targets are provided for all pill-shaped interactive elements. Focus states are implied through the use of** 

**`tabindex`**

&#x20;**and** 

**`data-highlight`**

&#x20;**attributes, ensuring keyboard navigability. Readable line heights (1.5em) and paragraph spacing (20px-36px) prevent text crowding, while the responsive grid layout ensures content remains legible and interactive on smaller touch-screens.**

**##**

&#x20;**Assets**



**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnB41HhrUI.woff2 — Used for mono utility text.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnB45HhrUI.woff2 — Used for mono utility text (variation).**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnB4NHhg.woff2 — Used for mono utility text (latin).**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2 — Inter bold italic variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2 — Inter medium variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2 — Inter regular base font.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2 — Inter medium display variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2 — Inter latin-ext variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2 — Inter medium primary font.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2 — Inter cyrillic variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2 — Inter regular latin variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2 — Inter bold italic cyrillic variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2 — Inter bold italic latin variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2 — Inter regular extended variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2 — Inter medium extended variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2 — Inter regular greek variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2 — Inter medium cyrillic variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2 — Inter bold italic display variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2 — Inter medium primary latin variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2 — Inter bold italic greek variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2 — Inter bold italic extended variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2 — Inter medium greek variation.**

**-**

&#x20;

**\*\***

**Font**

**\*\***

**: https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2 — Inter regular secondary variation.**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9n8OOMGCaEmCo8MDRO2tHo17cQ.png?scale-down-to=1024\&width=2400\&height=1345 — Blog post thumbnail for platform guide (1024px).**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9n8OOMGCaEmCo8MDRO2tHo17cQ.png?scale-down-to=2048\&width=2400\&height=1345 — Blog post thumbnail (2048px).**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9n8OOMGCaEmCo8MDRO2tHo17cQ.png?scale-down-to=512\&width=2400\&height=1345 — Blog post thumbnail (512px).**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9n8OOMGCaEmCo8MDRO2tHo17cQ.png?width=2400\&height=1345 — Full resolution blog thumbnail.**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9UBZAGM31zJYY1cxzKu0pWhMNs.png?scale-down-to=1024\&width=2399\&height=1358 — Guide to launching community thumbnail (1024px).**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9UBZAGM31zJYY1cxzKu0pWhMNs.png?scale-down-to=2048\&width=2399\&height=1358 — Guide thumbnail (2048px).**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9UBZAGM31zJYY1cxzKu0pWhMNs.png?scale-down-to=512\&width=2399\&height=1358 — Guide thumbnail (512px).**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9UBZAGM31zJYY1cxzKu0pWhMNs.png?width=2399\&height=1358 — Full resolution guide image.**

**-**

&#x20;

**\*\***

**Icon**

**\*\***

**: https://framerusercontent.com/images/EdW8FzX7hXiJh2764mnSZkMcXY.svg — Favicon for light mode themes.**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/EisEW7TIP5i38O4TWciQ1Zf6Q.webp?scale-down-to=1024\&width=2048\&height=1536 — Mighty Networks comparison image (1024px).**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/EisEW7TIP5i38O4TWciQ1Zf6Q.webp?scale-down-to=512\&width=2048\&height=1536 — Comparison image (512px).**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/EisEW7TIP5i38O4TWciQ1Zf6Q.webp?width=2048\&height=1536 — Full resolution comparison webp.**

**-**

&#x20;

**\*\***

**Icon**

**\*\***

**: https://framerusercontent.com/images/Hd0Enyb4QMy1icBZ0hWTFMGI.svg — Favicon for dark mode themes.**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/PSMeVOn2vyHHuWnnIlZB6T5BlQ.png — Social sharing / Open Graph preview image.**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9n8OOMGCaEmCo8MDRO2tHo17cQ.png?scale-down-to=1024**

**\&amp;**

**width=2400**

**\&amp;**

**height=1345 — contexts: img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9n8OOMGCaEmCo8MDRO2tHo17cQ.png?scale-down-to=2048**

**\&amp;**

**width=2400**

**\&amp;**

**height=1345 — contexts: img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9n8OOMGCaEmCo8MDRO2tHo17cQ.png?scale-down-to=512**

**\&amp;**

**width=2400**

**\&amp;**

**height=1345 — contexts: img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9n8OOMGCaEmCo8MDRO2tHo17cQ.png?width=2400**

**\&amp;**

**height=1345 — contexts: img\[src], img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9UBZAGM31zJYY1cxzKu0pWhMNs.png?scale-down-to=1024**

**\&amp;**

**width=2399**

**\&amp;**

**height=1358 — contexts: img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9UBZAGM31zJYY1cxzKu0pWhMNs.png?scale-down-to=2048**

**\&amp;**

**width=2399**

**\&amp;**

**height=1358 — contexts: img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9UBZAGM31zJYY1cxzKu0pWhMNs.png?scale-down-to=512**

**\&amp;**

**width=2399**

**\&amp;**

**height=1358 — contexts: img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/9UBZAGM31zJYY1cxzKu0pWhMNs.png?width=2399**

**\&amp;**

**height=1358 — contexts: img\[src], img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/EisEW7TIP5i38O4TWciQ1Zf6Q.webp?scale-down-to=1024**

**\&amp;**

**width=2048**

**\&amp;**

**height=1536 — contexts: img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/EisEW7TIP5i38O4TWciQ1Zf6Q.webp?scale-down-to=512**

**\&amp;**

**width=2048**

**\&amp;**

**height=1536 — contexts: img\[srcset]**

**-**

&#x20;

**\*\***

**Image**

**\*\***

**: https://framerusercontent.com/images/EisEW7TIP5i38O4TWciQ1Zf6Q.webp?width=2048**

**\&amp;**

**height=1536 — contexts: img\[src], img\[srcset]s**

