import { useContextState } from "@ne-state";
import { ThemeStore } from "./ThemeStore";

export default function RenderTheme() {
  const theme = useContextState(ThemeStore.StoreContext, (s) => s.theme);
  return (
    <div
      style={{
        width: "30vw",
        height: "30vh",
        backgroundColor: theme === "dark" ? "black" : "white",
        border: "1px solid gray",
      }}
    ></div>
  );
}
