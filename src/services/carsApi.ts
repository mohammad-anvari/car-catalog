import carsData from '../data/cars.json';
import type { Car } from '../types/car';

export const fetchCars = async (shouldFail = false): Promise<Car[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("خطا در دریافت اطلاعات خودروها. لطفاً دوباره تلاش کنید."));
      } else {
        resolve(carsData as Car[]);
      }
    }, 700); 
  });
};