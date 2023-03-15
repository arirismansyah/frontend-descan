import { useThemeStore } from "@/stores/theme";

describe('first', () => { second })("state", () => {
  it("track theme", () => {
    const theme = useThemeStore();
    excpect(theme.changeTheme).toBe(false);
  });
});
