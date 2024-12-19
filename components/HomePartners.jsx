import React from 'react';
import Image from 'next/image';
import kristal from '@/public/partners/kristal.png';
import bplr from '@/public/partners/bplr.png';
import sunrise from '@/public/partners/sunrise.png';
import falcon from '@/public/partners/falcon.png';
import emagic from '@/public/partners/emagic.png';
import zebrarec from '@/public/partners/zebrarec.png';
import greenWheel from '@/public/partners/green-wheel.png';
import blackWhite from '@/public/partners/black-white.png';
import bmw from '@/public/partners/bmw.png';
import fish from '@/public/partners/fish.png';
import clubmidi from '@/public/partners/clubmidi.png';
import maraton from '@/public/partners/maraton.png';
import bat from '@/public/partners/bat.png';
import bc from '@/public/partners/bc.png';
import yif from '@/public/partners/yif.png';
import HomeLocations from './HomeLocations';

const HomePartners = () => {
  const photos = [ kristal, bplr, sunrise, falcon, emagic, zebrarec, greenWheel, blackWhite, bmw, fish, clubmidi, maraton, bat, bc, yif ];
  const alts = [ 'Kristal club Bucuresti - Kristal Night Out Hala Laminor', 'B/plr events Timisoara', 'Sunrise','Primaria Sectorului 1 Bucuresti',  'Emagic events Bucuresti, Piata Constitutie Arena Nationala', 'Zebra Night Show. Caex Bacau, Londra, Bucuresti, Vama Veche, Iasi, Brasov, Timisoara', 'Mioritmic festival - Cluj', 'Take Notes - Bucuresti, Hala Laminor, Amsterdam', 'BMW - Anapan Iasi', 'Proudly Made by Us- Brasov, Dor de Munte, Wego Spot, LesdeuxAlpes', 'Club Midi - Cluj Napoca', 'Maraton festival - Bacau Iasi Vama Veche', 'British American Tabaco - Romexpo, Casino Sinaia, Sala Polivalenta, Federatia Romana de Tir', 'Primaria Bacau', 'Young Island Festival - Bacău'];
  return ( 
    <>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
          {photos.map((photo, index) => (
            <Image key={index} className="col-span-1 max-h-24 w-full object-contain lg:col-span-1" src={photo} alt={alts[index]} height={200}  />
          ))}
        </div>
    <HomeLocations />
      </div>
    </div>
    </>
  );
}
 
export default HomePartners;