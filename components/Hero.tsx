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
    <div className="relative bg-[#2d2d2f] overflow-hidden min-h-screen flex flex-col items-center justify-center pt-[60px]">
      
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
        
        <div className="absolute top-[140px] left-[70px] w-[160px] h-[120px] bg-[#FFB88C] rounded-[24px] rounded-tr-none -rotate-[18deg] shadow-2xl z-10 flex items-center justify-center p-4">
          <span className="text-[#7B3F00] font-black text-[17px] leading-[1.1] text-center uppercase tracking-tight">WORK<br/>WITH<br/>PICS</span>
        </div>

        <div className="absolute top-[220px] left-[30px] w-[115px] h-[115px] z-20">
          <div className="relative w-full h-full bg-[#E8F5E9] rounded-full flex items-center justify-center shadow-2xl -rotate-[15deg]">
            <svg className="w-full h-full absolute" viewBox="0 0 100 100">
              <path d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" id="circlePath1"></path>
              <text fill="#2C5F5D" fontSize="8" fontWeight="900" letterSpacing="2.5">
                <textPath href="#circlePath1" startOffset="0%">
                  VPN • AD BLOCKER • VPN •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="absolute top-[300px] left-[30px] w-[220px] h-[85px] bg-[#7ED7D1] rounded-tl-[28px] rounded-br-[28px] -rotate-[8deg] shadow-2xl z-10 flex items-center justify-center">
          <span className="text-[#2C5F5D] font-black text-[20px] uppercase tracking-tight text-center leading-[1.1]">BOOST<br/>TEAMWORK</span>
        </div>

        <div className="absolute bottom-[120px] left-[90px] w-[170px] h-[110px] bg-[#E5E5E5] rounded-[28px] -rotate-[15deg] shadow-2xl z-10 flex items-center justify-center">
          <span className="text-[#3A5A7A] font-black text-[17px] uppercase tracking-tight text-center leading-[1.2]">STAY<br/>SECURE</span>
        </div>

        <div className="absolute top-[100px] right-[100px] w-[240px] h-[95px] bg-[#FFE4B5] rounded-[24px] rounded-bl-none rotate-[12deg] shadow-2xl z-10 flex items-center justify-center">
          <span className="text-[#8B6F47] font-black text-[24px] uppercase tracking-tight text-center">FIX WIFI</span>
        </div>

        <div className="absolute top-[180px] right-[140px] w-[155px] h-[140px] bg-[#A8D0E6] rounded-[24px] rotate-[8deg] shadow-2xl z-10 flex items-center justify-center">
          <span className="text-[#2C4A6E] font-black text-[19px] uppercase tracking-tight text-center leading-[1.2]">PLAN<br/>YOUR<br/>DAY</span>
        </div>

        <div className="absolute top-[320px] right-[80px] w-[120px] h-[120px] z-20">
          <div className="relative w-full h-full bg-[#EFEFEF] rounded-full flex items-center justify-center shadow-2xl rotate-[15deg]">
            <div className="absolute inset-0 border-[3px] border-dashed border-[#999] rounded-full"></div>
            <svg className="w-full h-full absolute" viewBox="0 0 100 100">
              <path d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" id="circlePath2"></path>
              <text fill="#666" fontSize="7.5" fontWeight="900" letterSpacing="2">
                <textPath href="#circlePath2" startOffset="0%">
                  CONVERT TO JPG • HEIC • PDF •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="absolute top-[400px] right-[110px] w-[230px] h-[105px] bg-[#FFB6D9] rounded-[24px] rounded-tr-none -rotate-[8deg] shadow-2xl z-10 flex items-center justify-center">
          <span className="text-[#7D2E5C] font-black text-[19px] uppercase tracking-tight text-center leading-[1.2]">MANAGE<br/>YOUR MAC</span>
        </div>

        <div className="absolute bottom-[140px] right-[160px] w-[175px] h-[105px] bg-[#FFCC99] rounded-[24px] rotate-[12deg] shadow-2xl z-10 flex items-center justify-center">
          <span className="text-[#7B3F00] font-black text-[19px] uppercase tracking-tight text-center leading-[1.2]">CODE<br/>EASIER</span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4 animate-fade-in-up">
        
        <div className="w-[120px] h-[120px] bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-[28px] shadow-2xl flex items-center justify-center mb-10 border border-white/10 relative group hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[28px] pointer-events-none"></div>
            <div className="grid grid-cols-2 gap-1.5 transform rotate-45">
                <div className="w-[26px] h-[26px] bg-gradient-to-br from-[#FFB88C] to-[#FF9F6F] rounded-md"></div>
                <div className="w-[26px] h-[26px] bg-gradient-to-br from-[#FFB88C] to-[#FF9F6F] rounded-md"></div>
                <div className="w-[26px] h-[26px] bg-gradient-to-br from-[#FFB88C] to-[#FF9F6F] rounded-md"></div>
                <div className="w-[26px] h-[26px] bg-gradient-to-br from-[#FFB88C] to-[#FF9F6F] rounded-md"></div>
            </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4 leading-[1.05] text-center">
          Dozens of apps.<br />
          <span className="text-white">One subscription.</span><br />
          <span className="text-white">$9.99</span>
        </h1>

        <div className="flex flex-row items-center gap-3 mt-8">
          <button className="bg-white hover:bg-gray-100 text-black font-medium text-[17px] px-10 py-4 rounded-[20px] shadow-lg transition-all transform hover:scale-105 active:scale-95 h-[60px] flex items-center justify-center">
            Try free for 7 days
          </button>
          
          <button aria-label="Apple" className="bg-white hover:bg-gray-100 w-[60px] h-[60px] rounded-[20px] shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center group">
            <AppleIcon className="w-6 h-6 text-black" />
          </button>
          
          <button aria-label="Google" className="bg-white hover:bg-gray-100 w-[60px] h-[60px] rounded-[20px] shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
        </div>

        <p className="text-gray-400 mt-6 text-base font-normal max-w-md text-center">
          Power up your workflow with Setapp, a smart way to get apps.
        </p>
      </div>

    </div>
  );
};

export default Hero;
