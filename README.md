# 🪶 neState

**React Context + `useSyncExternalStore`** 기반의 경량 상태 관리 라이브러리  
컴포넌트에서 **필요한 상태만 선택적으로 구독**하여 불필요한 리렌더링을 방지합니다.

---

## ✨ 특징

- **Provider 단위 상태 격리**  
  각 Provider 내부에서만 상태가 공유됩니다.
- **부분 구독(selector)**  
  필요한 상태만 선택적으로 구독 → 해당 값이 바뀌는 컴포넌트만 리렌더
- **React 18 공식 API (`useSyncExternalStore`) 기반**  
  안정적인 외부 스토어 동기화 방식
- **Zero dependency**  
  미들웨어, DevTools 같은 부가 기능 없이 가볍게 사용

---

## 📦 설치

````bash
npm i @goooduyn/ne-state
# 또는
yarn add @goooduyn/ne-state


## 🚀 빠른 시작

### 1. 스토어 생성

```ts
// counterStore.ts
import { createStoreProvider } from "@goooduyn/ne-state";

type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const CounterStore = createStoreProvider<CounterState>((set) => ({
  count: 0,
  increment: () => set((prev) => ({ count: prev.count + 1 })),
  decrement: () => set((prev) => ({ count: prev.count - 1 })),
}));
````

### 2.Provider로 감싸기

```tsx
// App.tsx
export default function App() {
  return (
    <CounterStore.Provider>
      <CounterDisplay />
      <div style={{ display: "flex", gap: 8 }}>
        <IncrementButton />
        <DecrementButton />
      </div>
    </CounterStore.Provider>
  );
}
```

### 3. 스토어 구독

```tsx
// CounterDisplay.tsx
import { useContextState } from "@goooduyn/ne-state";
import { CounterStore } from "./counterStore";

export default function CounterDisplay() {
  // count만 구독 → count가 바뀔 때만 리렌더
  const count = useContextState(CounterStore.StoreContext, (s) => s.count);
  return <h1>{count}</h1>;
}

export default function IncrementButton() {
  // 액션만 구독 → 상태 변화해도 이 컴포넌트는 재렌더 최소화
  const inc = useContextState(CounterStore.StoreContext, (s) => s.increment);
  return <button onClick={inc}>+1</button>;
}
```
