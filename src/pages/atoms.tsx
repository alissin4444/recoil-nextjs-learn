import Link from "next/link";
import { useRecoilState } from "recoil";

import { useCounterActions, counterState } from "@store/recoil/counter";

export default function Atoms() {
  const [counter, setCounter] = useRecoilState(counterState);

  const counterActions = useCounterActions();

  return (
    <div>
      <h1>Atoms counter</h1>
      {counter.isLoading && <p>Loading...</p>}
      <p>Current count: {counter.count}</p>
      <button type="button" onClick={counterActions.upCounter}>
        Click here to up the value
      </button>
      <br />
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
