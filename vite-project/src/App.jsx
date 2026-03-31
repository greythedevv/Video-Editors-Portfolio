import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import './App.css'
import { WWMProvider } from './Context/work with me button'
import { VOPProvider } from './Context/view our project'
import {About} from './Components/About'
import { Projects } from './Components/Projects'
import {Services} from './Components/Services'


function App() {
 

  return (
    <>
    <WWMProvider>
    <VOPProvider>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Services/>
    </VOPProvider>
    </WWMProvider>
    </>
  )
}

export default App
