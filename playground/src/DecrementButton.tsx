import { useStore } from "@ne-state";
import CounterStore from "./counterStore";

export default function DecrementButton() {
  const dec = useStore(CounterStore.StoreContext, (s) => s.decrement);
  return (
    <div>
      <button onClick={dec}>-1</button>
    </div>
  );
}
