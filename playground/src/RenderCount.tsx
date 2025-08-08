import { useStore } from "@ne-state";
import CounterStore from "./counterStore";

export default function RenderCount() {
  const count = useStore(CounterStore.StoreContext, (s) => s.count);

  return <div>{count}</div>;
}
