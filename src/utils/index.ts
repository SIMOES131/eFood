import { useState } from 'react'
import Restaurant from '../componets/models/restaurant'

export const getTotalPrice = (items: { price?: number }[]) => {
  return items.reduce((acumulador, valorAtual) => {
    return acumulador + (valorAtual.price || 0)
  }, 0)
}

export const Plates = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Restaurant | null>(
    null
  )

  const handleAddToCart = (item: Restaurant) => {
    setSelectedProduct(item)
    setShowModal(true)
  }

  return { showModal, setShowModal, selectedProduct, handleAddToCart }
}
