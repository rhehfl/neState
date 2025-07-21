import {
  createContext,
  useContext,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Listener = () => void;

function createStore<T extends object>(initialState: T) {
  let state = initialState;
  const listeners = new Set<Listener>();

  const getState = () => state;

  const setState = (partial: Partial<T> | ((prev: T) => Partial<T>)) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    const prev = state;
    state = { ...state, ...nextState };
    if (state !== prev) listeners.forEach((l) => l());
  };

  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
}

function createScopedStore<T extends object>(initializer: () => T) {
  const StoreContext = createContext<ReturnType<typeof createStore<T>> | null>(
    null
  );

  function Provider({ children }: { children: ReactNode }) {
    const storeRef = useRef<ReturnType<typeof createStore<T>>>();

    if (!storeRef.current) {
      const baseState = initializer();
      storeRef.current = createStore(baseState);
    }

    return (
      <StoreContext.Provider value={storeRef.current}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStore<U>(selector: (state: T) => U): U {
    const store = useContext(StoreContext);
    if (!store) throw new Error("useStore must be used within a Provider");

    return useSyncExternalStore(
      store.subscribe,
      () => selector(store.getState()),
      () => selector(store.getState())
    );
  }

  return { Provider, useStore };
}

export { createScopedStore };
