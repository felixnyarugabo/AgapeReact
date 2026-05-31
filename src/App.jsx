
import "./App.css"

import Layout from './components/Layout'


import Homepage from './components/Homepage'
import Support from './pages/Support'
import Service from './pages/Service'
import Settings from './pages/Settings'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router'

export default function App() {
  return (
    <div className='main'>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Layout />}>

            <Route index element={<Homepage />} />

            <Route path='home' element={<Homepage />} />

            <Route path='service' element={<Service />} />

            <Route path='support' element={<Support />} />

            <Route path='setting' element={<Settings />} />

          </Route>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

