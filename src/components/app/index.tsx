import './index.css'
import About from "../about/About";
import Hero from "../hero/Hero";
import Nav from "../nav/Nav";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/contact"

export default function App() {
  return (
    <div className="mainContainer">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
