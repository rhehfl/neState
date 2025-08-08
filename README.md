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
