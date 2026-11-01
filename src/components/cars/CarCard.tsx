import type { Car } from "../../types/car";

interface CarCardProps {
  car: Car;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelect: (car: Car) => void;
}

 const CarCard = ({
  car,
  isFavorite,
  onToggleFavorite,
  onSelect,
}: CarCardProps) => {
  return (
    <div
      onClick={() => onSelect(car)}
      className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition cursor-pointer flex flex-col justify-between"
    >
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-48 w-full object-cover group-hover:scale-105 transition duration-300"
          loading="lazy"
        />

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(car.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/70 hover:bg-slate-900 text-slate-300 transition backdrop-blur-sm"
          aria-label="favorite"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-5 h-5 transition ${
              isFavorite ? "fill-red-500 text-red-500" : "fill-none stroke-current stroke-2"
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

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex justify-between items-start gap-2">
            <h3 className="font-semibold text-lg text-slate-100 group-hover:text-emerald-400 transition">
              {car.name}
            </h3>
            <span className="text-sm font-medium text-slate-400">{car.year}</span>
          </div>

          <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
            <span className="px-2 py-1 bg-slate-800 rounded-md">{car.fuelType}</span>
            <span className="px-2 py-1 bg-slate-800 rounded-md">{car.transmission}</span>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800/80 flex justify-between items-center">
          <span className="text-lg font-bold text-slate-100">
            ${car.price.toLocaleString()}
          </span>
          <span className="text-xs text-emerald-400 group-hover:underline">
            مشاهده جزییات ←
          </span>
        </div>
      </div>
    </div>
  );
}
export default CarCard;