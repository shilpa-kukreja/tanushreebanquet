"use client";

export default function MarqueeBanner() {
  const text =
    "Celebration Options with Custom Packages to Suit Every Need ✦ Celebrate Love, Dance, and Music in the Most Vibrant Way Possible ✦ ";

  return (
    <div className="w-full overflow-hidden bg-[#C8A165] py-3">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Duplicate content for seamless loop */}
        <span className="mx-6 text-black font-semibold uppercase tracking-widest text-sm md:text-base">
          {text}
        </span>
        <span className="mx-6 text-black font-semibold uppercase tracking-widest text-sm md:text-base">
          {text}
        </span>
      </div>
    </div>
  );
}