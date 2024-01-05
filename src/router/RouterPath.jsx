import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Lodging from '../pages/Lodging/Lodging'
import About from '../pages/About/About'
import Error from '../pages/Error/Error'
import Layout from '../layout/Layout'

//Ce composant configure les itinéraires (routes) de navigation à l'aide
//du système de routage de React Router.
function RouterPath() {
  return (
    <BrowserRouter basename="/kasa">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default RouterPath
