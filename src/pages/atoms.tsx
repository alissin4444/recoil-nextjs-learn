import Link from "next/link";
import { useRecoilState } from "recoil";

import { counterState } from "@store/recoil/atoms";

export default function Atoms() {
  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <div>
      <h1>Atoms counter</h1>
      <p>Current count: {counter}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Click here to up the value
      </button>
      <br />
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
