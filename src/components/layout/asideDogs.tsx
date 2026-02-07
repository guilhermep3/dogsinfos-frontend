"use client"
import { useEffect, useState } from "react";
import { AsideItem } from "../asideItem";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useMobileAsideStore } from "@/store/mobileAsideStore";
import { DogsResponse } from "@/api/useDogs";

type props = {
  data: DogsResponse;
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
  data,
  selectedSize, setSelectedSize,
  selectedClassification, setSelectedClassification,
  selectedColor, setSelectedColor,
  selectedCountry, setSelectedCountry
}: props) => {
  const [isMobile, setIsMobile] = useState(true);
  const [showAllClassifications, setShowAllClassifications] = useState(false);
  const [showAllColors, setShowAllColors] = useState(false);
  const [showAllCountries, setShowAllCountries] = useState(false);
  const { isAsideOpen, closeAside } = useMobileAsideStore();

  const sizeOrder = ['Pequeno', 'Médio', 'Grande'];

  const uniqueSizes = data?.availableOptions?.allSizes ||
    [...new Set(data.dogs.map(dog => dog.size))]
      .sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));

  const uniqueClassifications = data?.availableOptions?.allClassifications ||
    [...new Set(data.dogs.flatMap(dog => dog.classification))]
      .sort((a, b) => a.localeCompare(b));

  const uniqueColors = data?.availableOptions?.allColors ||
    [...new Set(data.dogs.flatMap(dog => dog.colors))]
      .sort((a, b) => a.localeCompare(b));

  const uniqueCountries = data?.availableOptions?.allCountries ||
    [...new Set(data.dogs.map(dog => dog.countryOrigin))]
      .sort((a, b) => a.localeCompare(b));

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) closeAside();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeAside]);

  const renderToggle = (expanded: boolean, toggleFn: () => void) => (
    <button
      onClick={toggleFn}
      className="flex items-center gap-2 text-blue-900 text-sm mt-2 ml-2 hover:underline cursor-pointer"
    >
      {expanded ? <><ChevronUp /> Mostrar menos</> : <><ChevronDown /> Mostrar mais</>}
    </button>
  );

  return (
    <aside className={`flex flex-col border bg-white shadow-xl transition-all duration-300 ease-in-out
      ${isMobile ? 'fixed left-0 right-0 bottom-0 z-50 max-h-[85vh] w-full rounded-t-3xl' : 'sticky top-24 w-72 h-fit rounded-2xl'}
      ${isMobile ? (isAsideOpen ? 'translate-y-0' : 'translate-y-full') : ''}
    `}>
      {isMobile && (
        <div className="flex flex-col items-center py-4 border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white rounded-t-3xl">
          <div className="w-12 h-1.5 bg-slate-300 rounded-full mb-3"></div>
          <div className="flex justify-between items-center w-full px-6">
            <h3 className="text-lg font-bold text-slate-800">Filtros</h3>
            <button onClick={() => closeAside()}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="p-6 border-b border-slate-200 bg-gradient-to-br from-blue-50 to-white rounded-t-2xl">
          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filtros
          </h3>
        </div>
      )}
      <div className={`flex flex-col gap-6 ${isMobile ? 'p-6 overflow-y-auto' : 'p-6'}`}>
        <div className="filter-group">
          <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
            Tamanho
          </p>
          <div className="space-y-2">
            {uniqueSizes.map(size => (
              <AsideItem key={size} label={size}
                selectedList={selectedSize}
                setSelectedList={setSelectedSize}
              />
            ))}
          </div>
        </div>
        <div className="filter-group">
          <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-amber-600 rounded-full"></span>
            Classificação
          </p>
          <div className="space-y-2">
            {(showAllClassifications ? uniqueClassifications : uniqueClassifications.slice(0, 5)).map(classification => (
              <AsideItem key={classification} label={classification}
                selectedList={selectedClassification}
                setSelectedList={setSelectedClassification}
              />
            ))}
            {uniqueClassifications.length > 5 &&
              renderToggle(showAllClassifications, () => setShowAllClassifications(!showAllClassifications))}
          </div>
        </div>
        <div className="filter-group">
          <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-green-600 rounded-full"></span>
            Cores
          </p>
          <div className="space-y-2">
            {(showAllColors ? uniqueColors : uniqueColors.slice(0, 5)).map(color => (
              <AsideItem key={color} label={color}
                selectedList={selectedColor}
                setSelectedList={setSelectedColor}
              />
            ))}
            {uniqueColors.length > 5 &&
              renderToggle(showAllColors, () => setShowAllColors(!showAllColors))}
          </div>
        </div>
        <div className="filter-group">
          <p className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-purple-600 rounded-full"></span>
            País de origem
          </p>
          <div className="space-y-2">
            {(showAllCountries ? uniqueCountries : uniqueCountries.slice(0, 5)).map(country => (
              <AsideItem key={country} label={country}
                selectedList={selectedCountry}
                setSelectedList={setSelectedCountry}
              />
            ))}
            {uniqueCountries.length > 5 && renderToggle(showAllCountries, () => setShowAllCountries(!showAllCountries))}
          </div>
        </div>
      </div>
      {(selectedSize.length > 0 || selectedClassification.length > 0 || selectedColor.length > 0 || selectedCountry.length > 0) && (
        <div className="p-6 border-t border-slate-200 bg-slate-50 rounded-b-2xl">
          <button
            onClick={() => {
              setSelectedSize([]);
              setSelectedClassification([]);
              setSelectedColor([]);
              setSelectedCountry([]);
            }}
            className="w-full py-3 px-4 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </aside>
  );
};