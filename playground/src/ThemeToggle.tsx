import { useContextState } from "@ne-state";
import { ThemeStore } from "./ThemeStore";

export default function ThemeToggle() {
  const toggleTheme = useContextState(
    ThemeStore.StoreContext,
    (s) => s.toggleTheme
  );

  return <button onClick={toggleTheme}>Toggle Theme!!!</button>;
}
