import { useEffect } from "react";
import type { Car } from "../../types/car";

interface CarModalProps {
  car: Car | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

 const CarModal = ({
  car,
  onClose,
  isFavorite,
  onToggleFavorite,
}: CarModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!car) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto text-slate-100 shadow-2xl"
      >
        <div className="relative">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-64 sm:h-72 object-cover"
          />

          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-300 transition"
            aria-label="close modal"
          >
            ✕
          </button>

          <button
            onClick={() => onToggleFavorite(car.id)}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 hover:bg-slate-900 transition"
            aria-label="favorite"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 transition ${
                isFavorite
                  ? "fill-red-500 text-red-500"
                  : "fill-none stroke-white stroke-2"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl font-bold">{car.name}</h2>
              <p className="text-slate-400 text-sm mt-1">
                برند: {car.brand} • مدل سال: {car.year}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">قیمت پایه</span>
              <span className="text-2xl font-bold text-emerald-400">
                ${car.price.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <div className="flex-1 min-w-[130px] bg-slate-800/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">نوع سوخت</span>
              <span className="font-medium mt-1 block">{car.fuelType}</span>
            </div>
            <div className="flex-1 min-w-[130px] bg-slate-800/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">گیربکس</span>
              <span className="font-medium mt-1 block">{car.transmission}</span>
            </div>
            <div className="flex-1 min-w-[130px] bg-slate-800/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">قدرت موتور</span>
              <span className="font-medium mt-1 block">{car.horsepower} HP</span>
            </div>
            <div className="flex-1 min-w-[130px] bg-slate-800/60 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-400 text-xs block">کارکرد</span>
              <span className="font-medium mt-1 block">{car.mileage}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-300 mb-2">درباره خودرو</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {car.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarModal;