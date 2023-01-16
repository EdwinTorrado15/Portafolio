import {
  Navbar,
  Home,
  Acerca,
  Skills,
  Servicios,
  Contact,
  Footer,
  ScrollUp,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <Acerca />
        <Skills />
        <Servicios />
        <Contact />
      </main>
      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
