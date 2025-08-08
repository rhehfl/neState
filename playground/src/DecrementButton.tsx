import { useContextState } from "@ne-state";
import CounterStore from "./counterStore";

export default function DecrementButton() {
  const dec = useContextState(CounterStore.StoreContext, (s) => s.decrement);
  return (
    <div>
      <button onClick={dec}>-1</button>
    </div>
  );
}
