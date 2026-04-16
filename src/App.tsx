import { Route, Routes } from 'react-router'
import { Home } from "./views/Home"
import { About } from "./views/About"
import { Signup } from "./views/Signup"
import { Login } from "./views/Login"
import { NotFound } from './views/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useAppTheme } from './hooks/useAppTheme'

import './App.css'

function App() {
  const {theme} = useAppTheme()
  return (
    <>
      <Header title="multiply" />
      <main className="main-container" 
      style={{
        backgroundColor: theme.background,
        color: theme.text
        }}
        >
        <Routes>
          <Route path='/' element={<Home title="Home" />} />
          <Route path='/about' element={<About title="About" />} />
          <Route path='/signup' element={<Signup title="Sign up" />} />
          <Route path='/login' element={<Login title="Log in" />} />
          <Route path='/about' element={<About title="About" />} />
          <Route path="*" element={<NotFound message="Page Not Found" />} />
        </Routes>
      </main>
      <Footer title="multiply" />
    </>
  )
}

export default App
