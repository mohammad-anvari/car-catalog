import { useEffect, useState, useCallback } from "react";
import type { Car } from "../types/car";
import { fetchCars } from "../services/carsApi";

export default function useCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async (shouldFail = false) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCars(shouldFail);
      setCars(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'خطای ناشناخته');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { cars, loading, error, refetch: loadData };
}