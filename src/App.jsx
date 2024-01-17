import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./sections/Hero/Hero"
import About from "./sections/About/About"
import Services from "./sections/Services/Services"
import Technology from "./sections/Technology/Technology"
import Process from "./sections/Process/Process"
import OptIn from "./sections/OptIn/OptIn"
import React from "react"

const App = () => {
  return (
    <div className="app">
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Technology />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <OptIn />
      </section>     
      <section>
        <Footer />
      </section>     
    </div>
  )
}

export default App;