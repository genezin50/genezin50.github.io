import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        hanimcilik: resolve(__dirname, "hanimcilik/index.html"),
        dugunAjandasi: resolve(__dirname, "dugun-ajandasi/index.html"),
        pitpitGebelik: resolve(__dirname, "pitpit-gebelik/index.html"),
        pispisBebek: resolve(__dirname, "pispis-bebek/index.html"),
        dualshotRecorder: resolve(__dirname, "dualshot-recorder/index.html"),
        liftLogPro: resolve(__dirname, "lift-log-pro/index.html"),
        laserEyes: resolve(__dirname, "laser-eyes-ghost-rescue/index.html"),
      },
    },
  },
});
