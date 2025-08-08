import { createStoreProvider } from "@ne-state";
type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};
export const { Provider, StoreContext } = createStoreProvider<CounterState>(
  (set, get) => ({
    count: 0,
    increment: () => set((prev) => ({ count: prev.count + 1 })),
    decrement: () => set((prev) => ({ count: prev.count - 1 })),
  })
);
