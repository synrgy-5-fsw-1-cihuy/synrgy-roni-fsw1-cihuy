import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "..";
import { combineTime, getUnix } from "../../utils/filter";

export interface ICar {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  availableAt: Date;
  available: boolean;
  driverType?: number;
  type: string;
  year: string;
  options: Array<string>;
  specs: Array<string>;
}

export type ICarRedux = {
  isLoading: boolean;
  all: ICar[];
  filter: {
    driverType: number | null;
    date: string | null;
    time: string | null;
    capacity: number;
  };
};

const initialState: ICarRedux = {
  isLoading: true,
  all: [],
  filter: {
    driverType: null,
    date: null,
    time: null,
    capacity: 0,
  },
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setCarLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAllCar: (state, action: PayloadAction<ICar[]>) => {
      state.isLoading = true;
      state.all = action.payload;
      state.isLoading = false;
    },
    setFilterByDriverType: (state, action: PayloadAction<number | null>) => {
      state.filter.driverType = action.payload;
    },
    setFilterByDate: (state, action: PayloadAction<string | null>) => {
      state.filter.date = action.payload;
    },
    setFilterByTime: (state, action: PayloadAction<string | null>) => {
      state.filter.time = action.payload;
    },
    setFilterByCapacity: (state, action: PayloadAction<number>) => {
      state.filter.capacity = action.payload;
    },
    resetFilter: (state) => {
      state.filter = {
        driverType: null,
        date: null,
        time: null,
        capacity: 0,
      };
    },
  },
});

export const getFilteredCars = createSelector(
  (state: RootState) => state.car,
  ({ all, filter: { driverType, date, time, capacity } }): ICar[] => {
    const dateTime =
      date && time
        ? combineTime(date, time)
        : date
        ? Date.parse(date) / 1000
        : 0;

    return all.filter(
      (car) =>
        (!driverType || car.driverType === Number(driverType)) &&
        (!dateTime || getUnix(car.availableAt) > dateTime) &&
        (!capacity || car.capacity >= capacity)
    );
  }
);

export const {
  setCarLoading,
  setAllCar,
  setFilterByDriverType,
  setFilterByDate,
  setFilterByTime,
  setFilterByCapacity,
  resetFilter,
} = carSlice.actions;

export default carSlice.reducer;
