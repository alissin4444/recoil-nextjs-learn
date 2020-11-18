import { selector } from "recoil";

import { counterState } from "@store/recoil/atoms";

export const doubleCounter = selector({
  key: "doubleCounter",
  get: ({ get }) => {
    const counter = get(counterState);

    return counter * 2;
  },
});
