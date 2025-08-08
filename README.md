🪶 neState
React Context + useSyncExternalStore 기반의 경량 상태 관리 라이브러리
컴포넌트에서 필요한 상태만 선택적으로 구독하여 불필요한 리렌더링을 방지합니다.

✨ 특징
Provider 단위 상태 격리
각 Provider 내부에서만 상태가 공유됩니다.

부분 구독(selector)
필요한 상태만 선택적으로 구독 → 해당 값이 바뀌는 컴포넌트만 리렌더

React 18 공식 API (useSyncExternalStore) 기반
안정적인 외부 스토어 동기화 방식

Zero dependency
미들웨어, devtool 같은 부가 기능 없이 가볍게 사용

📦 설치
bash
복사
npm install my-context-store
🚀 사용 방법

1. 스토어 생성
   ts
   복사
   // counterStore.ts
   import { createStoreProvider } from "my-context-store";

export const { Provider: CounterProvider, StoreContext: CounterContext } =
createStoreProvider<{ count: number; increment: () => void; decrement: () => void }>(
(set, get) => ({
count: 0,
increment: () => set((prev) => ({ count: prev.count + 1 })),
decrement: () => set((prev) => ({ count: prev.count - 1 })),
})
); 2. 스토어 사용 훅
ts
복사
// useCounter.ts
import { useStore } from "my-context-store";
import { CounterContext } from "./counterStore";

export const useCounter = <U>(selector: (state: { count: number; increment: () => void; decrement: () => void }) => U) =>
useStore(CounterContext, selector); 3. 컴포넌트에서 사용
tsx
복사
import { CounterProvider } from "./counterStore";
import { useCounter } from "./useCounter";

function CounterDisplay() {
const count = useCounter((state) => state.count);
console.log("Display 렌더");
return <h1>{count}</h1>;
}

function CounterButtons() {
const increment = useCounter((state) => state.increment);
const decrement = useCounter((state) => state.decrement);
console.log("Buttons 렌더");
return (
<>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
</>
);
}

export default function App() {
return (
<CounterProvider>
<CounterDisplay />
<CounterButtons />
</CounterProvider>
);
}
⚙️ API
createStoreProvider(initializer)
스토어 Provider와 Context를 생성합니다.

initializer: (set, get) => initialState

set: 상태 일부를 업데이트하는 함수 (객체 병합 방식)

get: 현재 상태를 반환하는 함수

ts
복사
const { Provider, StoreContext } = createStoreProvider((set, get) => ({
...
}));
useStore(context, selector)
Context와 selector 함수를 받아서, selector 결과가 변경될 때만 리렌더링합니다.

context: createStoreProvider로 생성한 Context

selector: (state) => 부분 상태

리턴값: selector 결과

ts
복사
const value = useStore(StoreContext, (state) => state.someValue);
🔍 작동 방식
Context에는 **store API(참조)**만 들어감 → 참조 자체는 바뀌지 않음

useSyncExternalStore가 store를 구독(subscribe)

store가 변경되면 각 컴포넌트의 selector 실행

selector 결과가 이전 값과 다르면 해당 컴포넌트만 리렌더

📄 라이선스
MIT
