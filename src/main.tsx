import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { config } from "@fortawesome/fontawesome-svg-core"
import { MotionConfig } from "motion/react"
import "@fortawesome/fontawesome-svg-core/styles.css"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

config.autoAddCss = false

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>
)
