import IncrementButton from "./IncrementButton";
import CounterStore from "./counterStore";
import DecrementButton from "./DecrementButton";
import RenderCount from "./RenderCount";
import { ThemeStore } from "./ThemeStore";
import ThemeToggle from "./ThemeToggle";
import RenderTheme from "./RenderTheme";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <CounterStore.Provider>
        <IncrementButton />
        <DecrementButton />
        <RenderCount />
      </CounterStore.Provider>

      <ThemeStore.Provider>
        <ThemeToggle />
        <RenderTheme />
      </ThemeStore.Provider>
    </div>
  );
}
