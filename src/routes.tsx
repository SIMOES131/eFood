import { Routes, Route, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import CategoryHeader from './componets/CategoryHeader'
import Header from './componets/Header'

const Rotas = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/categories' && <Header />}

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
      </Routes>
    </>
  )
}

export default Rotas
