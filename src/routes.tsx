import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import CategoryHeader from './componets/CategoryHeader'
import Header from './componets/Header'
import Portuguesa from './pages/Portuguesa'
import Italiana from './pages/Italiana'
import Arabe from './pages/Arabe'
import Japonesa from './pages/Japonesa'
import Pizzaria from './pages/Pizzaria'
import Vegano from './pages/Vegano'
import JapanHeader from './componets/CategoryHeader/JapanHeader/idex'
import VeganoHeader from './componets/CategoryHeader/VeganoHeader'
import PizzariaHeader from './componets/CategoryHeader/PizzariaHeader'
import ArabeHeader from './componets/CategoryHeader/ArabeHeader'
import PortuguesHeader from './componets/CategoryHeader/PortuguesHeader'

const Rotas = () => {
  return (
    <>
      {location.pathname !== '/portuguesa' &&
        location.pathname !== '/italiana' &&
        location.pathname !== '/arabe' &&
        location.pathname !== '/japonesa' &&
        location.pathname !== '/pizzaria' &&
        location.pathname !== '/vegano' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/portuguesa"
          element={
            <>
              <PortuguesHeader />
              <Portuguesa />
            </>
          }
        />
        <Route
          path="/italiana"
          element={
            <>
              <CategoryHeader />
              <Italiana />
            </>
          }
        />
        <Route
          path="/arabe"
          element={
            <>
              <ArabeHeader />
              <Arabe />
            </>
          }
        />
        <Route
          path="/japonesa"
          element={
            <>
              <JapanHeader />
              <Japonesa />
            </>
          }
        />
        <Route
          path="/pizzaria"
          element={
            <>
              <PizzariaHeader />
              <Pizzaria />
            </>
          }
        />
        <Route
          path="/vegano"
          element={
            <>
              <VeganoHeader />
              <Vegano />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default Rotas
