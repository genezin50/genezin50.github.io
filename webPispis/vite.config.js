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
        dugunAjandasi: resolve(__dirname, "dugun-ajandasi/index.html"),
        pitpitGebelik: resolve(__dirname, "pitpit-gebelik/index.html"),
        pispisBebek: resolve(__dirname, "pispis-bebek/index.html"),
        orderOfColors: resolve(__dirname, "order-of-colors/index.html"),
        blokBlastFlow: resolve(__dirname, "blok-blast-flow/index.html"),
        liftLogPro: resolve(__dirname, "lift-log-pro/index.html"),
        laserEyes: resolve(__dirname, "laser-eyes-ghost-rescue/index.html"),
        swipeCleanPhoto: resolve(__dirname, "swipe-clean-photo/index.html"),
        dualcamCapture: resolve(__dirname, "dualcam-capture/index.html"),
        shotzinCam: resolve(__dirname, "shotzin-cam/index.html"),
      },
    },
  },
});
