import { useContextState } from "@ne-state";
import CounterStore from "./counterStore";

export default function RenderCount() {
  const count = useContextState(CounterStore.StoreContext, (s) => s.count);

  return <div>{count}</div>;
}
