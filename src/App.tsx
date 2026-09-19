import { Experience } from "./components/custom/Experience"
import { Hero } from "./components/custom/Hero"
import { NavBar } from "./components/custom/Navbar"
import { Stack } from "./components/custom/Stack"
import { Footer } from "./components/custom/Footer"

export function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Stack />
      <Experience />
      <Footer/>
    </>
  )
}

export default App
