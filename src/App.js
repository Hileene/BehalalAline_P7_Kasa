import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Lodging from './pages/Lodging/Lodging'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Layout from "./layout/Layout"

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lodging/:id" element={<Lodging />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
