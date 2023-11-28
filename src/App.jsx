
import './App.css'
import Adopt from './pages/Adopt'
import About from './pages/About'
import News from './pages/News'
import Home from './pages/Home'
import Paypal from './pages/Paypal'
import NewsSingle from './pages/NewsSingle'
import AdoptProcess from './pages/adopt/AdoptProcess'
import AdoptDogs from './pages/adopt/AdoptDogs'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DeviceProvider } from './context/DeviceContext'

import Layout from './components/Layout'
import AdoptionLayout from './components/AdoptionLayout'



function App() {

  return (
    <BrowserRouter>
      <DeviceProvider>
      <Routes>
        <Route element={<Layout/>}> 
          <Route index element={<Home />} />

          <Route path='adopt' element={<AdoptionLayout />}>
            <Route index element={<Adopt />}/>
            <Route path='process' element={<AdoptProcess />}/>
            <Route path='dogs' element={<AdoptDogs />} />
          </ Route>

          <Route path='about' element={<About />}/>

          <Route path='news' element={<News />}/>
          <Route path='news/:id' element={<NewsSingle />}/>

          <Route path='donate' element={<Paypal />}/>
        </Route>
      </Routes>
      </DeviceProvider>
    </BrowserRouter>
  )
}

export default App
