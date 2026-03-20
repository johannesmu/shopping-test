import { Route, Routes } from 'react-router'
import { Home } from "../views/Home"
import { About } from "../views/About"
import { Header } from './components/Header'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={ <About/> } />
     </Routes>
    </>
  )
}

export default App
