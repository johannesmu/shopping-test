import { Route, Routes } from 'react-router'
import { Home } from "./views/Home"
import { About } from "./views/About"
import { Header } from './components/Header'
import './App.css'

function App() {
  return (
    <>
    <Header title="multiply"/>
     <Routes>
        <Route path='/' element={ <Home title="Home"/> }/>
        <Route path='/about' element={ <About title="About"/> } />
     </Routes>
    </>
  )
}

export default App
