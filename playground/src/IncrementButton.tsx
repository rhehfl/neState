import { useContextState } from "@goooduyn/ne-state";
import CounterStore from "./counterStore";

export default function IncrementButton() {
  const inc = useContextState(CounterStore.StoreContext, (s) => s.increment);
  return (
    <div>
      <button onClick={inc}>+1</button>
    </div>
  );
}
