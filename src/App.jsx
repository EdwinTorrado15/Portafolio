import {Navbar, Home, Acerca} from "./components"

function App() {

  return (
    <>
      <Navbar/>
      <main className="main">
        <Home/>
        <Acerca/>
      </main>
    </>
  )
}

export default App
