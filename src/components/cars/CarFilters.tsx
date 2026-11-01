interface CarFiltersProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    maxPrice: number;
    onMaxPriceChange: (value: number) => void;
    onlyFavorites: boolean;
    onOnlyFavoritesChange: (value: boolean) => void;
    minPriceLimit?: number;
    maxPriceLimit?: number;
    favoritesCount: number;
  }
  
  const CarFilters =({
    searchQuery,
    onSearchChange,
    maxPrice,
    onMaxPriceChange,
    onlyFavorites,
    onOnlyFavoritesChange,
    minPriceLimit = 25000,
    maxPriceLimit = 150000,
    favoritesCount,
  }: CarFiltersProps)=> {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-8 text-slate-100 flex flex-col md:flex-row gap-5 items-stretch md:items-center justify-between">

        <div className="flex-1 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="جستجو در نام یا برند خودرو..."
            className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-2.5 text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute left-3 top-2.5 text-slate-500 hover:text-slate-300 text-sm"
            >
              ✕
            </button>
          )}
        </div>
  
        <div className="flex flex-col gap-1.5 md:w-64">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>حداکثر قیمت:</span>
            <span className="font-semibold text-emerald-400">
              ${maxPrice.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min={minPriceLimit}
            max={maxPriceLimit}
            step={5000}
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
          />
        </div>
  
        <button
          type="button"
          onClick={() => onOnlyFavoritesChange(!onlyFavorites)}
          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition ${
            onlyFavorites
              ? "bg-red-500/10 border-red-500/40 text-red-400"
              : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={`w-4 h-4 ${
              onlyFavorites ? "fill-red-500 text-red-500" : "fill-none stroke-current stroke-2"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span>علاقه‌مندی‌ها</span>
          {favoritesCount > 0 && (
            <span className="px-1.5 py-0.5 text-xs rounded-full bg-slate-800 text-slate-300">
              {favoritesCount}
            </span>
          )}
        </button>
      </div>
    );
  }
  export default CarFilters;