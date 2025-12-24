import React from 'react';
import { AppleIcon } from './icons/Icons';
import { FloatingWidgetProps } from '../types';

const FloatingWidget: React.FC<FloatingWidgetProps> = ({ className, rotation, children, bgClass }) => (
  <div className={`absolute ${className} ${rotation || ''} hidden lg:flex items-center justify-center shadow-2xl z-10 hover:z-20 transition-transform duration-500 hover:scale-110 cursor-default`}>
    <div className={`${bgClass} w-full h-full flex items-center justify-center p-4 relative overflow-hidden`}>
      {children}
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-dark overflow-hidden min-h-[850px] flex flex-col items-center justify-center pt-16">
      
      {/* Background Banner */}
      <div className="absolute top-0 w-full bg-gradient-hero py-3 flex justify-center items-center z-20 border-b border-primary-white/5">
        <div className="flex items-center gap-3 text-sm px-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/30">
                <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 bg-primary-white rounded-full"></div>
                    <div className="w-2 h-2 bg-primary-white rounded-full mt-1"></div>
                </div>
            </div>
            <span className="text-primary-white font-medium">Meet Eney, a local-first AI assistant for busywork</span>
            <span className="bg-pink-500 text-primary-white text-[10px] font-bold px-1.5 py-0.5 rounded transform -rotate-2">BETA</span>
            <button className="ml-2 border border-primary-white/20 hover:bg-primary-white/10 text-primary-white text-xs px-3 py-1 rounded transition-colors active:scale-95">Learn More</button>
        </div>
      </div>

      {/* Floating Elements Container */}
      <div className="absolute inset-0 w-full h-full max-w-7xl mx-auto pointer-events-none">
        
        {/* Work With Pics - Top Left */}
        <FloatingWidget 
          className="top-32 left-8 w-40 h-32 rounded-[2rem] rounded-tr-none" 
          rotation="-rotate-12"
          bgClass="bg-card-peach"
        >
            <span className="text-orange-900 font-black text-xl leading-none text-center">WORK<br/>WITH<br/>PICS</span>
            <div className="absolute -bottom-2 -left-2 bg-pink-300 w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-xl">🎨</span>
            </div>
        </FloatingWidget>

        {/* VPN Spinner - Middle Left */}
        <div className="absolute top-72 left-32 hidden lg:block">
            <div className="relative w-32 h-32 bg-card-green rounded-full flex items-center justify-center animate-spin-slow">
                <svg className="w-full h-full absolute" viewBox="0 0 100 100">
                    <path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" id="circlePath1"></path>
                    <text fill="#333" fontSize="11" fontWeight="bold" letterSpacing="2">
                        <textPath href="#circlePath1" startOffset="0%">
                             VPN • AD BLOCKER • VPN • 
                        </textPath>
                    </text>
                </svg>
                <div className="w-20 h-20 bg-primary-white rounded-full shadow-inner relative z-10"></div>
            </div>
        </div>

        {/* Boost Teamwork - Bottom Left */}
        <FloatingWidget 
          className="bottom-40 left-16 w-56 h-24 rounded-tl-[30px] rounded-br-[30px]" 
          rotation="rotate-6"
          bgClass="bg-card-teal"
        >
             <span className="text-cyan-900 font-black text-xl uppercase tracking-tight text-center">BOOST<br/>TEAMWORK</span>
        </FloatingWidget>

        {/* Stay Secure - Bottom Left Low */}
        <FloatingWidget 
          className="-bottom-10 left-32 w-48 h-32 rounded-[2rem]" 
          rotation="-rotate-12"
          bgClass="bg-gray-200"
        >
            <span className="text-blue-900 font-black text-2xl uppercase tracking-tight text-center leading-none mt-4">STAY<br/>SECURE</span>
        </FloatingWidget>

        {/* Fix Wifi - Top Right */}
        <FloatingWidget 
          className="top-36 right-16 w-48 h-28 rounded-[2rem] rounded-bl-none" 
          rotation="rotate-6"
          bgClass="bg-card-yellow"
        >
             <span className="text-yellow-900 font-black text-2xl uppercase tracking-tight text-center">FIX WIFI</span>
        </FloatingWidget>

        {/* Plan Your Day - Middle Right */}
        <FloatingWidget 
          className="top-64 right-48 w-36 h-36 rounded-2xl" 
          rotation="-rotate-6"
          bgClass="bg-card-blue"
        >
             <span className="text-blue-900 font-black text-xl uppercase tracking-tight text-center leading-tight">PLAN<br/>YOUR<br/>DAY</span>
        </FloatingWidget>

         {/* Convert Spinner - Right Edge */}
         <div className="absolute top-96 right-16 hidden lg:block">
             <div className="relative w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center">
                 <div className="absolute inset-0 border-4 border-dashed border-gray-400 rounded-full animate-spin-slow"></div>
                 <svg className="w-full h-full absolute animate-spin-reverse" viewBox="0 0 100 100">
                     <path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" id="circlePath2"></path>
                     <text fill="#333" fontSize="10" fontWeight="bold" letterSpacing="1">
                         <textPath href="#circlePath2" startOffset="0%">
                              CONVERT TO JPG • HEIC • PDF • 
                         </textPath>
                     </text>
                 </svg>
             </div>
         </div>

        {/* Manage Your Mac - Bottom Right */}
        <FloatingWidget 
          className="bottom-48 right-20 w-52 h-28 rounded-[2rem] rounded-tr-none" 
          rotation="-rotate-3"
          bgClass="bg-card-pink"
        >
            <span className="text-pink-900 font-black text-xl uppercase tracking-tight text-center leading-none">MANAGE<br/>YOUR MAC</span>
        </FloatingWidget>

        {/* Code - Bottom Right Low */}
        <FloatingWidget 
          className="bottom-10 right-28 w-40 h-28 rounded-2xl" 
          rotation="rotate-3"
          bgClass="bg-card-peach"
        >
            <span className="text-orange-900 font-black text-2xl uppercase tracking-tight text-center">CODE</span>
        </FloatingWidget>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4 animate-fade-in-up mt-10">
        
        {/* Setapp Center Logo */}
        <div className="w-32 h-32 bg-[#2d2e30] rounded-[2.5rem] shadow-2xl flex items-center justify-center mb-8 border border-primary-white/10 relative group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-white/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>
            <div className="grid grid-cols-2 gap-1 transform rotate-45 scale-75">
                <div className="w-7 h-7 bg-card-peach rounded-sm"></div>
                <div className="w-7 h-7 bg-card-peach rounded-sm"></div>
                <div className="w-7 h-7 bg-card-peach rounded-sm"></div>
                <div className="w-7 h-7 bg-card-peach rounded-sm"></div>
            </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-white tracking-tight mb-6 leading-[1.1]">
          Dozens of apps.<br />
          <span className="text-primary-white">One subscription.</span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-primary-white hover:bg-surface-light text-primary-dark font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95">
            Try free for 7 days
          </button>
          
          <div className="flex gap-2 w-full sm:w-auto justify-center">
            <button aria-label="Apple" className="bg-primary-white hover:bg-surface-light p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95 group">
              <AppleIcon className="w-7 h-7 text-primary-dark group-hover:text-black" />
            </button>
            <button aria-label="Google" className="bg-primary-white hover:bg-surface-light p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95 group">
               <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
               </svg>
            </button>
          </div>
        </div>

        <p className="text-gray-400 mt-8 text-body-large font-light max-w-lg">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>
      </div>

    </div>
  );
};

export default Hero;
