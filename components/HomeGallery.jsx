import React from "react";
import Image from "next/image";
import wardrobe from "@/public/landing.png";
import wardrobe001 from "@/public/wardrobe-gallery-001.png";
import wardrobe002 from "@/public/wardrobe-gallery-002.png";
import wardrobe003 from "@/public/wardrobe-gallery-003.png";
import wardrobe004 from "@/public/wardrobe-gallery-004.png";
import wardrobe005 from "@/public/wardrobe-gallery-005.png";

const HomeGallery = () => {
  return ( 
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 p-4">
  <div className="grid gap-4">
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center"
        src={wardrobe}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center "
        src={wardrobe001}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center"
        src={wardrobe002}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center "
        src={wardrobe003}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center"
        src={wardrobe005}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center"
        src={wardrobe002}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center "
        src={wardrobe001}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center"
        src={wardrobe}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center "
        src={wardrobe001}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
        className="h-auto max-w-full min-w-full min-h-full rounded-lg object-cover object-center"
        src={wardrobe002}
        alt="gallery-photo"
      />
    </div>
  </div>
</div>
   );
}
 
export default HomeGallery;