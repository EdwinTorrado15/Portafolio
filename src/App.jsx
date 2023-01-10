import {Navbar, Home, Acerca, Skills} from "./components"

function App() {

  return (
    <>
      <Navbar/>
      <main className="main">
        <Home/>
        <Acerca/>
        <Skills/>
      </main>
    </>
  )
}

export default App
