import Restaurant from '../models/restaurant'

import { StyledButton } from '../../pages/Categories/styles'
import { CloseButton, ModalBackground, ModalContent } from './styles'

type ModalProps = {
  show: boolean
  onClose: () => void
  productData: Restaurant | null
}

export const Modal = ({ show, onClose, productData }: ModalProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
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
              <StyledButton
                onClick={() => alert('Produto adicionado ao carrinho')}
              >
                Adicionar ao carrinho -
                {productData.price
                  ? ` R$ ${productData.price.toFixed(2)}`
                  : 'Preço indisponível'}
              </StyledButton>
            </div>
          </>
        )}
      </ModalContent>
    </ModalBackground>
  )
}
