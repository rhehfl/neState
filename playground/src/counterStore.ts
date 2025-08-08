import { createStoreProvider } from "@ne-state";
type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
const CounterStore = createStoreProvider<CounterState>((set, get) => ({
  count: 0,
  increment: () => set((prev) => ({ count: prev.count + 1 })),
  decrement: () => set((prev) => ({ count: prev.count - 1 })),
}));

export default CounterStore;
