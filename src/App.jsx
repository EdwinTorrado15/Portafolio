import {
  Navbar,
  Home,
  Acerca,
  Skills,
  Servicios,
  Contact,
  Footer,
  ScrollUp,
  Projects,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <Acerca />
        <Skills />
        <Projects/>
        <Contact />
      </main>
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
