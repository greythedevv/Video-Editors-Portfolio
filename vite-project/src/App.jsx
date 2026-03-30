import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import './App.css'
import { WWMProvider } from './Context/work with me button'
import { VOPProvider } from './Context/view our project'
import {About} from './Components/About'


function App() {
 

  return (
    <>
    <WWMProvider>
    <VOPProvider>
     <Navbar/>
     <Home/>
     <About/>
    </VOPProvider>
    </WWMProvider>
    </>
  )
}

export default App
