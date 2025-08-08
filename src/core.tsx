export type StoreApi<T extends object> = {
  get: () => T;
  set: (partial: Partial<T> | ((state: T) => Partial<T>)) => void;
  subscribe: (listener: () => void) => () => void;
};

export function createStore<T extends object>(initialState: T): StoreApi<T> {
  let state = initialState;
  const listeners = new Set<() => void>();

  const get = () => state;

  const set: StoreApi<T>["set"] = (partial) => {
    const next = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(next, state)) {
      state = { ...state, ...next };
      emitChange();
    }
  };

  const emitChange = () => {
    for (let listener of listeners) {
      listener();
    }
  };

  const subscribe: StoreApi<T>["subscribe"] = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { get, set, subscribe };
}

export function shallow<T extends object>(a: T, b: T) {
  if (Object.is(a, b)) return true;

  if (typeof a !== "object" || typeof b !== "object") return false;
  if (a === null || b === null) return false;

  const keysA = Object.keys(a) as (keyof T)[];
  const keysB = Object.keys(b) as (keyof T)[];
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!(key in b) || !Object.is(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
