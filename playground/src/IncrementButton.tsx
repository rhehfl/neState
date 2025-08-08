import { useStore } from "@ne-state";
import { StoreContext } from "./counterStore";

export default function IncrementButton() {
  const inc = useStore(StoreContext, (s) => s.increment);
  return (
    <div>
      <button onClick={inc}>+1</button>
    </div>
  );
}
