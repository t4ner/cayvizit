import React from "react";
import instagram from "/staticThemePhoto/instagram.png";
import banner from "/staticThemePhoto/banner.jpeg";
import profil from "/staticThemePhoto/profij.jpeg";
import menemen from "/staticThemePhoto/menemenn.jpg";
import kahvalti from "/staticThemePhoto/kahvalti.jpg";
import tost from "/staticThemePhoto/tost.webp";
import aslanbey from "/staticThemePhoto/aslanbey.webp";
import whatsapp from "/staticThemePhoto/what.webp";
import call from "/staticThemePhoto/call.png";

function App() {
  return (
    <div>
      <div className="md:w-2/4 mx-auto">
      
        <div>
          <img
            src={banner}
            className="object-cover h-[280px] w-full"
            alt="Banner"
          />
        </div>
       
        <div className="relative   bg-gray-100 h-[130px] w-full shadow-lg">
          <div className="absolute bottom-1/2 left-2">
            <img
              src={profil}
              className="rounded-full object-cover w-28 h-28"
              alt="Profil"
            />
          </div>
          <div className="mx-auto text-center pl-28">
            <h2 className="text-xl font-medium pt-3">ÖMER EREN</h2>
            <h4 className="text-lg font-medium text-gray-600">
              NUR BÜFE ÇAY EVİ
            </h4>
            <h4 className="text-lg font-medium text-gray-600">CEO</h4>
            <h4 className="text-lg font-medium text-gray-600">ÇAYVİZİT</h4>
          </div>
        </div>

       
        <div className="mt-10 flex flex-wrap gap-y-10">
          <div className="basis-1/3">
            <a
              className="flex flex-col items-center "
              href="https://www.instagram.com/omrr_erenn/"
              target="_blank"
            >
              <img src={instagram} className="w-[69px]" />
              <span className="font-medium text-sm md:text-base">
                Instagram
              </span>
            </a>
          </div>

          <div className="basis-1/3">
            <a
              className="flex flex-col items-center"
              target="_blank"
              href="tel:05358787233"
            >
              {" "}
              <img src={call} className="w-16" />
              <span className="font-medium text-sm md:text-base mt-1">Ara</span>
            </a>
          </div>

          <div className="basis-1/3">
            <a
              className="flex flex-col items-center "
              target="_blank"
              href="https://api.whatsapp.com/send?phone=905358787233"
            >
              <img src={whatsapp} className="w-16" />
              <span className="font-medium text-sm md:text-base mt-1">
                Whatshapp
              </span>
            </a>
          </div>
        </div>
        {/* social media links finish*/}
        <div className="text-xl font-medium pt-3 mt-5 px-2 text-center space-y-4">
          <p>ÇAY FİYATLARI</p>
          <p>Çay ver = 7.50 TL</p>
          <p>Çay gönder = 6.50 TL</p>
          <p>Çay versene = 5.50 TL</p>
          <p>Çay alabilir miyim = 4 TL</p>
          <p>Çay verir misin = 3.50 TL</p>
          <p>Ömer bey müsaitseniz çay alabilir miyim</p>
          <p>2 TL</p>
        </div>

        <h2 className="text-xl font-medium pt-3 mt-5 px-2">
          "Hayat bir çaydır, insan ise şeker. Sen karıştırdıkça hayattan tat
          aldığını sanırsın, hayatın seni erittiğini ise çay bitince anlarsın."
        </h2>
        <h2 className="text-xl font-medium pt-3 mt-5 px-2">
          "Masaya bırakılmış çay gibiyim, gittikçe soğuyorum hayattan."
        </h2>
      </div>
      <div className=" space-y-2 px-2 ">
        <div className=" h-60 mt-5">
          <img
            src={menemen}
            className="h-full object-cover w-full rounded-md"
          />
        </div>
        <div className="w-full h-60">
          <img
            src={aslanbey}
            className="h-full object-cover w-full rounded-md"
          />
        </div>
        <div className="w-full h-60">
          <img src={tost} className="h-full object-cover w-full rounded-md" />
        </div>
        <div className="w-full h-60">
          <img
            src={kahvalti}
            className="h-full object-cover w-full rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default App;