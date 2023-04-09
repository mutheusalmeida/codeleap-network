import { ReactNode, forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalRef } from 'modal'

import * as S from './styles'

type BaseModalProps = {
  children: ReactNode
  defaultOpen?: boolean
  hasOverlay?: boolean
  onClose?: () => void
}

const createModalRoot = () => {
  let modalRoot: HTMLDivElement | null = document.querySelector('[data-js="modal-root"]')
  const rootElement = document.querySelector('[data-js="root"]')

  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.dataset.js = 'modal-root'
    rootElement?.appendChild(modalRoot)
  }

  return modalRoot
}

export const BaseModal = forwardRef<ModalRef, BaseModalProps>(({ defaultOpen = false, onClose, children, hasOverlay = true }, modalRef) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])

  const close = useCallback(() => {
    setIsOpen(false)

    if (onClose) onClose()
  }, [onClose])

  useImperativeHandle(modalRef, () => ({ close, open, isOpen }))

  useEffect(() => {
    setIsOpen(defaultOpen)
  }, [defaultOpen])

  return createPortal(
    <S.BaseModalWrapper hasOverlay={hasOverlay}>
      <S.ModalContainer>
        {children}
      </S.ModalContainer>
    </S.BaseModalWrapper>,
    createModalRoot(),
  )
})
