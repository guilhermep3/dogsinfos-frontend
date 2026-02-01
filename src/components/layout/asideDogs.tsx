"use client"
import { useEffect, useState } from "react";
import { AsideItem } from "../asideItem";
import { DogType } from "@/types/dogType";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useMobileAsideStore } from "@/store/mobileAsideStore";

const asideTitleStyle = "p-3 bg-gray-200 border-l-4 border-blue-700 font-bold text-base text-blue-900 cursor-pointer";

type props = {
  dogsData: DogType[];
  selectedSize: string[];
  selectedClassification: string[];
  selectedColor: string[];
  selectedCountry: string[];
  setSelectedSize: (i: string[]) => void;
  setSelectedClassification: (i: string[]) => void;
  setSelectedColor: (i: string[]) => void;
  setSelectedCountry: (i: string[]) => void;
}

export const AsideDogs = ({
  dogsData,
  selectedSize, setSelectedSize,
  selectedClassification, setSelectedClassification,
  selectedColor, setSelectedColor,
  selectedCountry, setSelectedCountry
}: props) => {
  const [isMobile, setIsMobile] = useState(true);
  const [showAllColors, setShowAllColors] = useState(false);
  const [showAllCountries, setShowAllCountries] = useState(false);
  const { isAsideOpen, closeAside } = useMobileAsideStore();

  const sizeOrder = ['Pequeno', 'Médio', 'Grande'];

  const uniqueSizes = [...new Set(dogsData.map(dog => dog.size)
    .sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b))
  )];
  const uniqueClassifications = [...new Set(dogsData.flatMap(dog => dog.classification)
    .sort((a, b) => a.localeCompare(b))
  )];
  const uniqueColors = [...new Set(dogsData.flatMap(dog => dog.colors)
    .sort((a, b) => a.localeCompare(b))
  )];
  const uniqueCountries = [...new Set(dogsData.map(dog => dog.countryOrigin)
    .sort((a, b) => a.localeCompare(b))
  )];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) closeAside();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderToggle = (expanded: boolean, toggleFn: () => void) => (
    <button
      onClick={toggleFn}
      className="flex items-center gap-2 text-blue-900 text-sm mt-2 ml-2 hover:underline cursor-pointer"
    >
      {expanded ? <><ChevronUp /> Mostrar menos</> : <><ChevronDown /> Mostrar mais</>}
    </button>
  );

  return (
    <aside className={`flex flex-col h-full border border-r-2 bg-zinc-50 border-zinc-300 transition duration-200
      ${isMobile ? 'fixed left-0 right-0 bottom-0 z-40 max-h-3/4 w-full overflow-y-scroll' : ' top-0 w-64'}
      ${isMobile ? (isAsideOpen ? '-translate-y-0' : 'translate-y-full') : ''}
    `}>
      <div className="flex justify-start items-center p-3 lg:hidden">
        <X className="mr-auto cursor-pointer text-black z-40" onClick={() => closeAside()} />
      </div>
      <div className="flex flex-col">
        <p className={asideTitleStyle}>Tamanho</p>
        <div className="py-2">
          {uniqueSizes.map(size => (
            <AsideItem key={size} label={size}
              selectedList={selectedSize} setSelectedList={setSelectedSize}
            />
          ))}
        </div>
        <p className={asideTitleStyle}>Classificação</p>
        <div className="py-2">
          {uniqueClassifications.map(size => (
            <AsideItem key={size} label={size}
              selectedList={selectedClassification} setSelectedList={setSelectedClassification}
            />
          ))}
        </div>
        <p className={asideTitleStyle}>Cores</p>
        <div className="py-2">
          {(showAllColors ? uniqueColors : uniqueColors.slice(0, 5)).map(color => (
            <AsideItem key={color} label={color}
              selectedList={selectedColor} setSelectedList={setSelectedColor}
            />
          ))}
          {uniqueColors.length > 7 && renderToggle(showAllColors, () => setShowAllColors(!showAllColors))}
        </div>
        <p className={asideTitleStyle}>País de origem</p>
        <div className="py-2">
          {(showAllCountries ? uniqueCountries : uniqueCountries.slice(0, 5)).map(country => (
            <AsideItem key={country} label={country}
              selectedList={selectedCountry} setSelectedList={setSelectedCountry}
            />
          ))}
          {uniqueCountries.length > 7 && renderToggle(showAllCountries, () => setShowAllCountries(!showAllCountries))}
        </div>
      </div>
    </aside>
  );
};
