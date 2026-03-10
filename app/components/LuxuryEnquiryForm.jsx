"use client";

import { useState } from "react";

export default function LuxuryEnquiryForm() {

  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"",
    eventType:"",
    guests:"",
    date:"",
    message:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const res = await fetch("/api/send-mail",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(form)
    });

    const data = await res.json();

    if(data.success){
      alert("Enquiry Sent Successfully ✅");
      setForm({
        name:"",
        email:"",
        phone:"",
        eventType:"",
        guests:"",
        date:"",
        message:""
      });
    }else{
      alert("Error sending email");
    }
  };

  return (
    <section className="relative py-20 bg-white text-black overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-6">

        <h2 className="text-center text-4xl md:text-5xl font-light mb-14">
          Enquiry <span className="text-[#C8A165] font-medium">Form</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-md p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        >

          <div className="grid md:grid-cols-3 gap-6">

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-white/10 border-2 border-[#C8A165] rounded-lg px-4 pt-6 pb-2 text-sm focus:outline-none"
              />
              <label className="absolute left-4 top-2 text-sm text-black/40">
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-white/10 border-2 border-[#C8A165] rounded-lg px-4 pt-6 pb-2 text-sm focus:outline-none"
              />
              <label className="absolute left-4 top-2 text-sm text-black/40">
                Email
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-white/10 border-2 border-[#C8A165] rounded-lg px-4 pt-6 pb-2 text-sm focus:outline-none"
              />
              <label className="absolute left-4 top-2 text-sm text-black/40">
                Phone Number
              </label>
            </div>

            {/* Event Type */}
            <div className="relative">
              <input
                type="text"
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-white/10 border-2 border-[#C8A165] rounded-lg px-4 pt-6 pb-2 text-sm focus:outline-none"
              />
              <label className="absolute left-4 top-2 text-sm text-black/40">
                Event Type
              </label>
            </div>

            {/* Guests */}
            <div className="relative">
              <input
                type="text"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full bg-white/10 border-2 border-[#C8A165] rounded-lg px-4 pt-6 pb-2 text-sm focus:outline-none"
              />
              <label className="absolute left-4 top-2 text-sm text-black/40">
                Number of Guests
              </label>
            </div>

            {/* Date */}
            <div className="relative">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="peer w-full bg-white/10 border-2 border-[#C8A165] rounded-lg px-4 pt-6 pb-2 text-sm focus:outline-none"
              />
              <label className="absolute left-4 top-2 text-sm text-black/40">
                Event Date
              </label>
            </div>

          </div>

          {/* Message */}
          <div className="relative mt-6">
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full bg-white/10 border-2 border-[#C8A165] rounded-lg px-4 pt-6 pb-2 text-sm focus:outline-none"
            />
            <label className="absolute left-4 top-2 text-sm text-black/40">
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-[#C8A165] text-black py-3 rounded-full tracking-widest text-lg hover:bg-[#b89255]"
          >
            SEND ENQUIRY
          </button>

        </form>
      </div>
    </section>
  );
}