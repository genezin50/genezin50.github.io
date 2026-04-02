export function setupSystemTheme() {
  if (typeof window === "undefined") return () => {};
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = () => {
    root.classList.toggle("dark", media.matches);
  };

  applyTheme();

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }

  if (typeof media.addListener === "function") {
    media.addListener(applyTheme);
    return () => media.removeListener(applyTheme);
  }

  return () => {};
}
