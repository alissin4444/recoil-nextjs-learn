import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";

import { counterState, selectors } from "@store/recoil/counter";

export default function Home() {
  const [counter] = useRecoilState(counterState);
  const doubleCounter = useRecoilValue(selectors.doubleCounter);

  return (
    <div>
      <h1>Home</h1>
      <p>You have {counter} attoms already ;)</p>
      <p>See the atoms {doubleCounter} doubled :D</p>
      <br />
      <Link href="/atoms">
        <a>Go to Atoms</a>
      </Link>
    </div>
  );
}
