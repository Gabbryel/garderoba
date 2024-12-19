import React from "react";
import Image from "next/image";
import logo from '@/public/wardrobe-logo.png';
const Footer = () => {
  return (  
  <footer className="w-full bg-white p-8">
  <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
    <Image src={logo} className="w-10 h-10" alt="garderoba profesionala pentru evenimente"/>
 
    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
      {/* <li>
        <a
          href="#"
          className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          About Us
        </a>
      </li> */}
      {/* <li>
        <a
          href="#"
          className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          License
        </a>
      </li> */}
      {/* <li>
        <a
          href="#"
          className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
        >
          Contribute
        </a>
      </li> */}
      <li>
        <p
          className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-lg"
        >
          <b> Dragoș Hriscu </b>| dragos.hriscu@zebrarec.com | +40745944367
        </p>
      </li>
    </ul>
  </div>
  <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
    Copyright © 2024&nbsp; 
    <a href="#" target="_blank" rel="noreferrer">ZebraLabs</a>.
  </p>
  </footer>
  );
}
 
export default Footer;
