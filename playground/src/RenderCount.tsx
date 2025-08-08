import { useStore } from "@ne-state";
import { StoreContext } from "./counterStore";

export default function RenderCount() {
  const count = useStore(StoreContext, (s) => s.count);

  return <div>{count}</div>;
}
