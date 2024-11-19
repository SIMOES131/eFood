import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'

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
import { RootReducer } from './store'
import { useSelector } from 'react-redux'

import Pay from './componets/CardPay'
import Cart from './componets/Cart'

const Rotas = () => {
  const location = useLocation()
  const isCartOpen = useSelector((state: RootReducer) => state.cart.isOpen)

  const isPayOpen = useSelector((state: RootReducer) => state.pay.isOpen)

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
      {isPayOpen && <Cart />}
      {isPayOpen && <Pay />}
    </>
  )
}

export default Rotas
