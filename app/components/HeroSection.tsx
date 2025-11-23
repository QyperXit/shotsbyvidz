import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full max-w-[1600px] mx-auto px-6 lg:px-12 mt-24 mb-16 animate-fade-slide-in">
      <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10 group">
        {/* Video Placeholder / Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 animate-gradient-xy">
          {/* Optional: Real video tag here if available */}
          <video
            src="https://res.cloudinary.com/dgyh04pof/video/upload/v1763858066/wheat-drone_uyccsc.mp4"
            autoPlay
            muted
            loop
            className="object-cover w-full h-full opacity-92"
          />
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold tracking-widest text-center uppercase text-white/20 font-geist">
              Aerial Perspectives
              <br />
              Drone Video
            </span>
          </div> */}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:p-12">
          <h1 className="text-xl md:text-2xl font-light text-white tracking-tight font-geist mb-4 translate-y-4 opacity-0 animate-[fadeSlideIn_0.8s_ease-out_0.3s_both]">
            AERIAL PERSPECTIVES
          </h1>
          <p className="text-sm md:text-lg text-neutral-300 font-geist mb-8 max-w-xl translate-y-4 opacity-0 animate-[fadeSlideIn_0.8s_ease-out_0.4s_both]">
            Capturing the world from above with stunning clarity and depth.
          </p>

          <button className="w-fit hidden md:flex group/btn relative overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-50 translate-y-4 opacity-0 animate-[fadeSlideIn_0.8s_ease-out_0.5s_both]">
            <span
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
               bg-[conic-gradient(from_90deg_at_50%_50%,#FBBF24_0%,#B45309_50%,#FBBF24_100%)]"
            />
            <span className="inline-flex items-center justify-center w-full h-full px-8 py-3 text-sm font-medium text-white transition-all rounded-full cursor-pointer bg-slate-950 backdrop-blur-3xl group-hover/btn:bg-slate-900">
              {/* View Drone Gallery */}
              Coming Soon
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
