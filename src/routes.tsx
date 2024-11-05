import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import CategoryHeader from './componets/CategoryHeader'
import Header from './componets/Header'
import Portuguesa from './pages/Portuguesa'
import Italiana from './pages/Italiana'
import Arabe from './pages/Arabe'
import Japonesa from './pages/Japonesa'
import Pizzaria from './pages/Pizzaria'
import Vegano from './pages/Vegano'

const Rotas = () => {
  const location = useLocation()

  return (
    <>
      {/* Exibe o Header comum, exceto na página de categories */}
      {location.pathname !== '/categories' &&
        location.pathname !== '/portuguesa' &&
        location.pathname !== '/italiana' &&
        location.pathname !== '/arabe' &&
        location.pathname !== '/categoria' &&
        location.pathname !== '/pizzaria' &&
        location.pathname !== '/vegano' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/categories"
          element={
            <>
              <CategoryHeader />
              <Categories />
            </>
          }
        />
        <Route
          path="/portuguesa"
          element={
            <>
              <CategoryHeader />
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
              <CategoryHeader />
              <Arabe />
            </>
          }
        />
        <Route
          path="/categoria/japonesa"
          element={
            <>
              <CategoryHeader />
              <Japonesa />
            </>
          }
        />
        <Route
          path="/pizzaria"
          element={
            <>
              <CategoryHeader />
              <Pizzaria />
            </>
          }
        />
        <Route
          path="/vegano"
          element={
            <>
              <CategoryHeader />
              <Vegano />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default Rotas
