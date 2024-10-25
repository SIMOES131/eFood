import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import CategoryHeader from './componets/CategoryHeader'
import Header from './componets/Header'
import Restaurant from './componets/models/restaurant' // Importe o modelo de restaurante

const Rotas = () => {
  const location = useLocation()
  const [cart, setCart] = useState<Restaurant[]>([]) // Gerencia o estado do carrinho

  // Função para adicionar itens ao carrinho
  const addToCart = (item: Restaurant) => {
    setCart((prevCart) => [...prevCart, item])
  }

  return (
    <>
      {/* Exibe o Header comum, exceto na página de categories */}
      {location.pathname !== '/categories' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/categories"
          element={
            <>
              {/* Passa o estado do carrinho para o CategoryHeader */}
              <CategoryHeader cartItemCount={cart.length} />
              {/* Passa a função addToCart para o Categories */}
              <Categories addToCart={addToCart} />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default Rotas
