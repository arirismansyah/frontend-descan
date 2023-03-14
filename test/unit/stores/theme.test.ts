import { useThemeStore } from "@/stores/theme";

describe("state", () => {
  it("track theme", () => {
    const theme = useThemeStore();
    excpect(theme.changeTheme).toBe(false);
  });
});
