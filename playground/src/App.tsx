import React, { useEffect } from "react";
import { createStoreProvider } from "@ne-state";

export default function App() {
  createStoreProvider(() => {
    return {};
  });
  return (
    <div style={{ padding: 20 }}>
      <h1>ne-state playground</h1>
      <p>
        루트 <code>src</code> 변경 → HMR 즉시 반영됩니다.
      </p>
    </div>
  );
}
