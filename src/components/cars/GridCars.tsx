import type { Car } from "../../types/car";
import CarCard from "./CarCard";
import CarSkeleton from "./CarSkeleton";

interface CarGridProps {
  cars: Car[];
  isLoading: boolean;
  isFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  onSelectCar: (car: Car) => void;
}

 const GridCars = ({
  cars,
  isLoading,
  isFavorite,
  onToggleFavorite,
  onSelectCar,
}: CarGridProps) => {

  if (isLoading) {
    return (
      <div className="flex flex-wrap gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <CarSkeleton />
          </div>
        ))}
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-slate-900/50 border border-slate-800 rounded-2xl text-center">
        <p className="text-slate-400 text-base">خودرویی با این مشخصات یافت نشد.</p>
        <span className="text-xs text-slate-500 mt-1 block">
          لطفاً فیلترها یا عبارت جستجو را تغییر دهید.
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex"
        >
          <div className="w-full">
            <CarCard
              car={car}
              isFavorite={isFavorite(car.id)}
              onToggleFavorite={onToggleFavorite}
              onSelect={onSelectCar}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
export default GridCars;