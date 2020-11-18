import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";

import { counterState } from "@store/recoil/atoms";
import { doubleCounter } from "@store/recoil/selectors";

export default function Home() {
  const [counter] = useRecoilState(counterState);
  const dbCounter = useRecoilValue(doubleCounter);

  return (
    <div>
      <h1>Home</h1>
      <p>You have {counter} attoms already ;)</p>
      <p>Try to double to atoms {dbCounter} :D</p>
      <br />
      <Link href="/atoms">
        <a>Go to Atoms</a>
      </Link>
    </div>
  );
}
