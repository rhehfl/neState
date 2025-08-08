import { useStore } from "@ne-state";
import CounterStore from "./counterStore";

export default function IncrementButton() {
  const inc = useStore(CounterStore.StoreContext, (s) => s.increment);
  return (
    <div>
      <button onClick={inc}>+1</button>
    </div>
  );
}
