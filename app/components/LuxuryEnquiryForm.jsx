"use client";

export default function LuxuryEnquiryForm() {
  return (
    <section className="relative py-20 bg-white text-black overflow-hidden">

      {/* GOLD GRADIENT GLOW */}
      <div  />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-center text-4xl md:text-5xl font-light mb-14">
          Enquiry <span className="text-[#C8A165] font-medium">Form</span>
        </h2>

        {/* FORM BOX */}
        <form className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-md p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.6)]">

          <div className="grid md:grid-cols-3 gap-6">

            {/* INPUT */}
            {[
              "Name",
              "Email",
              "Phone Number",
              "Event Type",
              "Number of Guests",
              "Event Date",
            ].map((item, i) => (
              <div key={i} className="relative">
                <input
                  type={item === "Event Date" ? "date" : "text"}
                  placeholder=" "
                  className="peer w-full bg-white/10 border-2 border-[#C8A165] rounded-lg px-4 pt-6 pb-2 text-sm focus:outline-none focus:border-[#C8A165] focus:bg-white/20 transition"
                />
                <label className="absolute left-4 top-2 text-sm text-black/40 transition-all 
                peer-placeholder-shown:top-4 
                peer-placeholder-shown:text-black/40 
                peer-focus:top-2 peer-focus:text-[#C8A165]">
                  {item}
                </label>
              </div>
            ))}

          </div>

          {/* MESSAGE BOX */}
          <div className="relative mt-6">
            <textarea
              rows="4"
              placeholder=" "
              className="peer w-full bg-white/10 border-2 border-[#C8A165] rounded-lg px-4 pt-6 pb-2 text-sm focus:outline-none focus:border-[#C8A165] focus:bg-white/20 transition"
            />
            <label className="absolute left-4 top-2 text-sm text-black transition-all 
              peer-placeholder-shown:top-4 
              peer-placeholder-shown:text-black/40
              peer-focus:top-2 peer-focus:text-[#C8A165]">
              Your Message
            </label>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="mt-8 w-full bg-[#C8A165] text-black py-3 rounded-full tracking-widest text-lg 
            hover:bg-[#C8A165] hover:text-black transition duration-300 shadow-lg"
          >
            SEND ENQUIRY
          </button>

        </form>
      </div>
    </section>
  );
}