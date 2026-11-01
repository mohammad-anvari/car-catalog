import { useEffect, useState } from "react";

export default function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>(()=>{
        const saved=localStorage.getItem('car_favorites');
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(()=>{
        localStorage.setItem('car_favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (id: string) => {
        setFavorites(prev=>{
            if(prev.includes(id)){
                return prev.filter(item=>item!==id);
            }
            return [...prev, id];
        });
    };
    const isFavorite = (id: string) => {
        return favorites.includes(id);
    };
    return { favorites, toggleFavorite, isFavorite };

}