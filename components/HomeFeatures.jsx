import React from "react";
import { faGear, faTag, faWarehouse, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HomeFeatures = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-900">
            Lasă-ne să lucrăm pentru tine
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            Sistem de garderobă dezvoltat de noi în peste 14 ani 
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-900">
                  < FontAwesomeIcon icon={faGear} className="size-6 text-white" />
                </div>
                Am realizat acest sistem modular & compact
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                de garderobă care se adaptează oricărui tip de eveniment. 384 de haine pot fi stocate într-un singur modul de 4.5 m2 (3m x 1.5m x 2.2m înălțime).
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-900">
                < FontAwesomeIcon icon={faTag} className="size-6 text-white" />
                </div>
                Operăm cu ajutorul unui sistem de etichete
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                perechi autoadezive, unice pentru fiecare eveniment în parte, personalizate cu numele evenimentului / organizatorului.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-900">
                <FontAwesomeIcon icon={faWarehouse} className="size-6 text-white" />
                </div>
                Capacitatea de operare este foarte mare
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                Plecăm de la 4800 de iteme și putem extinde până la 12000 iteme în funcție de necesități.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-900">
                  <FontAwesomeIcon icon={faClockRotateLeft} className="size-6 text-white" />
                </div>
                Ne recomandă experiența
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                de peste 14 ani și cele peste 200 de evenimente la care am participat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
