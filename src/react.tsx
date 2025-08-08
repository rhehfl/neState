import {
  Context,
  createContext,
  ReactNode,
  useContext,
  useRef,
  useSyncExternalStore,
} from "react";
import { createStore, StoreApi } from "./core";

type Initializer<T extends object> = (
  set: StoreApi<T>["set"],
  get: StoreApi<T>["get"]
) => T;

export function createStoreProvider<T extends object>(
  initializer: Initializer<T>
) {
  const StoreContext = createContext<StoreApi<T> | null>(null);

  function Provider({ children }: { children: ReactNode }) {
    const storeRef = useRef<StoreApi<T> | null>(null);
    if (!storeRef.current) {
      let store: StoreApi<T>;
      const set: StoreApi<T>["set"] = (partial) => store.set(partial);
      const get: StoreApi<T>["get"] = () => store.get();
      store = createStore(initializer(set, get));
      storeRef.current = store;
    }

    return (
      <StoreContext.Provider value={storeRef.current}>
        {children}
      </StoreContext.Provider>
    );
  }

  return { Provider, StoreContext };
}

export function useStore<T extends object, U>(
  ctx: Context<StoreApi<T> | null>,
  selector: (state: T) => U
): U {
  const store = useContext(ctx);
  if (!store) throw new Error("useStore must be used within its Provider");
  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.get()),
    () => selector(store.get())
  );
}
