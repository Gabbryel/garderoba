import React from 'react';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeContactUs = () => {
  return ( 
    <section className="mt-12 lg:mt-24">
    <div className="bg-blue-900 text-white -skew-y-1">
        <div className="container mx-auto skew-y-1">
            <div className="flex flex-col items-center py-10 text-center lg:py-20">
                <div className="w-full px-4 lg:w-1/2 lg:px-0">
                    <div className="mb-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                            Vrei o garderobă profesională pentru evenimentul tău?
                        </h2>
                        <p className="text-lg lg:text-xl opacity-80">
                            Noi suntem echipa de profesioniști care te poate ajuta.
                        </p>
                    </div>

                    <div className="mb-10">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                
                            </div>
                        </div>
                    </div>

                    <div className="text-lg flex justify-center gap-3">
                            <a href="tel:+40745944367" className="text-center">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" width={20}/>
                            </a>
                            <a href="mailto:dragos.hriscu@zebrarec.com?subject=Aș vrea să știu mai multe despre oferta voastră" className="text-center">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" width={20}/>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
   );
}
 
export default HomeContactUs;