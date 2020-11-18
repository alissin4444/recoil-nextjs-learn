import { atom, selector } from "recoil";

const INITIAL_STATE = 0;
export const counterState = atom({
  key: "counterState",
  default: INITIAL_STATE,
});

export const selectors = {
  doubleCounter: selector({
    key: "doubleCounter",
    get: ({ get }) => get(counterState) * 2,
  }),
};
