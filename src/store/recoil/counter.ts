import { useCallback } from "react";

import { atom, selector, useRecoilState } from "recoil";

const INITIAL_STATE = {
  isLoading: false,
  count: 0,
};

export const counterState = atom({
  key: "counterState",
  default: INITIAL_STATE,
});

export const useCounterActions = () => {
  const [counter, setCounter] = useRecoilState(counterState);

  const upCounter = useCallback(() => {
    setCounter((oldCounter) => ({ ...oldCounter, isLoading: true }));

    setTimeout(() => {
      setCounter((oldCounter) => ({
        ...oldCounter,
        count: oldCounter.count + 1,
      }));
      setCounter((oldCounter) => ({ ...oldCounter, isLoading: false }));
    }, 50);
  }, []);

  return {
    upCounter,
  };
};

export const counterSelectors = {
  doubleCounter: selector({
    key: "doubleCounter",
    get: ({ get }) => get(counterState).count * 2,
  }),
};
