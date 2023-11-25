
import './App.css'
import Adopt from './pages/Adopt'
import About from './pages/About'
import News from './pages/News'
import Home from './pages/Home'
import Paypal from './pages/Paypal'
import NewsSingle from './pages/NewsSingle'

import Header from './components/Header'
import NavMobil from './components/NavMobil'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MenuProvider } from './context/MenuContext'
import { DeviceProvider } from './context/DeviceContext'


function App() {

  return (
    <BrowserRouter>
    
      <DeviceProvider>
      <MenuProvider>
        <Header />
        <NavMobil />
      </MenuProvider>
      

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adopt' element={<Adopt />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/news/:id' element={<NewsSingle />}/>
        <Route path='/donate' element={<Paypal />}/>
      </Routes>
      </DeviceProvider>
    </BrowserRouter>
  )
}

export default App
