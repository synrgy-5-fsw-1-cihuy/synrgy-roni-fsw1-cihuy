import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...process.env };
  return {
    plugins: [react()],
    define: {
      "process.env": env,
    },
  };
});
