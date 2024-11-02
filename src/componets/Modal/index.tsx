import Restaurant from '../models/restaurant'

import { StyledButton } from '../../pages/Categories/styles'
import { CloseButton, ModalBackground, ModalContent } from './styles'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type ModalProps = {
  show: boolean
  onClose: () => void
  productData: Restaurant | null
}

export const Modal = ({ show, onClose, productData }: ModalProps) => {
  const dispatch = useDispatch()

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const addCart = () => {
    if (productData) {
      console.log(dispatch(add(productData)))
      onClose()
      dispatch(open())
    }
  }

  return (
    <ModalBackground show={show} onClick={handleBackdropClick}>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        {productData && (
          <>
            <img
              src={productData.image}
              alt={productData.title}
              style={{ width: '100%' }}
            />
            <div>
              <h2>{productData.title}</h2>
              <p>{productData.descriptionModal}</p>
              <p>{productData.serveInfo}</p>
              <StyledButton onClick={addCart}>
                Adicionar ao carrinho -
                {productData.price
                  ? ` R$ ${productData.price}`
                  : 'Preço indisponível'}
              </StyledButton>
            </div>
          </>
        )}
      </ModalContent>
    </ModalBackground>
  )
}
