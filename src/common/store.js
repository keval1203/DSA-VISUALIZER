import create from "zustand";
import { devtools } from "zustand/middleware";
import {
  sortingArray,
  compareTime,
  swapTime,
  sortingAlgorithms,
  searchingAlgorithms,
  searchingElement,
  dataStructures,
  others,


} from "./config";

export const useControls = create(
  devtools((set) => ({
    progress: "reset",
    speed: 3,
    compareTime: compareTime,
    swapTime: swapTime,
    doneCount: 0,

    startSorting: () => set({ progress: "start" }),
    pauseSorting: () => set({ progress: "pause" }),
    resetSorting: () => set({ progress: "reset", doneCount: 0 }),
    markSortngDone: () =>
      set((state) => {
        if (useData.getState().algorithm === sortingAlgorithms.length) {
          if (state.doneCount === sortingAlgorithms.length - 1)
            return { doneCount: 0, progress: "done" };
          else return { doneCount: state.doneCount + 1 };
        } else return { progress: "done" };
      }),
    setSpeed: (speed) =>
      set(() => {
        return { swapTime: 3000 / speed, compareTime: 1500 / speed, speed };
      }),
  }))
);

export const useData = create(
  devtools((set) => ({
    algorithm: 0,
    searchingAlgorithm: 0,
    searchingElement: searchingElement,
    dataStructures: 0,
    sortingArray: sortingArray,
    other: 0,
    tabTitle: 0,

    setSortingArray: (array) => set({ sortingArray: array }),
    setAlgorithm: (idx) => set({ algorithm: idx }),
    setSearchingAlgorithm: (idx) => set({ searchingAlgorithm: idx }),
    setSearchingElement: (element) => set({ searchingElement: element }),
    setDataStructure: (idx) => set({ dataStructure: idx }),
    setOther: (idx) => set({ other: idx }),
    setTabTitle: (idx) => set({ tabTitle: idx }),

  }))
);