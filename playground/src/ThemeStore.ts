import { createStoreProvider } from "@goooduyn/ne-state";
type ThemeState = {
  theme: "white" | "dark";
  toggleTheme: () => void;
};
export const ThemeStore = createStoreProvider<ThemeState>((set, get) => ({
  theme: "white",
  toggleTheme: () =>
    set((prev) => ({ theme: prev.theme === "white" ? "dark" : "white" })),
}));
