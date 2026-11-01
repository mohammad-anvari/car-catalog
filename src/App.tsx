import { useState, useMemo } from "react";
import useCars from "./hooks/useCars";
import useFavorites from "./hooks/useFavorites";
import type { Car } from "./types/car";

import CarFilters from "./components/cars/CarFilters";
import GridCars from "./components/cars/GridCars";
import CarModal from "./components/cars/CarModal";
import ErrorMessage from "./components/common/ErrorMessage";

export default function App() {
  const { cars, loading, error, refetch } = useCars();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(150000);
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPrice = car.price <= maxPrice;

      const matchesFavorites = onlyFavorites ? favorites.includes(car.id) : true;

      return matchesSearch && matchesPrice && matchesFavorites;
    });
  }, [cars, searchQuery, maxPrice, onlyFavorites, favorites]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* هدر سایت */}
        <header className="mb-10 text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            کاتالوگ خودروهای منتخب
          </h1>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">
            بررسی مشخصات فنی، قیمت روز و ثبت خودروهای مورد علاقه در یک نگاه
          </p>
        </header>

        <CarFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          onlyFavorites={onlyFavorites}
          onOnlyFavoritesChange={setOnlyFavorites}
          favoritesCount={favorites.length}
        />

        {error ? (
          <ErrorMessage message={error} onRetry={() => refetch(false)} />
        ) : (
          <GridCars
            cars={filteredCars}
            isLoading={loading}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
            onSelectCar={setSelectedCar}
          />
        )}

        {selectedCar && (
          <CarModal
            car={selectedCar}
            onClose={() => setSelectedCar(null)}
            isFavorite={isFavorite(selectedCar.id)}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </div>
  );
}