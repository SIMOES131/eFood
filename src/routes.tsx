import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'

import CategoryHeader from './componets/CategoryHeader/ItalianHeader'
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
import ItalianHeader from './componets/CategoryHeader/ItalianHeader'

const Rotas = () => {
  const location = useLocation()

  const renderHeader = () => {
    switch (location.pathname) {
      case '/portuguesa':
        return <PortuguesHeader />
      case '/italiana':
        return <ItalianHeader />
      case '/arabe':
        return <ArabeHeader />
      case '/japonesa':
        return <JapanHeader />
      case '/pizzaria':
        return <PizzariaHeader />
      case '/vegano':
        return <VeganoHeader />
      default:
        return <Header />
    }
  }

  return (
    <>
      {renderHeader()}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portuguesa" element={<Portuguesa />} />
        <Route path="/italiana" element={<Italiana />} />
        <Route path="/arabe" element={<Arabe />} />
        <Route path="/japonesa" element={<Japonesa />} />
        <Route path="/pizzaria" element={<Pizzaria />} />
        <Route path="/vegano" element={<Vegano />} />
      </Routes>
    </>
    /*<>
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
              <ItalianHeader />
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
    </>*/
  )
}

export default Rotas
