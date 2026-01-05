import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-white dark:bg-background-dark py-5 px-4 md:px-0">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div className="relative flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-center justify-center p-8 overflow-hidden group shadow-lg" 
                 style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAh3TOYHJIBBNBN0m1nvTiUyXpyNsHLCj0naf5v1eEmrDk17Mxt0mQxU-UKjrwNi-HernPsAag-VVx0y5QEaljxPv2leizmR10tBnbQ1MjvcbaNGH29eV_M0YttXUoafsRN66t1VAWr_wglKxO47Po5m4hI8MA1SffOdoTmIxDPWMVjzHgBdEv0mgP00SseaC0_9AxMTBwGW3j0Rlz8_iPPcOGRrVeLcMbwPbA0ZLlXMCQsVdEI62M95DnoiZnnMmDxqQb2Vl1P_jk")' }}>
              <div className="absolute inset-0 bg-black/40 z-0"></div>
              <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px]">
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-md">
                  Explore the World's Hidden Gems
                </h1>
                <h2 className="text-white/90 text-lg md:text-xl font-normal leading-relaxed drop-shadow-sm">
                  Curated tours and destinations for the modern traveler. Discover places you've only dreamed of.
                </h2>
              </div>
              <button className="relative z-10 flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all transform hover:scale-105 shadow-lg">
                <span className="truncate">Start Your Journey</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
