import { useStore } from "@ne-state";
import { StoreContext } from "./counterStore";

export default function DecrementButton() {
  const dec = useStore(StoreContext, (s) => s.decrement);
  return (
    <div>
      <button onClick={dec}>-1</button>
    </div>
  );
}
